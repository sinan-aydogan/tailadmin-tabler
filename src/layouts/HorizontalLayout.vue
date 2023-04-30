<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderArea from './partials/HeaderArea.vue';
import FooterArea from './partials/FooterArea.vue';
</script>

<template>
  <HeaderArea/>
  <RouterView />
  <FooterArea/>
</template>
