<template>
  <div class="container">
    <div class="title">
      <h2>Постійні клієнти</h2>
    </div>
    <div class="brands">
      <BrandCompanyLogo />
    </div>
  </div>
</template>

<script setup>
import BrandCompanyLogo from './BrandCompanyLogo.vue'

</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.container
  max-width: 73.125rem
  width: 100%
  margin: 0 auto
  padding: 94px 0

.title
  text-align: center
  font-size: 36px
  font-weight: 700
  line-height: 42px
  letter-spacing: .03em
  margin-bottom: 50px

</style>