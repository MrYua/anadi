<template>
  <div class="palette">
    <draggable />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.palette {
  --uno: relative;
  height: 480px;
  border: 1px solid red;
  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
