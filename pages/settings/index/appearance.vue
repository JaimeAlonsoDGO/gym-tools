<template>
  <div>
    <p class="font-vera font-medium mb-[16px]">
      {{ $t('appearance.language') }}
    </p>
    <section class="radio-section border-b-gray-100 dark:border-b-gray-500">
      <AppInputRadio
        v-for="option in languageOptions"
        :key="option.id"
        v-model="language"
        v-bind="option"
        :value="option.id"
        :disabled="false"
        :label="option.name"
        @update:modelValue="() => {}"
      />
    </section>
    <p class="font-vera font-medium mb-[16px]">
      {{ $t('appearance.appearance') }}
    </p>
    <section class="radio-section border-b-gray-100 dark:border-b-gray-500">
      <AppInputRadio
        v-for="option in themeOptions"
        :key="option.id"
        v-model="theme"
        v-bind="option"
        :value="option.id"
        :disabled="false"
        :label="option.name"
        @update:modelValue="() => {}"
      />
    </section>
  </div>
</template>
<script setup>
  import { ref, onMounted, watch } from 'vue';
  const { locale, setLocale, t } = useI18n();
  import { usePreferencesStore } from '~/store/preferences';
  const preferencesStore = usePreferencesStore();

  const language = ref({});
  const languageOptions = ref([]);
  const theme = ref({});
  const themeOptions = ref([]);
  const themeLSKey = 'gym-tools-theme';

  onMounted(() => {
    languageOptions.value = getLanguageOptions();
    language.value = getCurrentLanguage();
    themeOptions.value = getThemeOptions();
    theme.value = findCurrentTheme();
  });

  watch(
    () => language.value,
    (newLanguage, oldLanguage) => {
      if (newLanguage === oldLanguage || !oldLanguage || !newLanguage) {
        return;
      }
      setLanguage(newLanguage);
    }
  );

  watch(
    () => theme.value,
    (newTheme, oldTheme) => {
      if (newTheme === oldTheme || !oldTheme || !newTheme) {
        return;
      }
      setTheme(newTheme);
    }
  );

  const getLanguageOptions = () => {
    return [
      {
        id: 'en',
        name: t('languages.en'),
        value: 'en',
      },
      {
        id: 'es',
        name: t('languages.es'),
        value: 'es',
      },
    ];
  };

  const getThemeOptions = () => {
    return [
      {
        id: 'light',
        name: t('themes.light'),
      },
      {
        id: 'dark',
        name: t('themes.dark'),
      },
    ];
  };

  const getCurrentLanguage = () => {
    return (
      languageOptions?.value.find((option) => option.value === locale.value)
        ?.id || languageOptions?.value?.at(0)?.id
    );
  };

  const setLanguage = (languageKey) => {
    if (!languageKey) {
      return;
    }
    setLocale(languageKey);
    return languageKey;
  };
  const findCurrentTheme = () => {
    const currentTheme = getTheme();
    return (
      themeOptions?.value.find((option) => option.id === currentTheme)?.id || {}
    );
  };
  const setTheme = (themeKey) => {
    if (!themeKey) {
      return;
    }
    localStorage.setItem(themeLSKey, themeKey);
    preferencesStore.setTheme({ theme: themeKey });
    return themeKey;
  };

  const getTheme = () => {
    const storeTheme = preferencesStore.getTheme;
    const lsTheme = localStorage.getItem(themeLSKey);
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    return storeTheme || lsTheme || systemTheme;
  };
</script>
<style scoped>
  .radio-section {
    @apply flex items-center gap-[16px] pb-[16px] mb-[16px] border-b-2;
  }
</style>
