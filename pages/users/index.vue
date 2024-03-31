<template>
  <AppWorkAreaFrame :tabs="[]" :header="header">
    <AppDataTable :columns="columns" :data="data" :actions="actions" searchable>
      <template #full_name="{ value }"> {{ value }} </template>
    </AppDataTable>
  </AppWorkAreaFrame>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  const { t } = useI18n();
  const header = {
    title: t('systemRoutes.users'),
    description: t('screensDescriptions.users'),
    actions: [],
  };

  const columns = [
    { text: 'ID', key: 'id' },
    { text: 'Nombre', key: 'full_name' },
    { text: 'Usuario', key: 'user' },
    { text: 'Correo electrónico', key: 'email' },
  ];
  const data = ref([]);

  const actions = [
    {
      text: 'Editar',
      size: 'small',
      theme: 'quaternary',
      icon: { name: 'update', type: 'solid' },
      onClick: (row) => {
        console.log(row);
      },
    },
  ];

  onMounted(() => {
    data.value = getInitData();
  });

  const getInitData = () => {
    return [
      {
        id: 1,
        full_name: 'Jaime Alonso Reyes Esparza',
        user: 'jaime',
        email: 'jaime@correo.mx',
      },
      {
        id: 2,
        full_name: 'Juan Juarez',
        user: 'juan',
        email: 'juan@correo.mx',
      },
      { id: 3, full_name: 'Jose Diaz', user: 'jose', email: 'jose@correo.mx' },
      {
        id: 4,
        full_name: 'Julian Hernandez',
        user: 'julian',
        email: 'julian@correo.mx',
      },
      {
        id: 5,
        full_name: 'Javier Soto',
        user: 'javier',
        email: 'javier@correo.mx',
      },
      {
        id: 6,
        full_name: 'Jacobo Duran',
        user: 'jacobo',
        email: 'jacobo@correo.mx',
      },
    ];
  };
</script>
