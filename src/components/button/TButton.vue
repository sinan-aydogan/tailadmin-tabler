<script setup lang="ts">
defineProps({
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
  },
  icon: {
    type: Function,
    required: false
  },
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: 20
  },
  iconStrokeWidth: {
    type: Number,
    default: 2
  },
  rightIcon: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="button"
    :class="[
      { 'flex-row-reverse': rightIcon },
      `radius-${radius}`,
      `${design}-${color}`,
      `size-${size}`
    ]"
  >
    <component
      v-if="icon"
      :is="icon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      :color="iconColor"
    />
    <slot></slot>
  </button>
</template>
