const ClickOutsideDirective = {
  mounted(el, binding) {
    const handleClickOutside = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value();
      }
    };

    document.addEventListener('click', handleClickOutside);

    el._clickOutsideHandler = handleClickOutside;
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutsideHandler);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', ClickOutsideDirective);
});
