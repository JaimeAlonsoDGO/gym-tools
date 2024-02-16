<template>
  <div
    class="rounded-full flex items-center justify-center font-vera text-gray-50 select-none"
    :class="[bgColor, size, clickable ? 'cursor-pointer' : '']"
    @click="onClick"
  >
    {{ textFormatted }}
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import useRandomTailwindBackgroundColor from '~/composables/theme/useRandomTailwindBackgroundColor.js';

  const props = defineProps({
    text: {
      type: String,
      default: '',
    },
    imagePath: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['xsmall', 'small', 'medium', 'large', 'xlarge'].includes(value);
      },
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  });

  const textFormatted = computed(() => {
    return props.text
      ? props.text
          .split(' ')
          .map((word) => word[0])
          .join('')
          .toUpperCase()
      : '';
  });
  const bgColor = computed(() => useRandomTailwindBackgroundColor());

  const emit = defineEmits(['onClick']);
  const onClick = () => {
    if (!props.clickable) return;
    emit('onClick');
  };
</script>
<style scoped>
  .xsmall {
    @apply w-[24px] h-[24px] text-[10px];
  }
  .small {
    @apply w-[32px] h-[32px] text-[12px];
  }
  .medium {
    @apply w-[40px] h-[40px] text-[14px];
  }
  .large {
    @apply w-[48px] h-[48px] text-[16px];
  }
  .xlarge {
    @apply w-[56px] h-[56px] text-[18px];
  }
</style>
