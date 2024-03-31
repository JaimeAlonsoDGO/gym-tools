<template>
  <NuxtLayout
    class="font-roboto text-gray-800 dark:text-gray-100"
    :class="{ dark: isDarkMode }"
  >
    <NuxtPage
      class="font-roboto text-gray-800 dark:text-gray-100"
      :class="{ dark: isDarkMode }"
    />
  </NuxtLayout>
</template>
<script setup>
  import { computed, onMounted } from 'vue';
  import { usePreferencesStore } from '~/store/preferences';

  const preferencesStore = usePreferencesStore();
  const isDarkMode = computed(() => {
    // get Store theme
    return preferencesStore.getTheme === 'dark';
  });

  onMounted(() => {
    preferencesStore.setTheme({
      theme:
        localStorage.getItem('gym-tools-theme') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
    });
  });
</script>
