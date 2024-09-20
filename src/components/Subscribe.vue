<template>
<div class="title-h3">Підпишіться на розсилку</div>
<label for="email">
  <input 
  v-model="value"
  type="text" placeholder="E-mail">
</label>
<button @click="subscribe" class="btn primary">Підписатися</button>
</template>

<script setup>
import { ref } from "vue";

const value = ref('')

function subscribe(){
  console.log('Заявка прийнята')
  
}
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'

.title-h3
  color: $white
  text-transform: uppercase
  margin-bottom: 20px
  @media (max-width: 768px)
    margin-bottom: 0

input
  padding: 16px
  font-size: 16px
  line-height: 20px
  letter-spacing: .03em
  color: $white
  width: 360px
  border: 1px solid rgba(255, 255, 255, 0.3)
  border-radius: 4px

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15)
  background: transparent
  padding: 16px
  margin-right: 12px
  &:focus
    outline-color: $primary
  &::placeholder
    padding: 16px
    font-size: 16px
    line-height: 20px
    letter-spacing: .03em
    @media (max-width: 768px)
      margin-right: 0
.btn
  width: 200px
  position: relative
  border-radius: 4px
  background: $primary
  padding: 6px 22px
  font-size: 16px
  font-weight: 700
  line-height: 30px
  letter-spacing: .06em
  border-color: transparent
  color: $white
  text-align: start
  &::before
    content: ''
    position: absolute
    width: 24px
    height: 24px
    top: 50%
    right: 28px
    transform: translateY(-50%)
    background: url('../src/assets/icons/send.svg') center /cover no-repeat
  &:hover
    background: darken($primary, 15%)
    cursor: pointer    

.email
  display: flex
  flex-direction: column  
</style>