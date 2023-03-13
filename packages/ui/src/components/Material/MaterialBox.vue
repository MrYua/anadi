<template>
  <div class="material-box h-full w-full relative">
    <div class="material-box__header">
      <slot name="header"></slot>
    </div>

    <div class="material-box__content">
      <slot></slot>
    </div>

    <div class="material-box__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.material-box{
  border: 1px solid red;
}
</style>