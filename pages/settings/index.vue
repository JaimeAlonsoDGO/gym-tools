<template>
  <div class="w-full h-[calc(100vh-82px)] flex flex-col p-[16px]">
    <AppTabs v-if="tabs.length" :tabs="tabs" :initTab="initTab" />
    <section class="flex-grow bg-white p-[16px]">
      <slot>
        <NuxtPage />
      </slot>
    </section>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import useSettingsRoutes from '~/composables/routes/useSettingsRoutes.js';
  import AppTabs from '~/components/organisms/tabs/AppTabs.vue';

  const tabs = ref([]);
  const initTab = ref(0);

  onMounted(() => {
    tabs.value = useSettingsRoutes();
    navigateTo(tabs.value?.at(0)?.to);
    initTab.value = 1;
  });
</script>
