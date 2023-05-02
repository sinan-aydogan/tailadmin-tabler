<script setup lang="ts"></script>

<template>
  <div class="py-8 mt-[4.50rem]">
    <div class="t-container">
      <div class="flex flex-col-reverse lg:flex-row flex-grow justify-between items-center">
        <!--Left area-->
        <slot name="left" />

        <!--Right area-->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
