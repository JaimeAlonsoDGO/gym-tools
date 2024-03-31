<template>
  <label class="input-container" :class="{ disabled }">
    <slot>
      <span v-if="label">{{ label }}</span>
    </slot>
    <input
      v-model="selectedValue"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :disabled="disabled"
    />
    <span class="checkmark" />
  </label>
</template>
<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const selectedValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>
<style scoped>
  /* The input-container */
  .input-container {
    @apply block relative pl-[24px] cursor-pointer select-none text-[12px];
  }

  .input-container.disabled {
    @apply cursor-not-allowed text-gray-500;
  }

  /* Hide the browser's default radio button */
  .input-container input {
    @apply absolute opacity-0 cursor-pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    @apply absolute top-0 left-0 h-[16px] w-[16px] rounded-[50%] bg-transparent border-[2px];
  }

  /* Change border color */
  .checkmark {
    @apply border-amber-600 after:content-[''] after:absolute after:hidden;
  }

  .input-container.disabled .checkmark {
    @apply border-gray-300;
  }

  /* On mouse-over, add a grey background color */
  .input-container:hover input ~ .checkmark {
    @apply bg-gray-100;
  }

  .input-container.disabled:hover input ~ .checkmark {
    @apply bg-transparent;
  }

  /* Show the indicator (dot/circle) when checked */
  .input-container input:checked ~ .checkmark:after {
    @apply block bg-amber-600 top-[2px] left-[2px] w-[8px] h-[8px] rounded-[50%];
  }
  .input-container.disabled input:checked ~ .checkmark:after {
    @apply bg-gray-300;
  }

  /* Style the indicator (dot/circle) */
  /* .input-container .checkmark:after {
  } */
</style>
