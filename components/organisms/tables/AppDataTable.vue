<template>
  <table class="app-dt border-gray-100 dark:border-gray-500">
    <thead
      class="app-dt-head border-b border-b-gray-100 dark:border-b-gray-500"
    >
      <tr class="app-dt-head-tr">
        <th v-if="actions.length">Acciones</th>
        <th
          class="app-dt-th"
          :class="{
            sortable: !column?.props?.no_sortable,
          }"
          v-for="column in columns"
          :key="column.key"
          v-bind="column?.props || {}"
          v-text="column.text"
          @click="onSort(column.key)"
        />
      </tr>
    </thead>
    <tbody class="app-dt-body">
      <tr
        class="app-dt-body-tr odd:bg-gray-100 dark:odd:bg-background-light"
        v-for="row in sortedData"
        :key="row[rowId]"
      >
        <td>
          <slot name="actions">
            <div class="flex items-center justify-center">
              <AppDropdown
                v-if="actions.length"
                class="actions-dropdown"
                :items="actions"
                clickable
              >
                <AppIcon
                  name="menu"
                  class="actions-dropdown-icon w-[24px] h-[24px]"
                />
              </AppDropdown>
            </div>
          </slot>
        </td>
        <td class="app-dt-body-td" v-for="column in columns" :key="column.key">
          <slot
            :name="`${column.key}`"
            v-bind="{ value: row[column.key], row }"
          >
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
  import { ref, computed, onMounted } from 'vue';
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';
  import AppDropdown from '~/components/atoms/dropdowns/AppDropdown.vue';

  const props = defineProps({
    columns: {
      type: Array,
      required: true,
      // [{text: String, key: String, props: Object}]
    },
    data: {
      type: Array,
      required: true,
    },
    rowId: {
      type: String,
      default: 'id',
    },
    basicSort: {
      type: Boolean,
      default: true,
    },
    sortBy: {
      type: String,
      default: 'id',
    },
    actions: {
      type: Array,
      default: () => [],
      // [{name: String, icon: Object, on: Object}]
    },
  });

  const sortTo = ref('asc');
  const internSortByKey = ref('');
  const emit = defineEmits(['sort']);

  onMounted(() => {
    internSortByKey.value = props.sortBy;
  });

  const onSort = (key) => {
    if (internSortByKey.value === key) {
      sortTo.value = sortTo.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortTo.value = 'asc';
      internSortByKey.value = key;
    }
    emit('sort', { key, asc: sortTo.value });
  };

  const sortedData = computed(() => {
    // return props.data;
    if (!props.basicSort) return props.data;

    const sortType =
      typeof props.data?.at(0)?.[internSortByKey.value] || 'string';

    if (!sortType) return props.data;

    const sortFn = sortFnMapping?.[sortTo.value]?.[sortType] || null;

    if (!sortFn) return props.data;

    return props.data.sort(sortFn);
  });

  const sortFnMapping = {
    asc: {
      string: (a, b) =>
        a[internSortByKey.value].localeCompare(b[internSortByKey.value]),
      number: (a, b) => a[internSortByKey.value] - b[internSortByKey.value],
    },
    desc: {
      string: (a, b) =>
        b[internSortByKey.value].localeCompare(a[internSortByKey.value]),
      number: (a, b) => b[internSortByKey.value] - a[internSortByKey.value],
    },
  };
</script>
<style scoped>
  .app-dt {
    @apply border w-full;
  }

  .app-dt-th,
  .app-dt-body-td {
    @apply p-[8px];
  }

  .app-dt-th {
    @apply text-left select-none;
  }
  .app-dt-th.sortable {
    @apply cursor-pointer;
  }
</style>
