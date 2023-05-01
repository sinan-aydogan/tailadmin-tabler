<script setup lang="ts">
import {RouterView} from 'vue-router'
import HeaderArea from './partials/HeaderArea.vue';
import FooterArea from './partials/FooterArea.vue';
import MainMenu from "./partials/MainMenu.vue";

/*Icons*/
import {IconHeart, IconBrandGithub} from "@tabler/icons-vue";
import TButton from "@/components/button/TButton.vue";
</script>

<template>
  <HeaderArea>
    <template #right>
      <t-button :icon="IconBrandGithub" icon-color="#1D273B">Source code</t-button>
      <t-button :icon="IconHeart" icon-color="#D6336C">Sponsor</t-button>
    </template>
  </HeaderArea>
  <MainMenu/>
  <RouterView/>
  <FooterArea/>
</template>
