<template>
  <div>
    <Test />
  </div>
</template>

<script setup lang="ts">
import Test from "@/components/test.vue";

console.log(Test.name);
</script>

<style>
:root {
  --primary-color: blue;
}
</style>
