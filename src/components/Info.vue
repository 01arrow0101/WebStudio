<template>
  <div class="root">
    <div class="info">
      <div class="title">
        <h2>Чим ми займаємося</h2>
      </div>
      <div class="img-row">
        <div v-for="img in images" :key="img.alt" class="img">
          <img :src="img.src" :alt="img.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const images = ref([
  {
    src: '/src/assets/img/keyboard.jpeg',
    alt: 'keyboard'
  },
  {
    src: '/src/assets/img/phone.jpeg',
    alt: 'phone'
  },
  {
    src: '/src/assets/img/table.jpeg',
    alt: 'table'
  }
])
</script>

<style lang="sass" scoped>
.root
  display: flex
  justify-content: center
  margin-bottom: 94px
.title
  text-align: center
  margin-bottom: 50px

  font-size: 36px
  font-weight: 700
  line-height: 42px
  letter-spacing: .03em
.img-row
  display: flex
  gap: 30px
.img
  width: 370px
</style>
