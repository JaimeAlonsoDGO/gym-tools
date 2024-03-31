<template>
  <AppWorkAreaFrame :tabs="tabs" :initTab="initTab" :header="header" />
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  const localePath = useLocalePath();
  const { t } = useI18n();
  import { useSettingsRoutes } from '~/composables/routes/useSettingsRoutes.js';

  const tabs = ref([]);
  const initTab = ref(0);
  const header = ref({});

  onMounted(() => {
    setHeader();

    tabs.value = useSettingsRoutes({ localePath, t });

    if (!mustRedirectOnMount()) {
      initTab.value =
        tabs.value.find((tab) => tab.to === useRoute().fullPath)?.id || 0;
      return;
    }

    redirectOnMount();
  });
  const setHeader = () => {
    header.value = {
      title: t('systemRoutes.settings'),
      description: t('screensDescriptions.settings'),
      actions: [],
    };
  };

  const mustRedirectOnMount = () => {
    const currentRoute = useRoute();
    const getRouteBaseName = useRouteBaseName();
    const baseName = getRouteBaseName(currentRoute);
    return baseName.split('-')?.at(-1) === 'settings';
  };

  const redirectOnMount = () => {
    navigateTo(tabs.value?.at(0)?.to);
    initTab.value = 1;
  };
</script>
