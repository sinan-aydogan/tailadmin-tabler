<script setup lang="ts">
import ThemeChanger from '@/layouts/partials/ThemeChanger.vue'
import NotificationPoint from '@/layouts/partials/NotificationPoint.vue'
import UserMenu from '@/layouts/partials/UserMenu.vue'
</script>
<template>
  <div>
    <!--Logo-->
    <div>
      TailAdmin Tabler
    </div>
    <!--Left Area-->
    <slot name="left"></slot>
    <!--Right Area-->
    <slot name="right"></slot>
    <!--Theme Changer-->
    <theme-changer />
    <!--Notification Point-->
    <notification-point />
    <!--User Menu-->
    <user-menu />
  </div>
</template>
