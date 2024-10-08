<template>
  <AppHeader />
  <main class="main">
    <div class="container">
      <div class="title" data-aos="zoom-in-up">
        <h2 class="title-h2">Наші контакти</h2>
      </div>
      <div class="address title-h2" data-aos="fade-right" data-aos-offset="300">
        Наша адреса
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40595.46423588096!2d30.4105912!3d50.5115381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d29b9e369069%3A0xff64663a5fd75cd5!2z0YPQuy4g0JvQtdGB0Lgg0KPQutGA0LDQuNC90LrQuCwgMjYsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1728367293134!5m2!1sru!2sua"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="title-h2" data-aos="fade-left" data-aos-offset="300">
        Наша пошта:
        <a href="mailto:info@devstudio.com">info@devstudio.com</a>
      </div>
      <div class="title-h2" data-aos="fade-right" data-aos-offset="300">
        Наш телефон:
        <a href="tel:+380971111111">(+380)097 111 11 11</a>
      </div>
    </div>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'
.main
  padding: 94px
  background: $bg-command
iframe
  width: 100%
  height: 600px
  border: none
  margin-bottom: 30px
.title
  text-align: center
  margin-bottom: 50px
.title-h2
  // font-size: 18px
  &:not(:last-child)
    margin-bottom: 20px

a
  color: $grey
  &:hover
    color: $primary
</style>
