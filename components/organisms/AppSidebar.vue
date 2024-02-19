<template>
  <div
    class="main-container"
    :class="{
      closed: closed,
    }"
  >
    <div
      class="flex items-center justify-center gap-[8px] text-amber-500 font-vera font-bold pb-[24px] border-b-2"
    >
      <p v-show="!closed">
        {{ $t('app.appName') }}
      </p>
      <AppIcon name="dumbbell" type="solid" class="w-[32px] h-[32px]" />
    </div>
    <div
      v-if="menuItems.length"
      class="flex flex-col gap-[8px] flex-grow pt-[12px]"
    >
      <div
        v-for="item in menuItems"
        :key="item.name"
        role="tooltip"
        :aria-label="item.text"
        data-microtip-position="right"
      >
        <AppButton
          v-bind="item"
          :theme="isActivePath(item.to) ? 'primary' : 'quaternary'"
          class="rounded-[2px] w-full"
          :class="{
            'justify-center': closed,
          }"
        >
          <AppIcon v-bind="item.icon" class="w-[24px] h-[24px]" />
          <span v-show="!closed" class="ml-[8px]">
            {{ item.text }}
          </span>
        </AppButton>
      </div>
    </div>
    <div
      role="tooltip"
      :aria-label="menuProps.tooltip"
      data-microtip-position="right"
    >
      <AppButton
        class="rounded-[2px] w-full justify-center"
        theme="quaternary"
        @onClick="toggleSidebar"
      >
        <AppIcon
          :key="menuProps.icon"
          :name="menuProps.icon"
          class="w-[24px] h-[24px]"
        />
      </AppButton>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  const localePath = useLocalePath();
  const { locale, t } = useI18n();
  import { useSystemRoutes } from '~/composables/routes/useSystemRoutes.js';
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';
  import AppButton from '~/components/atoms/buttons/AppButton.vue';

  const closed = ref(false);
  const menuItems = ref([]);

  onMounted(() => {
    menuItems.value = useSystemRoutes({ localePath, t }).filter(
      (item) => item.sidebar
    );
  });

  watch(locale, () => {
    menuItems.value = [];
    menuItems.value = useSystemRoutes({ localePath, t }).filter(
      (item) => item.sidebar
    );
  });

  const toggleSidebar = () => {
    closed.value = !closed.value;
  };

  const isActivePath = (path) => {
    const route = useRoute();
    const getRouteBaseName = useRouteBaseName();
    const baseName = getRouteBaseName(route);
    const module = baseName.split('-')?.at(0) || '';
    const pathModule = path?.split('/')?.at(2) || '';
    return module === pathModule || useRoute().fullPath === path;
  };

  const menuProps = computed(() => {
    return closed.value
      ? {
          icon: 'chevron-right',
          tooltip: t('actions.expand'),
        }
      : {
          icon: 'chevron-left',
          tooltip: t('actions.collapse'),
        };
  });
</script>
<style scoped>
  .main-container {
    @apply py-[24px] px-[16px] border-r-[2px] border-gray-300 h-screen flex flex-col justify-between w-[240px];
  }
  .main-container.closed {
    @apply w-[80px];
  }
</style>
