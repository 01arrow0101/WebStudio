<template>
  <div class="footer">
    <div class="container">
      <div class="address">
        <div class="margin">
          <AppLogo className="color"/>
        </div>
        <Address />
      </div>
      <div class="social">
        <div class="title-h3">приєднуйтесь</div>
        <SocialIcon />
      </div>
      <div class="subscribe">
        <Subscribe />
      </div>
    </div>
  </div>
</template>

<script setup>
import Address from "./Address.vue";
import AppLogo from "./AppLogo.vue";
import SocialIcon from "./SocialIcon.vue";
import Subscribe from "./Subscribe.vue";
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.container
  max-width: 73.125rem
  margin: 0 auto
  display: flex
  gap: 70px
  @media (max-width: 768px)
    flex-wrap: wrap
    justify-content: center
    align-items: center
    text-align: center
.footer
  padding: 60px 0
  background-color: $bg-footer

.margin
  margin-bottom: 20px
.social
  padding-top: 12px
.title-h3
  text-transform: uppercase
  color: $white
  margin-bottom: 20px
.subscribe
  padding-top: 20px
  @media (max-width: 768px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
</style>
