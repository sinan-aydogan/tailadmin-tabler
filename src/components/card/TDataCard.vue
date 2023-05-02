<script setup lang="ts">
import {IconTrendingUp, IconTrendingDown, IconMinus} from "@tabler/icons-vue";
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number, Date],
    default: ''
  },
  changeValue: {
    type: [String, Number, Date],
    default: ''
  },
  changeDirection: {
    type: String,
  },
  changeColor: {
    type: String,
    default: 'gray'
  },
  radius: {
    type: String,
    default: 'md'
  },
})

const changeDirectionIcon = computed(()=>{
  switch (props.changeDirection) {
    case 'up':
      return IconTrendingUp
    case 'down':
      return IconTrendingDown
    case 'same':
      return IconMinus
    default:
      return null
  }
})
</script>

<template>
  <div
      class="card"
      :class="[
    `radius-${radius}`,
  ]">
    <!--Header-->
    <div class="flex justify-between">
      <!--Left area-->
      <div class="flex justify-start">
        <slot v-if="$slots.hasOwnProperty('header-left')" name="header-left"></slot>
        <div v-else class="flex flex-col">
          <span v-text="title" class="text-xs font-semibold"></span>
          <div class="flex items-end gap-2">
            <!--Value-->
            <span v-text="value" class="text-2xl font-bold"></span>

            <!--Change-->
            <div class="flex items-center mb-0.5 gap-2">
              <!--Change value-->
              <span v-if="changeValue" v-text="changeValue" class="text-sm font-semibold" :class="`change-${changeColor}`"></span>

              <!--Change icon-->
              <component v-if="changeDirection" :is="changeDirectionIcon" :class="`change-${changeColor}`" :size="20"></component>
            </div>
          </div>
        </div>
      </div>

      <!--Right area-->
      <div v-if="$slots.hasOwnProperty('header-right')" class="flex justify-end items-start">
        <slot name="header-right"></slot>
      </div>
    </div>


    <div>
      <slot></slot>
    </div>

    <!--Action-->
    <div>
      <slot name="action"></slot>
    </div>
  </div>
</template>