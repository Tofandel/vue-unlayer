<template>
  <div id="designEdit">
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>

        <RouterLink to="/dashboard">
          Dashboard
        </RouterLink>
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

import EmailEditor from '@/EmailEditor';

let editor = shallowRef(null);
// called when the editor is created
const editorLoaded = () => {
  console.log('editorLoaded');
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

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

#app, #designEdit {
  height: 100%;
}

#designEdit .container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

#bar {
  flex: 1;
  background-color: #40B883;
  color: #FFF;
  padding: 10px;
  display: flex;
  max-height: 40px;
}

#bar h1 {
  flex: 1;
  font-size: 16px;
  text-align: left;
}

#bar button {
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #000;
  color: #FFF;
  border: 0px;
  max-width: 150px;
  cursor: pointer;
}

#bar a {
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: 0px;
  cursor: pointer;
  text-align: right;
  text-decoration: none;
  line-height: 160%;
}
</style>
