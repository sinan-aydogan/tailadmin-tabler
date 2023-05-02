<script setup>
import TBadge from '@/components/badge/TBadge.vue'

defineProps({
  link: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center gap-2">
    <!--Icon-->
    <component
      v-if="link.icon"
      :is="link.icon"
      :class="link?.style?.icon"
      :size="16"
      :stroke-width="1"
      class="hidden lg:block"
    />

    <!--Label-->
    <span v-text="link.label" :class="link?.style?.label"></span>
  </div>

  <!--Badge-->
  <t-badge
    v-if="link.badge"
    :color="link.badge?.color"
    :design="link.badge?.style"
    :radius="link.badge?.radius"
    >{{ link.badge.label }}
  </t-badge>

  <!--Dropdown-->
  <IconChevronDown v-if="link.type === 'dropdown'" :size="12" class="mt-1 -rotate-90" />
</template>
