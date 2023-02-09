<template>
  <span
    class="absolute rounded-full p-2 select-none whitespace-nowrap capitalize text-sm text-white bg-slate-800 dark:!bg-slate-800 [&.bg-slate-100]:bg-slate-100"
  >
    <slot></slot>

    <span class="absolute -bottom-2 left-1/2 -translate-x-1/2">
      <svg
        class="fill-current text-slate-800 dark:!text-slate-800 [.bg-slate-100_&]:text-slate-100"
        width="18"
        height="11"
        viewBox="0 0 18 11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4603 9.67279C9.67691 10.4683 8.39389 10.4683 7.61044 9.67279L1.48375 3.45199C0.238613 2.18773 1.13423 0.0485944 2.9087 0.0485942L15.1621 0.0485931C16.9366 0.048593 17.8322 2.18772 16.587 3.45199L10.4603 9.67279Z"
        />
      </svg>
    </span>
  </span>
</template>

<script setup lang="ts"></script>

<style scoped></style>
