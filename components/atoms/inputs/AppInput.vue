<template>
  <div>
    <input
      class="app-input bg-gray-100 dark:bg-background-light"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>
<style scoped>
  .app-input {
    @apply w-full border-b-2 rounded-e-md py-[4px] px-[8px] text-[14px] focus:outline-none focus:border-amber-400 active:border-amber-400;
  }
</style>
