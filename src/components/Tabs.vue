<template>
  <button
    class="btn"
    :class="{ active: isActive }"
    @click="$emit('action', btn.name)"
  >
    {{ btn.name }}
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  btn: {
    type: Object,
    required: true,
  },
  isActive: Boolean,
});

const emit = defineEmits(["action"]);
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

.btn.active
  background: $primary
  color: $white
  // Добавьте любые другие стили для активного состояния
</style>
