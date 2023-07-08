<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main style="margin-top: 70px;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import TaroUser from './taro/TaroUser.taro';
import { onMounted } from 'vue';

onMounted(() => {
  console.log(TaroUser);
  
})
</script>

<style scoped></style>
