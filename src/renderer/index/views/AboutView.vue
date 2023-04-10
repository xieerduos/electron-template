<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>主进程传过来的{{ counter }}</p>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const counter = ref(0);

function updateCounter(event, data) {
  console.log('[event, data]', event, data);
  counter.value = counter.value + 1;
}

let removeUpdateCounter = () => {};

onMounted(() => {
  removeUpdateCounter = window.electronAPI.receive('update-counter', updateCounter);
});
onBeforeUnmount(() => {
  removeUpdateCounter();
});
</script>
