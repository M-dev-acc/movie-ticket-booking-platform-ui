<script setup>
  defineProps({
    variant: { type: String, default: 'error' }, // error | success | info
  })
</script>

<template>
  <div
    role="alert"
    class="rounded-md border px-4 py-3 text-sm"
    :class="{
      'border-red-200 bg-red-50 text-red-800' : variant === 'error',
      'border-green-200 bg-green-50 text-green-800' : variant === 'success',
      'border-blue-200 bg-blue-50 text-blue-800' : variant === 'info',
    }"
  >
    <slot />
  </div>
</template>
