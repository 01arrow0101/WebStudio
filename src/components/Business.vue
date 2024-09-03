<template>
  <div class="business">
    <h1 class="title">{{title}}</h1>
    <span class="btn">Замовити послугу</span>
  </div>
</template>

<script setup>
const title = 'Ефективні рішення для вашого бізнесу'
</script>

<style lang="sass" scoped>
@import '../assets/style'


.business
  width: 100%
  height: 100%
  background: url('../assets/img/Img.jpeg') center /cover no-repeat
  padding: 200px 0
  text-align: center
  @media (max-width: 767.98px)
    padding: 118px 0
.title
  max-width: 43.5rem
  width: 100%
  font-size: 2.75rem
  line-height: 3.75rem
  letter-spacing: 0.06em
  color: $white
  text-transform: uppercase
  margin: 0 auto 40px auto
  @media (max-width: 767.98px)
    max-width: 370px
    font-size: 1.625rem
    line-height: 2.625rem
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
  @media (max-width: 767.98px)
    font-size: 1rem
    line-height: 1.875rem
    padding: 10px 24px
  &:hover
    background: darken($primary, 10% )
</style>