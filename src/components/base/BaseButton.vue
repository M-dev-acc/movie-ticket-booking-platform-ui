<script setup>
  defineProps({
    type: { type: String, default: 'Button' },
    variant: { type: String, default: 'primary' }, // primary | secondary | danger
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  })

  defineEmits(['click'])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60"
    :class="{
      'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
      'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
    }"
    @click="$emit('click', $event)"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>
