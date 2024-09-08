<template>
  <div v-for="(card, i) in cards" :key="i" class="card">
    <div class="img">
      <div class="description">{{card.description}}</div>
      <img :src="card.src" :alt="card.name" />
    </div>
    <div class="name">{{card.name}}</div>
    <div class="category">{{card.category}}</div>
  </div>
</template>

<script setup>
const cards = [
  {
    src: "/src/assets/img/portfolio/1.jpeg",
    name: "Технокряк",
    category: "Веб-сайт",
    description:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
  },
  {
    src: "/src/assets/img/portfolio/2.jpeg",
    name: "Постер New Orlean vs Golden Star",
    category: "Дизайн",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/3.jpeg",
    name: "Ресторан Seafood",
    category: "Додаток",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/4.jpeg",
    name: "Проєкт Prime",
    category: "Маркетинг",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/5.jpeg",
    name: "Проєкт Boxes",
    category: "Додаток",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/6.jpeg",
    name: "Inspiration has no Borders",
    category: "Веб-сайт",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/7.jpeg",
    name: "Видання Limited Edition",
    category: "Дизайн",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/8.jpeg",
    name: "Проєкт LAB",
    category: "Маркетинг",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/9.jpeg",
    name: "Growing Business",
    category: "Додаток",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
];
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.card
  width: 370px
  border: 1px solid rgb(238, 238, 238)
  background: $white
  &:hover
    cursor: pointer
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),0px 4px 4px 0px rgba(0, 0, 0, 0.06),0px 1px 1px 0px rgba(0, 0, 0, 0.12)

    &:is(.card) > .img > .description
      visibility: visible
      opacity: 1
      transition: opacity .5s ease
      
          
.img
  position: relative
  margin-bottom: 20px
.description
  visibility: hidden
  opacity: 0

  display: flex
  justify-content: center
  align-items: center

  padding: 20px 24px
  position: absolute
  top: 0
  left: 0

  width: 370px
  height: 100%
  background: rgba(33, 150, 243, 0.9)
  color: $white

  font-size: 18px
  font-weight: 400
  line-height: 28px
  letter-spacing: 3%
.name
  font-size: 18px
  font-weight: 700
  line-height: 36px
  letter-spacing: .06em
  margin-bottom: 4px
  color: $black
  padding-left: 24px

.category
  font-size: 16px
  font-weight: 400
  line-height: 30px
  letter-spacing: .03em
  color: $grey  
  padding-left: 24px
  margin-bottom: 20px
</style>
