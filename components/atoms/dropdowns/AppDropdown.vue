<template>
  <div
    ref="app-dropdown"
    class="relative"
    v-click-outside="() => (show = false)"
    @click="onChangeClick"
    @mouseenter="onChangeHover(true)"
    @mouseleave="onChangeHover(false)"
  >
    <slot />
    <div
      v-show="show"
      class="absolute z-10 top-full right-0 bg-white dark:bg-background-light p-[8px] border border-gray-100 dark:border-gray-500"
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
    clickable: {
      type: Boolean,
      default: false,
    },
  });

  const show = ref(false);

  const onChangeHover = (value) => {
    if (props.clickable) {
      return;
    }
    show.value = value;
  };

  const onChangeClick = () => {
    if (!props.clickable) {
      return;
    }
    show.value = !show.value;
  };
</script>
