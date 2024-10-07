<template>
<div class="wrapper">
  <div class="title-h2">
    <h2>Ошибка</h2>
  </div>
  <div class="title-h3">Заповніть усі поля </div>
</div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import '@/assets/style'
.wrapper
  position: relative
  max-width: 31.25rem
  width: 100%
  min-height: 3.125rem
  border: 1px solid #f20
  padding-left: 40px
  border-radius: 4px
  background: darken($white,10%)
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 8px
    height: 100%
    background: #f20
</style>