<template>
  <div class="footer">
    <div class="container">
      <div class="address">
        <div class="margin">
          <AppLogo />
        </div>
        <Address />
      </div>
      <div class="social">
        <div class="title">приєднуйтесь</div>
        <SocialIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
import Address from "./Address.vue";
import AppLogo from "./AppLogo.vue";
import SocialIcon from "./SocialIcon.vue";
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.container
  max-width: 73.125rem
  margin: 0 auto
  display: flex
  gap: 70px
.footer
  padding: 60px 0
  background-color: $bg-footer

.margin
  margin-bottom: 20px

.title
  text-transform: uppercase
  font-size: 14px
  font-weight: 700
  line-height: 16px
  letter-spacing: 0.03em
  color: $white
  padding-top: 12px
  margin-bottom: 20px
</style>
