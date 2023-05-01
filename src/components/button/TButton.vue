<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  iconColor: {
    type: String,
    default: '#1D273B'
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
  <button class="flex flex-row px-4 py-2 gap-2 border rounded p-1 text-sm" :class="{
    'flex-row-reverse': rightIcon
  }">
    <component v-if="icon" :is="icon" :size="iconSize" :stroke-width="iconStrokeWidth" :color="iconColor"/>
    <slot></slot>
  </button>
</template>