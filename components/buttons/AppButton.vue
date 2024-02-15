<template>
  <component
    :is="currentComponent"
    role="button"
    class="rounded-[4px] inline-flex items-center gap-[4px]"
    :class="[theme, size]"
    v-bind="{
      ...(to ? { to } : {}),
      ...(href ? { href } : {}),
      ...$attrs,
    }"
    @click="$emit('onClick')"
  >
    <slot name="start-icon" />
    <slot />
    <slot name="end-icon" />
  </component>
</template>
<script setup>
  import { computed } from 'vue';
  const props = defineProps({
    theme: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'tertiary'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    icon: {
      type: Object,
      default: () => ({ icon: '', type: '' }),
    },
    href: {
      type: String,
      default: '',
    },
    to: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const currentComponent = computed(() => {
    if (props.href) {
      return 'a';
    } else if (props.to) {
      return 'NuxtLink';
    } else {
      return 'button';
    }
  });
</script>
<style scoped>
  /* THEMES */
  .primary {
    @apply bg-amber-600 text-white hover:bg-amber-500;
  }
  .secondary {
    @apply bg-transparent text-amber-600 border-[1px] border-amber-600 hover:bg-amber-500 hover:text-white;
  }
  .tertiary {
    @apply bg-transparent text-amber-600  hover:text-amber-500;
  }
  /* SIZES */
  .small {
    @apply px-[8px] py-[4px] text-[10px];
  }
  .medium {
    @apply px-[12px] py-[6px] text-[12px];
  }
  .large {
    @apply px-[16px] py-[8px] text-[14px];
  }
</style>
