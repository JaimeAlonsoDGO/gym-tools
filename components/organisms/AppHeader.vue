<template>
  <div
    class="border-b-[2px] p-[20px] font-vera flex items-center justify-between"
  >
    <div class="font-vera">
      <p class="text-[10px]">{{ $t('header.title') }}</p>
      <p class="text-[16px] font-medium">{{ $t('header.subtitle') }}</p>
    </div>
    <AppDropdown :items="userActions">
      <AppAvatar text="Jaime Alonso Reyes Esparza" />
    </AppDropdown>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { useSystemRoutes } from '~/composables/routes/useSystemRoutes.js';
  const localePath = useLocalePath();
  const { t } = useI18n();
  import AppButton from '~/components/atoms/buttons/AppButton.vue';
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';
  import AppAvatar from '~/components/atoms/avatar/AppAvatar.vue';
  import AppDropdown from '~/components/atoms/dropdowns/AppDropdown.vue';

  const userActions = ref([]);

  onMounted(() => {
    userActions.value = useSystemRoutes({ localePath, t })
      .filter((item) => item.avatarMenu)
      .map((item) => ({
        ...item,
        size: 'small',
        theme: 'quaternary',
        icon: {
          ...item.icon,
          type: 'solid',
        },
      }));
  });
</script>
