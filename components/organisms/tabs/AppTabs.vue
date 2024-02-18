<template>
  <section class="tabs-container">
    <AppButton
      v-for="tab in componentTabs"
      :key="tab.text"
      v-bind="tab"
      @onClick="(tab) => onClick(tab)"
    >
      <AppIcon v-if="tab.icon" v-bind="tab.icon" class="w-[24px] h-[24px]" />
      <span v-if="tab.text">{{ tab.text }}</span>
    </AppButton>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  const props = defineProps({
    tabs: {
      type: Array,
      default: () => [],
    },
    initTab: {
      type: [Number, String],
      default: 0,
    },
  });

  const componentTabs = ref([]);

  onMounted(() => {
    componentTabs.value = props.tabs;

    if (props.initTab) {
      componentTabs.value = componentTabs.value.map((t) => ({
        ...t,
        theme: t.id === props.initTab ? 'tab-active' : 'tab',
      }));
    }
  });

  const onClick = (tab) => {
    componentTabs.value = componentTabs.value.map((t) => ({
      ...t,
      theme: t.id === tab.id ? 'tab-active' : 'tab',
    }));
  };
</script>
<style scoped>
  .tabs-container {
    @apply w-full overflow-hidden hover:overflow-auto;
  }
</style>
