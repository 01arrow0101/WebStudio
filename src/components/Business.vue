<template>
  <div class="business">
    <h1 class="title animate__animated animate__lightSpeedInLeft">
      {{ title }}
    </h1>
    <div class="button animate__animated animate__lightSpeedInRight">
      <AppButton @action="show">Замовити послугу</AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./Button/AppButton.vue";

const title = "Ефективні рішення для вашого бізнесу";

defineProps({
  show: Function,
});

const emit = defineEmits(["showModal"]);

function show() {
  emit("showModal");
}
</script>

<style lang="sass" scoped>
@import '../assets/style'
.business
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
</style>
