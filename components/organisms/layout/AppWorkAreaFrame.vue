<template>
  <div class="h-[calc(100vh-82px)] flex flex-col p-[16px] hover:overflow-auto">
    <AppTitleActions v-if="header" class="mb-[16px]" v-bind="header" />
    <AppTabs v-if="tabs.length" :tabs="tabs" :initTab="initTab" />
    <section class="flex-grow bg-white dark:bg-background-dark p-[16px]">
      <slot>
        <NuxtPage />
      </slot>
    </section>
  </div>
</template>
<script setup>
  const props = defineProps({
    tabs: {
      type: Array,
      default: () => [],
    },
    initTab: {
      type: Number,
      default: 0,
    },
    header: {
      type: [Object, null],
      default: null,
    },
  });
</script>
