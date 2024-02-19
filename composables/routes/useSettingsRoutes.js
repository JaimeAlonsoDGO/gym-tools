export const useSettingsRoutes = ({ localePath, t }) => {
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
