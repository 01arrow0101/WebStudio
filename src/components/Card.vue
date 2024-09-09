<template>
  <div class="card">
    <div class="img">
      <div class="description">{{card.description}}</div>
      <img :src="card.src" :alt="card.name" />
    </div>
    <div class="name">{{card.name}}</div>
    <div class="category">{{card.category}}</div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  card:{
    type: Object,
    required: true
  }
})
const card = ref(props.card)
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.card
  width: 370px
  border: 1px solid rgb(238, 238, 238)
  background: $white
  &:hover
    cursor: pointer
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),0px 4px 4px 0px rgba(0, 0, 0, 0.06),0px 1px 1px 0px rgba(0, 0, 0, 0.12)

    &:is(.card) > .img > .description
      visibility: visible
      opacity: 1
      transition: opacity .5s ease
      
          
.img
  position: relative
  margin-bottom: 20px
.description
  visibility: hidden
  opacity: 0

  display: flex
  justify-content: center
  align-items: center

  padding: 20px 24px
  position: absolute
  top: 0
  left: 0

  width: 370px
  height: 100%
  background: rgba(33, 150, 243, 0.9)
  color: $white

  font-size: 18px
  font-weight: 400
  line-height: 28px
  letter-spacing: 3%
.name
  font-size: 18px
  font-weight: 700
  line-height: 36px
  letter-spacing: .06em
  margin-bottom: 4px
  color: $black
  padding-left: 24px

.category
  font-size: 16px
  font-weight: 400
  line-height: 30px
  letter-spacing: .03em
  color: $grey  
  padding-left: 24px
  margin-bottom: 20px
</style>
