<template>
  <button :class="type" class="btn" @click="$emit('action')">
  <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type:{
    type: String,
    required: false,
  }
})
</script>

<style lang="sass" scoped>
$primary: rgb(33, 150, 243)
$white: #fff
.btn
  border-radius: 4px
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15)
  background: $primary
  color: $white
  font-size: 16px
  font-weight: 700
  line-height: 30px
  letter-spacing: 0.06em
  cursor: pointer
  padding: 10px 32px
  border-color: transparent
  @media (max-width: 767.98px)
    font-size: 1rem
    line-height: 1.875rem
    padding: 10px 24px
  &:hover
    background: darken($primary, 10% )
</style>