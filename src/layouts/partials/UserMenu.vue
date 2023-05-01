<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import TAvatar from "@/components/avatar/TAvatar.vue";

defineProps({
  title: String,
  subtitle: String,
})

const authStore = useAuthStore()
</script>

<template>
  <div v-if="authStore.user" class="flex items-center gap-4">
    <t-avatar/>
    <div class="hidden xl:flex flex-col">
      <span class="text-sm" v-text="authStore.user.name"></span>
      <span class="text-xs font-thin text-slate-500" v-text="authStore.user.title"></span>
    </div>
  </div>
</template>
