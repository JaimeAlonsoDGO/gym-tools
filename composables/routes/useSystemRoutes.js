export const useSystemRoutes = ({ localePath, t }) => {
  return [
    {
      text: t('systemRoutes.index'),
      icon: {
        name: 'house',
      },
      to: localePath('index'),
      sidebar: true,
      avatarMenu: false,
    },
    {
      text: t('systemRoutes.users'),
      icon: {
        name: 'house',
      },
      to: localePath('users'),
      sidebar: true,
      avatarMenu: false,
    },
    {
      text: t('systemRoutes.settings'),
      icon: {
        name: 'config',
      },
      to: localePath('settings'),
      sidebar: true,
      avatarMenu: true,
    },
    {
      text: t('actions.logout'),
      icon: {
        name: 'logout',
      },
      sidebar: false,
      avatarMenu: true,
      onClick: () => console.log('logout'),
    },
  ];
};
