<template>
 <AppHeader />
 <main class="main">
  <div class="container">
  <div class="row">
  <Tabs />
  </div>
  <div class="grid">
    <Card />
  </div>
  </div>
 </main>
 <footer>
  <AppFooter />
 </footer>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import Tabs from '../components/Tabs.vue'
import Card from '../components/Card.vue'
</script>

<style lang="sass" scoped>
@import '/src/assets/style.sass'
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
.grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(3, 1fr)
  gap: 1.875rem
</style>