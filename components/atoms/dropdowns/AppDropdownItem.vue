<template>
  <div>
    <slot>
      <AppButton
        class="text-left whitespace-nowrap w-full"
        :theme="theme"
        :size="size"
        @onClick="onClick"
      >
        <AppIcon v-if="icon" v-bind="icon" class="w-[16px] h-[16px]" />
        {{ text }}
      </AppButton>
    </slot>
  </div>
</template>
<script setup>
  import AppButton from '~/components/atoms/buttons/AppButton.vue';
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';

  const props = defineProps({
    theme: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: [Object, null],
      default: null,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  });
</script>
