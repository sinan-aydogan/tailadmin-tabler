<script setup lang="ts">
const props = defineProps({
  radius: {
    type: String,
    default: 'md'
  },
  size: {
    type: String,
    default: 'sm'
  },
  color: {
    type: String,
    default: 'blue'
  },
  design: {
    type: String,
    default: 'solid'
  }
})
</script>

<template>
  <span class="badge" :class="[`radius-${radius}`, `${design}-${color}`, `size-${size}`]">
    <slot></slot>
  </span>
</template>
```
