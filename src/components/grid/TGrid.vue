<script setup lang="ts">
defineProps({
  sm: {
    type: Number,
    default: 1
  },
  md: {
    type: Number,
    default: 2
  },
  lg: {
    type: Number,
    default: 3
  },
  xl: {
    type: Number,
    default: 4
  },
  xxl: {
    type: Number,
    default: 6
  },
  gap: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <div
      class="grid w-full"
      :class="[
      `xxl-grid-cols-${xxl}`,
      `xl-grid-cols-${xl}`,
      `lg-grid-cols-${lg}`,
      `md-grid-cols-${md}`,
      `sm-grid-cols-${sm}`,
      `grid-gap-${gap}`
  ]"
  >
    <slot/>
  </div>
</template>