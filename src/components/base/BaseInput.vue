<script setup>
  defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    id: { type: String, required: true },
    error: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
  })
</script>

<template>
  <div class="flex flex-col gap-1">
    <label
      :for="id"
      class="text-sm font-medium text-gray-700"
    >
    {{ label }}
    </label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      :autocomplete="off"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      :class="error ? 'border-red-500' : 'border-gray-300' "
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p
      v-if="error"
      :id="`${id}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
    {{ error }}
    </p>
  </div>
</template>
