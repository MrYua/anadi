<template>
  <div
    :class="getClass"
    ref="dom"
    @mouseenter.stop="onMouseenter"
    @mouseleave.stop="onMouseleave"
  >
    <slot></slot>

    <div class="draggrable__aux">
      <div class="draggrable__aux-dot"></div>
      <div class="draggrable__aux-dot"></div>
      <div class="draggrable__aux-dot"></div>
      <div class="draggrable__aux-dot"></div>
      <div class="draggrable__aux-line"></div>
      <div class="draggrable__aux-line"></div>
      <div class="draggrable__aux-line"></div>
      <div class="draggrable__aux-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClickOut } from "@/hooks/useClickOut";

const dom = ref<HTMLElement>();

const isHover = ref<boolean>(false);
const isFocus = ref<boolean>(false);

function onMouseenter(event: MouseEvent) {
  isHover.value = true;
}

function onMouseleave(event: MouseEvent) {
  isHover.value = false;
}

const getClass = computed(() => {
  return {
    draggrable: true,
    "draggrable--hover": unref(isHover),
    "draggrable--focus": unref(isFocus),
  };
});
</script>

<style lang="less" scoped>
.draggrable {
  --uno: relative;
  padding: 4px 8px;

  width: 400px;
  height: 400px;

  &:not(&--hover) {
  }

  &__aux {
    --uno: absolute inset-0 hidden;
    border: 1px solid red;
    &-dot {
      --uno: absolute;

      &::after {
        --uno: absolute;
        width: 20px;
        height: 20px;
      }
    }

    &-line {
      --uno: absolute;
    }
  }
  &.draggrable--hover {
    .draggrable__aux {
      --uno: block;
    }
  }
}
</style>
