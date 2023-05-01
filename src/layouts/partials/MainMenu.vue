<script setup lang="ts">
import {useMainMenuStore} from '@/stores/mainMenu';
import MainMenuItem from "@/layouts/partials/MainMenuItem.vue";

const mainMenuStore = useMainMenuStore();
</script>

<template>
  <div class="flex h-14 py-1 border-b">
    <!--Menu-->
    <div class="flex flex-grow lg:max-w-7xl mx-auto px-2.5 justify-between items-center">
      <div>
        <!--Prefix Slot-->
        <slot name="prefix"></slot>

        <ul class="flex">
          <li v-for="link in mainMenuStore.links" v-bind="link" class="flex">
            <MainMenuItem :link="link"/>
          </li>
        </ul>

        <!--Append Slot-->
        <slot name="append"></slot>
      </div>

      <!--Action Slot-->
      <slot name="action"></slot>
    </div>
  </div>
</template>
