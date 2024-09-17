<script setup>
import { RouterView } from 'vue-router'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Исправлен путь к файлу стилей AOS
import 'animate.css'; // Импорт Animate.css
AOS.init();
</script>

<template>
  <RouterView/>
</template>

<style lang="sass" scoped>
</style>
