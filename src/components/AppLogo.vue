<template>
  <a href="#">
    <div class="logo">
      Web<span :class="className" class="span">Studio</span>
    </div>
  </a>
</template>
<script setup>
const props = defineProps({
  className: {
    type: String,
    required: false,
  },
});
</script>
<style lang="sass" scoped>
@import '@/assets/style'
.logo
  color: $primary
  font-family: Raleway
  font-size: 1.625rem
  font-weight: 700
  line-height: 31px
  letter-spacing: 0.03em
  @media (max-width: 767px)
    font-size: 1.5rem
    line-height: 1.75rem
.span
  color: #000
.color
 color: $white
</style>
