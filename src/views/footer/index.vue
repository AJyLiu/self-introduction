<template>
  <footer class="footer">
    <p class="copy-right">Copyright © 2024 JyLiu</p>
    <p><a class="gov-cn" href="https://beian.miit.gov.cn/">蜀ICP备2024087202号</a></p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .footer {
    background-color: #1b1b1b;
    color: #a49999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
    .copy-right {
      margin: 0 auto;
      margin-bottom: 0.2rem;
      font-size: 0.7rem;
    }
    .gov-cn {
      color: #a49999;
      font-size: 0.7rem;
    }
  }
</style>
