<template>
  <div class="home">
    Title: <input v-model="title" />
    <button type="button" @click="setTitle(title)">Set</button>
    <hr />

    <button type="button" @click="openFile" :disabled="disabledButton">Open a File</button>
    File path: <strong id="filePath">{{ filePath }}</strong>
    <hr />
    <div>
      <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const count = ref(0);
const title = ref('Electron Template');
const filePath = ref('');
const disabledButton = ref(false);

function setTitle(title) {
  window.electronAPI.setTitle(title);
}

const openFile = async () => {
  try {
    disabledButton.value = true;
    const value = await window.electronAPI.openFile();
    filePath.value = value;
  } catch (error) {
    console.error('[openFile error]', error);
  } finally {
    disabledButton.value = false;
  }
};
</script>
