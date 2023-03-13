<template>
  <div class="material-box">
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
