<template>
  <div class="list">
    <div class="item" v-for="logo in company" :key="logo">
      <Svg :name="logo" class="current" />
    </div>
  </div>
</template>

<script setup>
import Svg from "./Svg.vue";


const company = ["1", "2", "3", "4", "5", "6"];

</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'

.list
  display: flex
  justify-content: center
  align-items: center 
  gap: 30px
.item
  display: flex
  justify-content: center
  align-items: center
  width: 170px
  height: 92px
  border: 1px solid $grey
  border-radius: .25rem
  &:has(.current)
    color: $grey
  &:hover
    border: 1px solid $primary
    cursor: pointer
    &:has(.current)
      color: $primary
</style>
