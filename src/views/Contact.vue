<template>
    <AppHeader />
    <main class="main">
      <Alert />
    </main>
    <footer>
      <AppFooter />
    </footer>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import Alert from '../components/Alert.vue'
</script>

<style lang="sass" scoped>
.main
  display: flex
  justify-content: center
  align-items: center
  padding: 94px
</style>