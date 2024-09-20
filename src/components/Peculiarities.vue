<template>
  <div class="wrapper">
    <div v-for="card in cards" :key="card.title" class="card"  data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="bottom-bottom">
      <div class="img">
        <img :src="card.img" :alt="card.alt" />
      </div>
      <div class="title-h3">{{ card.title }}</div>
      <div class="text">{{ card.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    img: "/src/assets/icons/antenna.svg",
    alt: "antenna",
    title: "УВАГА ДО ДЕТАЛЕЙ",
    text: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
  },
  {
    img: "/src/assets/icons/clock.svg",
    alt: "clock",
    title: "ПУНКТУАЛЬНІСТЬ",
    text: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
  },
  {
    img: "/src/assets/icons/diagram.svg",
    alt: "diagram",
    title: "ПЛАНУВАННЯ",
    text: "Так само консультація з широким активом значною мірою зумовлює.",
  },
  {
    img: "/src/assets/icons/astronaut.svg",
    alt: "astronaut",
    title: "СУЧАСНІ ТЕХНОЛОГІЇ",
    text: "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
  },
]);
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.wrapper
  display: flex
  justify-content: center
  gap: 30px
  padding: 0 16px
  @media screen and (max-width: 768px)
    flex-wrap: wrap
.card
  max-width: 270px
  @media (max-width: 768px)
    max-width: 354px
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
.title-h3
  text-transform: uppercase
  margin-bottom: 10px

.text
  color: $grey
</style>
