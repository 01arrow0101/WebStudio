<template>
  <AppHeader />
  <main class="main">
    <Business />
    <Peculiarities class="cards" />
    <OurCommand />
    <Clients />
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";
import Business from "../components/Business.vue";
import Peculiarities from "../components/Peculiarities.vue";
import OurCommand from "../components/OurCommand.vue";
import Clients from "../components/Clients.vue";
import AppFooter from "../components/AppFooter.vue";
</script>

<style lang="sass" scoped>
.cards
  padding: 94px 0
</style>
