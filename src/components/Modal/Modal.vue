<template>
  <div class="wrapper">
  <div class="modal">
    <div class="button close">
      <button @click="close" class="close">X</button>
    </div>
    <div class="title">Залиште свої дані, ми вам передзвонимо</div>
     <form>
      <div class="name col">
        Ім'я
        <Input  label="name" type="text"/>
      </div>
      <div class="tel col">
        Телефон
        <Input  label="tel" type="text"/>
      </div>
      <div class="mail col">
        Пошта
        <Input  label="E-mail" type="text"/>
      </div>
      <div class="commit col">
        Коментар
        <textarea name="commit" id="" cols="30" rows="10" placeholder="Введіть текст"></textarea>
      </div>
      <label for="license">
        <input v-model="check" type="checkbox" name="license" id="license" >
        Погоджуюся з розсилкою та приймаю  <a href="#">Умови договору</a>
      </label>
     </form>
  </div>
</div>
</template>

<script setup> 
import { ref } from 'vue';
import Input from './Input.vue';
const check = ref(false)
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'
.wrapper
  position: absolute
  inset: 0
  display: flex
  justify-content: center
  padding-top: 200px
  background: rgba(0,0,0,70%)
  z-index: 9999
.modal
  position: relative
  max-width: 528px
  max-height: 580px
  width: 100%
  padding: 40px

  border-radius: 4px

  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)
  background: rgb(255, 255, 255)

.button
  position: absolute
  top: 8px
  right: 8px
  width: 30px
  height: 30px
  display: flex
  justify-content: center
  align-items: center
  & button
      width: 100%
      height: 100%  
      border-radius: 50%
      border: 1px solid rgba(0, 0, 0, 0.1)
      cursor: pointer

.title
  color: $black
  font-size: 20px
  font-weight: 700
  line-height: 23px
  letter-spacing: .03em
  text-align: center
  margin-bottom: 12px    

.col
  display: flex
  flex-direction: column

input[type="checkbox"]
  width: 30px
  height: 30px
  border: 1px solid #f20
input[checked]
  width: 20px
  height: 20px
  background: #000
</style>