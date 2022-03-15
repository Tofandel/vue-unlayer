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

import sample from '../data/sample.json';

import EmailEditor from '@/EmailEditor';

let editor = shallowRef(null);
// called when the editor is created
const editorLoaded = () => {
  editor.value.loadDesign(sample);
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

#app, #example {
  height: 100%;
}

#example .container {
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
</style>
