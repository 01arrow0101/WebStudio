<script setup>
import { RouterView } from 'vue-router'
<<<<<<< HEAD
import Modal from '@/components/Modal//Modal.vue'

</script>

<template>
  <Modal />
=======
import AOS from 'aos';
import 'aos/dist/aos.css'; // Исправлен путь к файлу стилей AOS
import 'animate.css'; // Импорт Animate.css
AOS.init();
</script>

<template>
>>>>>>> 45650efaca430c1ad391d324211916440312755e
  <RouterView/>
</template>

<style lang="sass" scoped>
</style>
