<template>
  <div  class="wrapper">
   <div v-for="card in cards" :key="card.title" class="card">
     <div class="img">
      <img :src="card.img" :alt="card.alt" />
    </div>
    <div class="title">{{ card.title }}</div>
    <div class="text">{{ card.text }}</div>
   </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    img: '/src/assets/icons/antenna.svg',
    alt: 'antenna',
    title: 'УВАГА ДО ДЕТАЛЕЙ',
    text: 'Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.'
  },
  {
    img: '/src/assets/icons/clock.svg',
    alt: 'clock',
    title: 'ПУНКТУАЛЬНІСТЬ',
    text: 'Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.'
  },
  {
    img: '/src/assets/icons/diagram.svg',
    alt: 'diagram',
    title: 'ПЛАНУВАННЯ',
    text: 'Так само консультація з широким активом значною мірою зумовлює.'
  },
  {
    img: '/src/assets/icons/astronaut.svg',
    alt: 'astronaut',
    title: 'СУЧАСНІ ТЕХНОЛОГІЇ',
    text: 'Значимість цих проблем настільки очевидна, що реалізація планових завдань.'
  }
])
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.wrapper
  display: flex
  justify-content: center
  align-items: center
  gap: 30px
.card
  max-width: 270px
.img
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 120px
  border-radius: .25rem
  background: $bg-command
  margin-bottom: 30px
  & img
    width: 70px
    height: 70px
.title
  text-transform: uppercase
  font-size: .875rem
  font-weight: 700
  line-height: 1rem
  letter-spacing: .03em
  margin-bottom: 10px

.text
  font-size: 14px
  line-height: 24px
  letter-spacing: .03em
  color: $grey
</style>
