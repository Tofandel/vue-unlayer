const isScriptInjected = (url) => {
  const scripts = document.querySelectorAll('script');
  let injected = false;

  scripts.forEach((script) => {
    if (script.src.includes(url)) {
      injected = true;
    }
  });

  return injected;
};


export default (url, callback) => {
  if (!isScriptInjected(url)) {
    const embedScript = document.createElement('script');
    embedScript.setAttribute('src', url);
    embedScript.onload = () => {
      callback();
    };
    document.head.appendChild(embedScript);
  } else {
    callback();
  }
};
