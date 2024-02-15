<template>
  <span v-if="svg" v-html="svg" />
</template>
<script setup>
  import { onMounted } from 'vue';
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'light',
    },
  });

  const svg = ref(null);

  onMounted(
    async () =>
      (svg.value = await loadIconSVG({ name: props.name, type: props.type }))
  );

  const loadIconSVG = async ({ name, type }) => {
    const icons = Object.fromEntries(
      Object.entries(
        import.meta.glob('~/assets/icons/*/*.svg', { as: 'raw' })
      ).map(([key, value]) => {
        const filename = key.split('/').slice(-2).join('-').split('.')?.at(0);
        console.log('filename: ', filename);
        return [filename, value];
      })
    );
    return (await icons?.[`${type}-${name}`]?.()) || '';
  };
</script>
