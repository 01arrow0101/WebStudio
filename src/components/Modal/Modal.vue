<template>
  <div class="wrapper">
  <div class="modal">
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
     </form>
  </div>
</div>
</template>

<script setup>
import Input from './Input.vue';
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
  max-width: 528px
  max-height: 580px
  width: 100%
  padding: 40px

  border-radius: 4px

  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)
  background: rgb(255, 255, 255)
.col
  display: flex
  flex-direction: column
</style>