<template>
<button 
v-for="name, index in btns"
:key="index"
 class="btn">{{ name }}</button>
</template>

<script setup>
const btns = ['Усі','Веб-сайти','Додатки','Дизайн','Маркетинг']
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.btn
  border-radius: 4px
  background: rgb(245, 244, 250)
  padding: 6px 22px
  font-size: 16px
  font-weight: 500
  line-height: 26px
  letter-spacing: .03em
  border-color: transparent
  &:hover
    background: $primary
    color: $white
    cursor: pointer
    
</style>
