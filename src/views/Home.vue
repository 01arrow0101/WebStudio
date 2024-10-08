<template>
  <Modal :isShowModal="isShowModal" @update:isShowModal="updateModalState" />
  <AppHeader />
  <main class="main">
    <Business @showModal="showModal" />
    <Peculiarities class="cards" />
    <Info />
    <OurCommand />
    <Clients />
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal/Modal.vue";
import AppHeader from "../components/AppHeader.vue";
import Business from "../components/Business.vue";
import Peculiarities from "../components/Peculiarities.vue";
import Info from "../components/Info.vue";
import OurCommand from "../components/OurCommand.vue";
import Clients from "../components/Clients.vue";
import AppFooter from "../components/AppFooter.vue";

const isShowModal = ref(false);

function showModal() {
  isShowModal.value = true;
}

function updateModalState(newValue) {
  isShowModal.value = newValue;
}
</script>

<style lang="sass" scoped>
.cards
  padding: 94px 0
</style>
