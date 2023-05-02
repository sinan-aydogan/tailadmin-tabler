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
  style: {
    type: String,
    default: 'solid'
  }
})
</script>

<template>
  <span class="badge" :class="[`radius-${radius}`, `${style}-${color}`, `size-${size}`]">
    <slot></slot>
  </span>
</template>
```
