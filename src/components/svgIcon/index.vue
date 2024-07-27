<template>
  <svg :class="iconClass">
    <use
      :xlink:href="prefix + name"
      rel="external nofollow"
      :fill="color"
    ></use>
  </svg>
</template>
<script setup lang="ts">
  defineProps({
    // 是否显示
    prefix: {
      type: String,
      default: '#icon-'
    },
    name: String,
    color: {
      type: String,
      default: '#000'
    },
    iconClass: {
      type: String,
      default: ''
    }
  });
</script>
<style lang="scss" scoped></style>
