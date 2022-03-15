<template>
  <div
    :id="editorId"
    class="unlayer-editor"
    :style="{ minHeight }"
  />
</template>

<script setup>
import loadScript from './loadScript';

import autoincrement from '@/autoincrement';

const emits = defineEmits([
    'load',
    'ready',
    'update:editor',
]);

const props = defineProps({
  editor: Object,
  editorId: {
    type: String,
    default: () => 'editor-' + autoincrement(),
  },
  options: Object,
  projectId: Number,
  tools: Object,
  appearance: Object,
  locale: String,
  minHeight: {
    type: String,
    default: '500px',
  },
});

let editor = null;

loadScript('//editor.unlayer.com/embed.js', () => {
  const options = props.options || {};

  ['projectId', 'tools', 'appearance', 'locale'].forEach((k) => {
    if (props[k]) {
      options[k] = props[k];
    }
  });

  editor = window.unlayer.createEditor({
    ...options,
    id: props.editorId,
    displayMode: 'email',
    source: {
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
    },
  });

  emits('update:editor', editor);

  emits('load', editor);

  editor.addEventListener('editor:ready', () => {
    emits('ready', editor);
  });
});
</script>

<style lang="css">
.unlayer-editor {
  flex: 1;
  display: flex;
}
</style>
