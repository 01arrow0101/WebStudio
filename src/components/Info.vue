<template>
  <div class="root">
    <div class="info">
      <div class="title-h2" data-aos="fade-left" data-aos-duration="1500">
        <h2>Чим ми займаємося</h2>
      </div>
      <div class="img-row">
        <div v-for="img in images" :key="img.alt" class="img">
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
            :src="img.src"
            :alt="img.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const images = ref([
  {
    src: new URL('/src/assets/img/keyboard.jpeg', import.meta.url).href,
    alt: "keyboard",
  },
  {
    src: new URL('/src/assets/img/phone.jpeg', import.meta.url).href,
    alt: "phone",
  },
  {
    src: new URL('/src/assets/img/table.jpeg', import.meta.url).href,
    alt: "table",
  },
]);
</script>

<style lang="sass" scoped>
.root
  display: flex
  justify-content: center
  margin-bottom: 94px
  @media (max-width: 768px)
    display: none

.title-h2
  text-align: center
  margin-bottom: 50px
.img-row
  display: flex
  gap: 30px
  @media (max-width: 768px)
    flex-wrap: wrap
.img
  width: 370px
</style>
