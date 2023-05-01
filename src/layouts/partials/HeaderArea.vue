<script setup lang="ts">
import ThemeChanger from '@/layouts/partials/ThemeChanger.vue'
import NotificationPoint from '@/layouts/partials/NotificationPoint.vue'
import UserMenu from '@/layouts/partials/UserMenu.vue'
</script>
<template>
  <div class="flex h-14 py-1 border-b">
    <div class="flex flex-grow max-w-7xl px-2.5 mx-auto justify-between items-center">
      <!--Logo-->
      <div class="">
        TailAdmin Tabler
      </div>
      <!--Left Slot-->
      <slot name="left"></slot>
      <!--Right Area-->

      <div class="flex items-center gap-4">
        <!--Right Slot-->
        <slot name="right"></slot>
        <!--Theme Changer-->
        <theme-changer/>
        <!--Notification Point-->
        <notification-point/>
        <!--User Menu-->
        <user-menu/>
      </div>
    </div>
  </div>
</template>
