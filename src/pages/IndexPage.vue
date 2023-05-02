<script>
import { defineComponent } from 'vue'
import HorizontalLayout from '@/layouts/HorizontalLayout.vue'
import TButton from '@/components/button/TButton.vue'
import {IconPlus} from "@tabler/icons-vue";
import TDataCard from "@/components/card/TDataCard.vue";
import TGrid from "@/components/grid/TGrid.vue";

export default defineComponent({
  methods: {IconPlus},
  components: {TGrid, TDataCard, TButton, HorizontalLayout }
})
</script>

<template>
  <horizontal-layout title="Dashboard" subtitle="OVERVIEW">
    <template #action>
      <div class="flex items-center gap-2">
        <t-button design="light-outline" color="gray">New view</t-button>

        <!--Create new report-->
        <t-button :icon="IconPlus" design="solid" color="blue">Create new report</t-button>
      </div>
    </template>
    <t-grid :xxl="4" :xl="4" :lg="3" :md="2" :sm="1" :gap="4">
      <!--Sales data card-->
      <t-data-card title="SALES" value="75%">
        <template #header-right>
          <span class="text-sm">Last 7 days</span>
        </template>
      </t-data-card>

      <!--Revenue data card-->
      <t-data-card title="REVENUE" value="$4,300" change-value="8%" change-direction="down" change-color="red">
        <template #header-right>
          <span class="text-sm">Last 7 days</span>
        </template>
      </t-data-card>

      <!--Sales data card-->
      <t-data-card title="NEW CLIENTS" value="6,782" change-value="0%" change-direction="same" change-color="yellow">
        <template #header-right>
          <span class="text-sm">Last 7 days</span>
        </template>
      </t-data-card>

      <!--Sales data card-->
      <t-data-card title="ACTIVE USERS" value="2,986" change-value="4%" change-direction="up" change-color="green">
        <template #header-right>
          <span class="text-sm">Last 7 days</span>
        </template>
      </t-data-card>
    </t-grid>
  </horizontal-layout>
</template>
