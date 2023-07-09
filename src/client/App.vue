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
import TaroUser,{getUserById} from './taro/TaroUser';
import { onMounted } from 'vue';

onMounted(async () => {
  console.log(TaroUser);
  await getUserById({a:1})
})
</script>

<style scoped></style>
