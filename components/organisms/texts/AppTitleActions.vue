<template>
  <div class="flex items-center justify-between gap-[8px] flex-wrap">
    <div>
      <slot name="title">
        <p class="font-vera font-semibold text-[16px]">{{ title }}</p>
      </slot>
      <slot name="description">
        <p class="font-vera text-[12px]">{{ description }}</p>
      </slot>
    </div>
    <div>
      <slot name="actions">
        <AppButton
          v-for="action in actions"
          :key="action.name"
          v-bind="action"
          v-on="action.on"
        />
      </slot>
    </div>
  </div>
</template>
<script setup>
  import AppButton from '~/components/atoms/buttons/AppButton.vue';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
  });
</script>
