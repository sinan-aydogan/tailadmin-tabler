<script setup lang="ts"></script>

<template>
  <div class="flex h-14 py-1 border-b">
    <!--Menu-->
    <div class="flex px-2.5 items-center">
      <!--Prefix Slot-->
      <slot name="prefix"></slot>

      <ul class="flex gap-2">
        <li>Home</li>
        <li>Interface</li>
        <li>Form Element</li>
        <li>Extra</li>
        <li>Layout</li>
        <li>Icons</li>
        <li>Help</li>
      </ul>

      <!--Append Slot-->
      <slot name="append"></slot>
    </div>

    <!--Action Slot-->
    <slot name="action"></slot>
  </div>
</template>
