<template>
  <div class="icon">
    <div class="icon-list row">
      <div v-for="icon in icons" :key="icon" class="icon-list_item">
        <Svg :name="icon" class="current"></Svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import Svg from "./Svg.vue";

const icons = ["instagram", "twitter", "facebook", "linkedin"];
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.row
  display: flex
  justify-content: center
  align-items: center
  gap: 10px
.icon-list_item
  display: flex
  justify-content: center
  align-items: center
  width: 44px
  height: 44px
  border-radius: 50%
  background: rgba(255, 255, 255, 10%)
  &:has(.current)
    color: $grey
  &:hover
    background-color: $primary
    cursor: pointer
    &:has(.current)
      color: $white
</style>
