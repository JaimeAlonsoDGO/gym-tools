<template>
  <div>
    <slot>
      <AppButton
        class="text-left whitespace-nowrap w-full"
        v-bind="props"
        @onClick="onClick"
      >
        <AppIcon v-if="icon" v-bind="icon" class="w-[16px] h-[16px]" />
        {{ text }}
      </AppButton>
    </slot>
  </div>
</template>
<script setup>
  import AppButton from '~/components/atoms/buttons/AppButton.vue';
  import AppIcon from '~/components/atoms/icons/AppIcon.vue';

  const props = defineProps({
    theme: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'tertiary',
          'quaternary',
          'disabled',
          'tertiary-gray',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'medium',
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    href: {
      type: String,
      default: '',
    },
    to: {
      type: [Object, String],
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: [Object, null],
      default: null,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  });
</script>
