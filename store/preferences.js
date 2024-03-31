// PREFERENCES STORE
import { defineStore } from 'pinia';

export const usePreferencesStore = defineStore('preferences', {
  state: () => {
    return {
      theme: 'light',
    };
  },
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    setTheme({ theme }) {
      this.theme = theme;
    },
  },
});
