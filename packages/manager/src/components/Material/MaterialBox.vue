<template>
  <div class="material-box wh-full relative flex-col">
    <div class="material-box__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="material-box__content flex-1-hidden">
      <slot></slot>
    </div>

    <div class="material-box__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.material-box {
}
</style>
