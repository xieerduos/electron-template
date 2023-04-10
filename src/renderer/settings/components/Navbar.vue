<template>
  <ul class="menu-wrap">
    <li
      v-for="item in menuList"
      :key="item.id"
      :class="{'is-active': item.isActive}"
      @click="clickItem(item)"
      class="menu-item">
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const menuList = ref([
  {id: 1, label: '账号设置', to: '/', isActive: true},
  {id: 2, label: '通用设置', to: '/general', isActive: false},
  {id: 3, label: '快捷键', to: '/shortcuts', isActive: false},
  {id: 4, label: '关于ELT', to: '/about', isActive: false}
]);

const router = useRouter();

function clickItem(current) {
  menuList.value = menuList.value.map((item) => ({
    ...item,
    isActive: current === item
  }));
  router.replace({path: current.to});
}
</script>

<style lang="scss" scoped>
.menu-wrap {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  width: 140px;
  margin-top: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #e3e3e3;
}
.menu-item {
  padding: 8px 12px;
  transition: color 0.2s ease;
  cursor: pointer;
  color: #141414;
  font-size: 14px;
}
.menu-item.is-active {
  color: #1677fe;
}
</style>
