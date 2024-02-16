<template>
  <div
    class="main-container"
    :class="{
      closed: closed,
    }"
  >
    <div
      class="flex items-center justify-center gap-[8px] text-amber-500 font-vera font-bold pb-[24px] border-b-2"
    >
      <p v-if="!closed">
        {{ $t('app.appName') }}
      </p>
      <AppIcon name="dumbbell" type="solid" class="w-[32px] h-[32px]" />
    </div>
    <div></div>
    <AppButton
      class="rounded-[8px]"
      theme="quaternary"
      @onClick="toggleSidebar"
    >
      <AppIcon
        :key="currentIcon"
        :name="currentIcon"
        class="w-[24px] h-[24px]"
      />
    </AppButton>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue';
  const { locale } = useI18n();
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';
  import AppButton from '~/components/atoms/buttons/AppButton.vue';

  const closed = ref(false);

  const toggleSidebar = () => {
    closed.value = !closed.value;
  };

  const currentIcon = computed(() => {
    return closed.value ? 'chevron-right' : 'chevron-left';
  });
</script>
<style scoped>
  .main-container {
    @apply py-[24px] px-[16px] border-r-[2px] border-gray-300 h-full flex flex-col justify-between w-[240px];
  }
  .main-container.closed {
    @apply w-[80px];
  }
</style>
