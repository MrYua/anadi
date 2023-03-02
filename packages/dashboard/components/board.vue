<template>
  <div class="board" ref="boardRef">1</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.board {
  border: 1px solid red;
  height: 600px;
  background-image: conic-gradient(
      from 270deg at 50% 1px,
      #ebecf2 180deg,
      transparent 0
    ),
    conic-gradient(from 180deg at 1px 50%, #ebecf2 180deg, transparent 0);
}
</style>
