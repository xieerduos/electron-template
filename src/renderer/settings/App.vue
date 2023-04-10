<template>
  <Navbar></Navbar>
  <div class="settings-content">
    <router-view />
  </div>
</template>
<script setup>
import Navbar from '@/renderer/settings/components/Navbar';
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-flow: row nowrap;
}

.settings-content {
  flex: 1;
}
</style>
