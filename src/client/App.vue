<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main style="margin-top: 70px;">
        <router-view></router-view>
      </el-main>
      <!-- <Footer></Footer> -->
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
</script>

<style scoped></style>
