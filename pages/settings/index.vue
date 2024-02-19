<template>
  <AppWorkAreaFrame :tabs="tabs" :initTab="initTab" :header="header" />
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  const { t } = useI18n();
  import useSettingsRoutes from '~/composables/routes/useSettingsRoutes.js';

  const tabs = ref([]);
  const initTab = ref(0);
  const header = {
    title: t('systemRoutes.settings'),
    description: t('screensDescriptions.settings'),
    actions: [],
  };

  onMounted(() => {
    tabs.value = useSettingsRoutes();
    navigateTo(tabs.value?.at(0)?.to);
    initTab.value = 1;
  });
</script>
