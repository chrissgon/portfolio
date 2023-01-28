<template>
  <span
    class="rounded-full p-2 select-none whitespace-nowrap capitalize text-sm text-white bg-slate-800"
  >
    <slot></slot>
    <img
      src="/triangle.svg"
      class="absolute -bottom-2 left-1/2 -translate-x-1/2"
    />
  </span>
</template>

<script setup lang="ts"></script>

<style scoped></style>
