<script setup lang="ts">
import HeaderArea from './partials/HeaderArea.vue'
import FooterArea from './partials/FooterArea.vue'
import MainMenu from './partials/MainMenu.vue'

/*Icons*/
import {IconBrandGithub, IconHeart} from '@tabler/icons-vue'
import TButton from '@/components/button/TButton.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="h-screen w-screen overflow-hidden bg-slate-100">
    <div class="flex flex-col h-full w-full">
      <!--Header area-->
      <HeaderArea>
        <template #right>
          <t-button :icon="IconBrandGithub" icon-color="#1D273B" color="gray" design="light-outline" :icon-stroke-width="1.5">Source code</t-button>
          <t-button :icon="IconHeart" icon-color="#D6336C" color="gray" design="light-outline" :icon-stroke-width="1.5">Sponsor</t-button>
        </template>
      </HeaderArea>

      <!--Main menu-->
      <MainMenu/>

      <!--Page header-->
      <div class="flex min-h-[2.25rem] mt-5">
        <div class="t-container justify-between">
          <!--Page Titles-->
          <div class="flex flex-col">
            <!--Sub-title-->
            <slot v-if="$slots.hasOwnProperty('subtitle')" name="subtitle"></slot>
            <span v-else v-text="subtitle" class="text-[.625rem]"></span>

            <!--Title-->
            <slot v-if="$slots.hasOwnProperty('title')" name="title"></slot>
            <h2 v-else v-text="title" class="text-xl font-bold"></h2>
          </div>

          <!--Action area-->
          <div class="flex justify-end items-center">
            <slot name="action"></slot>
          </div>
        </div>
      </div>

      <!--Content-->
      <main class="my-5 h-full">
        <div class="t-container">
          <slot></slot>
        </div>
      </main>

      <!--Footer-->
      <FooterArea>

        <!--Left-->
        <template #left>
          <div class="flex items-center">
            <span class="text-sm">Copyright © {{ new Date().getFullYear() }} TailAdmin Tabler. All rights reserved. </span>
            <div class="flex items-center">
              <span class="text-[.25rem] mx-4">&#9679</span>
              <span class="text-sm">v.0.0.1</span>
            </div>
          </div>
        </template>

        <!--Right-->
        <template #right>
          <div class="flex gap-4">
            <a href="https://tailadmin.dev/ta-tabler/documentation" class="flex text-sm items-center group">
              <span class="group-hover:underline">Documentation</span>
            </a>
            <a href="https://tailadmin.dev/ta-tabler/licence"  class="flex text-sm items-center group">
              <span class="text-[.25rem] mr-4">&#9679</span>
              <span class="group-hover:underline">Licence</span>
            </a>
            <a href="https://github.com/sinan-aydogan/tailadmin-tabler" class="flex text-sm items-center group">
              <span class="text-[.25rem] mr-4">&#9679</span>
              <span class="group-hover:underline">Source code</span>
            </a>
            <a href="https://github.com/sponsors/sinan-aydogan" class="flex items-center text-sm group">
              <span class="text-[.25rem] mr-4">&#9679</span>
              <IconHeart fill="red" color="red" :size="14" class="mr-1"/>
              <span class="group-hover:underline">Sponsor</span>
            </a>
          </div>
        </template>
      </FooterArea>
    </div>
  </div>
</template>

<style lang="sass">
.t-container
  @apply flex flex-grow lg:max-w-7xl px-2.5 lg:mx-auto
</style>
