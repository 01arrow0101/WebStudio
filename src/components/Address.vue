<template>
<address>
  <div class="address">м. Київ, пр-т Лесі Українки, 26</div>
  <div class="email">info@devstudio.com</div>
  <div class="tel">+38 096 111 11 11</div>
</address>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.address,.email,.tel
  color: $white
  font-size: 14px
  font-weight: 400
  line-height: 24px
  letter-spacing: 0.03em
.email,.tel
  color: $grey

</style>