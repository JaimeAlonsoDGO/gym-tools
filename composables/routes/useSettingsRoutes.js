export default () => {
  const localePath = useLocalePath();
  const { t } = useI18n();
  return [
    {
      id: 1,
      text: t('settingsRoutes.profile'),
      to: localePath('settings-index-profile'),
      theme: 'tab',
    },
    {
      id: 2,
      text: t('settingsRoutes.appearance'),
      to: localePath('settings-index-appearance'),
      theme: 'tab',
    },
  ];
};
