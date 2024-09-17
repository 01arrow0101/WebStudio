<template>
  <div class="root">
    <div class="title" data-aos="fade-right" data-aos-duration="1500">
      <h2>Наша Команда</h2>
    </div>
    <div class="persons">
      <CardPerson 
      v-for="person in persons" :key="person.name"
      :person="person"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardPerson from './CardPerson.vue'

const persons = ref([
  {
    src: "/src/assets/img/person/Igor.jpeg",
    name: "Ігор Дем'яненко",
    position: "Product Designer",
  },
  {
    src: "/src/assets/img/person/Olga.jpeg",
    name: "Ольга Рєпіна",
    position: "Frontend Developer",
  },
  {
    src: "/src/assets/img/person/Mikola.jpeg",
    name: "Микола Тарасов",
    position: "Marketing",
  },
  {
    src: "/src/assets/img/person/Mihail.jpeg",
    name: "Михайло Єрмаков",
    position: "UI Designer",
  },
]);
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
.root
  text-align: center
  background: $bg-command
.title
  text-align: center
  padding-top: 94px
  margin-bottom: 50px
  font-size: 36px
  font-weight: 700
  line-height: 42px
  letter-spacing: .03em

.persons
  display: flex
  justify-content: center
  gap: 30px

.row
  display: flex
</style>
