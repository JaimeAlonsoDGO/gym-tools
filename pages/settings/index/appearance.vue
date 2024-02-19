<template>
  <div>
    <p class="font-vera font-medium mb-[16px]">
      {{ $t('appearance.language') }}
    </p>
    <section
      class="flex items-center gap-[16px] pb-[16px] mb-[16px] border-b-2 border-gray-200"
    >
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
  </div>
</template>
<script setup>
  import { ref, onMounted, watch } from 'vue';
  const { locale, setLocale, t } = useI18n();

  const language = ref({});
  const appearance = ref({});
  const languageOptions = ref([]);

  onMounted(() => {
    languageOptions.value = getLanguageOptions();
    language.value = getCurrentLanguage();
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
</script>
