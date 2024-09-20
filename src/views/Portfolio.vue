<template>
  <AppHeader />
  <main class="main">
    <div class="container">
      <div class="row">
        <Tabs
          v-for="(name, i) in btns"
          :key="i"
          :btn="name"
          @action="filterProduct"
          :is-active="filterActive"
        />
        <button class="btn" @click="sort">Сортування А-Я</button>
      </div>
      <div v-if="!filterActive" class="grid">
        <Card v-for="card in cards" :key="card.name" :card="card" />
      </div>
      <div v-else class="grid">
        <Card v-for="card in filterCard" :key="card.name" :card="card" />
      </div>
    </div>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Tabs from "../components/Tabs.vue";
import Card from "../components/Card.vue";

const filterActive = ref(false);
const cards = ref([
  {
    src: "/src/assets/img/portfolio/1.jpeg",
    name: "Технокряк",
    category: "Веб-сайти",
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
    category: "Додатки",
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
    category: "Додатки",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
  {
    src: "/src/assets/img/portfolio/6.jpeg",
    name: "Inspiration has no Borders",
    category: "Веб-сайти",
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
    category: "Додатки",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint cum molestias accusamus eligendi ipsam doloremque perferendis ullam quam corrupti.",
  },
]);
const filterCard = ref([]);
const btns = ref([
  {
    name: "Усі",
    id: 0,
  },
  {
    name: "Веб-сайти",
    id: 1,
  },
  {
    name: "Додатки",
    id: 2,
  },
  {
    name: "Дизайн",
    id: 3,
  },
  {
    name: "Маркетинг",
    id: 4,
  },
]);

function filterProduct(category) {
  filterActive.value = true;
  if (category === "Усі") {
    filterCard.value = cards.value;
  } else {
    filterCard.value = cards.value.filter((el) => el.category === category);
  }
}

function sort() {
  filterCard.value = cards.value.sort((a, b) =>
    a.category.localeCompare(b.category)
  );
}
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.btn
  border-radius: 4px
  background: rgb(245, 244, 250)
  padding: 6px 22px
  font-size: 16px
  font-weight: 500
  line-height: 26px
  letter-spacing: .03em
  border-color: transparent
  &:hover
    background: $primary
    color: $white
    cursor: pointer
.container
  max-width: 73.125rem
  margin: 0 auto
.main
  padding: 94px 0
.row
  display: flex
  justify-content: center
  align-items: center
  gap: 8px
  margin-bottom: 50px
  @media (max-width: 768px)
    flex-wrap: wrap
    justify-content: start
.grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(3, 1fr)
  gap: 1.875rem
  justify-items: center
  @media (max-width: 768px)
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)
  @media (max-width: 480px)
    grid-template-columns: repeat(1, 1fr)
    grid-template-rows: repeat(1, 1fr)
</style>
