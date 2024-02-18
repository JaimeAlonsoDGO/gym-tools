<template>
  <component
    :is="currentComponent"
    :key="currentComponent"
    role="button"
    class="inline-flex items-center gap-[4px] p-[8px] select-none"
    :class="[theme, size]"
    v-bind="{
      ...(to ? { to } : {}),
      ...(href ? { href } : {}),
      ...$attrs,
    }"
    @click="onClick"
  >
    <slot name="start-icon" />
    <slot />
    <slot name="end-icon" />
  </component>
</template>
<script setup>
  import { computed, defineEmits } from 'vue';
  const props = defineProps({
    theme: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'tertiary',
          'quaternary',
          'disabled',
          'tertiary-gray',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    href: {
      type: String,
      default: '',
    },
    to: {
      type: [Object, String],
      default: '',
    },
  });

  const emit = defineEmits(['onClick']);

  const currentComponent = computed(() => {
    if (props.href) {
      return 'a';
    } else if (props.to) {
      return 'NuxtLinkLocale';
    } else {
      return 'button';
    }
  });

  const onClick = (event) => {
    if (props.disabled) {
      return;
    }
    emit('onClick', event);

    if (currentComponent.value === 'NuxtLinkLocale') {
      navigateTo(props.to);
    }
  };
</script>
<style scoped>
  /* THEMES */
  .disabled {
    @apply bg-gray-200 text-black cursor-not-allowed;
  }
  .primary {
    @apply bg-amber-600 text-white hover:bg-amber-500;
  }
  .secondary {
    @apply bg-transparent text-amber-600 border-[1px] border-amber-600 hover:bg-amber-500 hover:text-white;
  }
  .tertiary {
    @apply bg-transparent text-amber-600  hover:text-amber-500;
  }
  .quaternary {
    @apply bg-transparent text-amber-600  hover:text-gray-100 hover:bg-amber-500;
  }
  .tertiary-gray {
    @apply bg-transparent text-gray-500  hover:text-gray-400 hover:bg-gray-200;
  }
  /* SIZES */
  .small {
    @apply text-[10px];
  }
  .medium {
    @apply text-[12px];
  }
  .large {
    @apply text-[14px];
  }
</style>
