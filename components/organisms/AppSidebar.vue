<template>
  <div
    class="py-[24px] px-[16px] border-r-[2px] border-gray-300 w-[240px] h-full flex flex-col justify-between"
  >
    <div
      class="flex items-center justify-center gap-[8px] text-amber-500 font-vera font-bold pb-[24px] border-b-2"
    >
      <p>
        {{ $t('app.appName') }}
      </p>
      <AppIcon name="dumbbell" type="solid" class="w-[32px] h-[32px]" />
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<script setup>
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';
  const { locale } = useI18n();
</script>
