# Vue Email Editor

The excellent drag-n-drop email editor by [Unlayer](https://unlayer.com/embed) as a [Vue](https://vuejs.org/) _wrapper
component_. This is the most powerful and developer friendly visual email builder for your app.

|                                                         Video Overview                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------: |
| [![Vue Email Editor](https://unroll-assets.s3.amazonaws.com/unlayervideotour.png)](https://www.youtube.com/watch?v=MIWhX-NF3j8) |
|                                      _Watch video
overview: https://youtu.be/MIWhX-NF3j8_                                       |

## Live Demo

Check out the live demo here: https:
https://vue-email-editor-demo.netlify.app/ ([Source Code](https://github.com/@tofandel/vue-unlayer/tree/master/src))

## Installation

The easiest way to use Vue Email Editor is to install it from Npm or Yarn and include it in your own Vue build process.

```
npm install @tofandel/vue-unlayer --save
```

or

```
yarn add @tofandel/vue-unlayer
```

## Usage

Next, you'll need to import the Email Editor component to your app.

**App.vue**

```vue

<template>
  <div id="example">
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>

        <button
          v-if="editor"
          @click="saveDesign"
        >
          Save Design
        </button>
        <button
          v-if="editor"
          @click="exportHtml"
        >
          Export HTML
        </button>
      </div>

      <EmailEditor
        v-model:editor="editor"
        @load="editorLoaded"
        @ready="editorReady"
      />
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';

import EmailEditor from '@tofandel/vue-unlayer';

let editor = shallowRef(null);
// called when the editor is created
const editorLoaded = () => {
  editor.value.loadDesign({});
};
// called when the editor has finished loading
const editorReady = () => {
  console.log('editorReady');
};
const saveDesign = () => {
  editor.value.saveDesign(
    (design) => {
      console.log('saveDesign', design);
    },
  );
};
const exportHtml = () => {
  editor.value.exportHtml(
    (data) => {
      console.log('exportHtml', data);
    },
  );
};
</script>
```

### Methods

| method         | params              | description                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| **loadDesign** | `Object data`       | Takes the design JSON and loads it in the editor        |
| **saveDesign** | `Function callback` | Returns the design JSON in a callback function          |
| **exportHtml** | `Function callback` | Returns the design HTML and JSON in a callback function |

See the [example source](https://github.com/unlayer/@tofandel/vue-unlayer/tree/master/src) for a reference
implementation.

### Props

- `editorId` `String` HTML div id of the container where the editor will be embedded (optional)
- `minHeight` `String` minimum height to initialize the editor with (default 500px)
- `options` `Object` options passed to the Unlayer editor instance (default {})
- `tools` `Object` configuration for the built-in and custom tools (default {})
- `appearance` `Object` configuration for appearance and theme (default {})
- `projectId` `Integer` Unlayer project ID (optional)
- `locale` `String` translations string (default en-US)

See the [Unlayer Docs](https://docs.unlayer.com/) for all available options.

Here's an example using the above properties...

**App.vue**

```html

<template>
  <div id="app">
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>

        <button v-if="editor" @click="saveDesign">Save Design</button>
        <button v-if="editor" @click="exportHtml">Export HTML</button>
      </div>

      <EmailEditor
        v-model:editor="editor"
        :appearance="appearance"
        :min-height="minHeight"
        :project-id="projectId"
        :locale="locale"
        :tools="tools"
        :options="options"
        @load="editorLoaded"
        @ready="editorReady"
      />
    </div>
  </div>
</template>

<script>
  import EmailEditor from '@tofandel/vue-unlayer';

  export default {
    name: 'app',
    components: {
      EmailEditor,
    },
    data() {
      return {
        editor: null,
        minHeight: '1000px',
        locale: 'en',
        projectId: 0, // replace with your project id
        tools: {
          // disable image tool
          image: {
            enabled: false,
          },
        },
        options: {},
        appearance: {
          theme: 'dark',
          panels: {
            tools: {
              dock: 'right',
            },
          },
        },
      };
    },
    methods: {
      // called when the editor is created
      editorLoaded() {
        console.log('editorLoaded');
        // Pass your template JSON here
        // this.editor.loadDesign({});
      },
      // called when the editor has finished loading
      editorReady() {
        console.log('editorReady');
      },
      saveDesign() {
        this.editor.saveDesign((design) => {
          console.log('saveDesign', design);
        });
      },
      exportHtml() {
        this.editor.exportHtml((data) => {
          console.log('exportHtml', data);
        });
      },
    },
  };
</script>
```

## Custom Tools

Custom tools can help you add your own content blocks to the editor. Every application is different and needs different
tools to reach it's full potential. [Learn More](https://docs.unlayer.com/docs/custom-tools)

[![Custom Tools](https://unroll-assets.s3.amazonaws.com/custom_tools.png)](https://docs.unlayer.com/docs/custom-tools)

## Localization

You can submit new language translations by creating a PR on this GitHub repo: https://github.com/unlayer/translations.
Translations managed by [PhraseApp](https://phraseapp.com)

### License

Copyright (c) 2021 Unlayer. [MIT](LICENSE) Licensed.
