<script setup lang="ts">
import ThemeChanger from '@/layouts/partials/ThemeChanger.vue'
import NotificationPoint from '@/layouts/partials/NotificationPoint.vue'
import UserMenu from '@/layouts/partials/UserMenu.vue'
</script>
<template>
  <div class="flex flex-shrink-0 h-14 py-1 border-b bg-white">
    <div class="t-container justify-between items-center">
      <!--Logo-->
      <div class="flex items-center gap-2 font-bold text-2xl">
        <img alt="logo" src="@/assets/logo.png" class="h-8 w-8 rounded mr-2" />
        <span>ta tabler</span>
      </div>
      <!--Left Slot-->
      <slot name="left"></slot>
      <!--Right Area-->

      <div class="flex items-center gap-4">
        <!--Right Slot-->
        <slot name="right"></slot>
        <!--Theme Changer-->
        <theme-changer />
        <!--Notification Point-->
        <notification-point />
        <!--User Menu-->
        <user-menu />
      </div>
    </div>
  </div>
</template>
