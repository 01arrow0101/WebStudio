<template>
  <div
    class="root"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="bottom-bottom"
  >
    <div class="person">
      <img :src="person.src" :alt="person.name" />
    </div>
    <div class="info">
      <div class="name">{{ person.name }}</div>
      <div class="position">{{ person.position }}</div>
      <SocialIcon />
    </div>
  </div>
</template>

<script setup>
import SocialIcon from "./SocialIcon.vue";
const props = defineProps({
  person: Object,
});
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.root
  border-radius: 0 0 4px 4px
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)
.person
  & img
    width: 270px
    @media (max-width: 768px)
      width: 354px
.info
  padding: 30px 0
  background: $white

.name
  font-size: 16px
  font-weight: 500
  line-height: 19px
  letter-spacing: .03em
  margin-bottom: 10px
.position
  font-size: 16px
  font-weight: 400
  line-height: 19px
  letter-spacing: .03em
  color: $grey
  margin-bottom: 16px
</style>
