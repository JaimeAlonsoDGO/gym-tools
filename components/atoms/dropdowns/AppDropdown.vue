<template>
  <div class="relative" @mouseenter="show = true" @mouseleave="show = false">
    <slot />
    <div
      v-show="show"
      class="absolute top-full right-0 bg-white dark:bg-background-light p-[8px] border border-gray-100 dark:border-gray-500"
    >
      <slot name="dropdown">
        <AppDropdownItem v-for="item in items" :key="item.name" v-bind="item" />
      </slot>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import AppDropdownItem from '~/components/atoms/dropdowns/AppDropdownItem.vue';

  const props = defineProps({
    items: {
      type: Array,
      default: () => [],
      /* {
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
      }
    */
    },
  });

  const show = ref(false);
</script>
