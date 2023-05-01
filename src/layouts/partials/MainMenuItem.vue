<script setup lang="ts">
import {IconChevronDown} from "@tabler/icons-vue";
import {ref} from "vue";
import {onClickOutside} from '@vueuse/core'
import TBadge from "@/components/badge/TBadge.vue";

defineProps({
  link: {
    type: Object,
    required: true
  }
})
const refSubMenu = ref(null)

const showMenu = ref(false)
const toggleMenu = () => showMenu.value = !showMenu.value
onClickOutside(refSubMenu, (event) => showMenu.value = false)
</script>

<template>
  <div class="relative" ref="refSubMenu">
    <div class="flex items-center px-3 py-2 gap-2 cursor-pointer" @click="toggleMenu">
      <!--Icon-->
      <component v-if="link.icon" :is="link.icon" :size="20" :stroke-width="1" class="hidden lg:block"/>

      <!--Label-->
      <span v-text="link.label" class="text-sm"></span>

      <!--Dropdown-->
      <IconChevronDown v-if="link.type === 'dropdown'" :size="12" class="-ml-1 mt-1"/>
    </div>

    <!--Sub Links-->
    <div class="absolute flex border rounded py-1 mt-1.5 z-10 bg-white" v-if="showMenu">
      <ul class="flex">
        <li v-for="column in link.children" class="flex min-w-[11rem]">
          <ul class="w-full">
            <li v-for="subLink in column"
                class="flex justify-between items-center font-semibold hover:bg-slate-100 px-3 py-2 text-sm cursor-pointer whitespace-nowrap select-none">
              <!--Label-->
              <span v-text="subLink.label"></span>

              <!--Badge-->
              <t-badge
                  v-if="subLink.badge"
                  :color="subLink.badge?.color"
                  :style="subLink.badge?.style"
                  :radius="subLink.badge?.radius"
              >{{subLink.badge.label}}</t-badge>

              <!--Dropdown-->
              <IconChevronDown v-if="subLink.type === 'dropdown'" :size="12" class="mt-1 -rotate-90"/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
