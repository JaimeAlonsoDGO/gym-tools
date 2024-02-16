<template>
  <div class="h-screen flex bg-gray-100">
    <AppSidebar class="bg-white" />
    <div class="flex-grow">
      <AppHeader class="bg-white" />
      <slot />
    </div>
  </div>
</template>
<script setup>
  import AppHeader from '~/components/organisms/AppHeader.vue';
  import AppSidebar from '~/components/organisms/AppSidebar.vue';
</script>
