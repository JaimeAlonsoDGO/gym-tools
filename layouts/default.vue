<template>
  <div class="h-screen flex bg-gray-100 dark:bg-background-light">
    <AppSidebar class="bg-white dark:bg-background-dark" />
    <div class="flex-grow h-screen">
      <AppHeader class="bg-white dark:bg-background-dark" />
      <slot />
    </div>
  </div>
</template>
<script setup>
  import AppHeader from '~/components/organisms/AppHeader.vue';
  import AppSidebar from '~/components/organisms/AppSidebar.vue';
</script>
