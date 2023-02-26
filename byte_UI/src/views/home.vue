<template>
  <div class="container">
    <div class="left-menu">
      <li
        v-for="(item,index) in menuList[0].children"
        :key="index"
        :class="{active:activeIndex === index}"
        @click="switchMenu(item,index)"
      >
        {{ item.name}}
      </li>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import menuList from '@/router/routerPage/pages.js'
import { useRouter } from 'vue-router'

const activeIndex = ref(0);
const router  = useRouter();

// 菜单跳转
const switchMenu = (item,index) => {
  activeIndex.value = index
  router.push({
    name: item.name
  })
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  .left-menu{
    width: 360px;
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #f0f0f0;
    li{
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.active{
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14, 128, 235, .1);
    }
  }
  .router-view{
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>