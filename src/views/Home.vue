<template>
  <AppHeader/>
<main class="main">
<Business />
 <Peculiarities class="cards"/>
 
</main>

</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import Business from '../components/Business.vue'
import Peculiarities from '../components/Peculiarities.vue'

</script>

<style lang="sass" scoped>
.cards
  padding: 94px 0
</style>