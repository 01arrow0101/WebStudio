<template>
  <div class="container" 
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="bottom-bottom">
    <div class="title-h2">
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
  @media (max-width: 768px)
    padding: 60px 0

.title-h2
  text-align: center
  margin-bottom: 50px

</style>