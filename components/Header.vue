<template>
  <header
    class="w-full flex flex-col sm:flex-row justify-between items-center z-10"
  >
    <Logo />
    <Nav class="!hidden lg:!flex" />
    <div class="flex items-center mt-5 sm:m-0">
      <Translator class="mr-4" />


      <DarkMode ref="DarkModeRef" />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
