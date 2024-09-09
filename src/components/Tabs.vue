<template>
  <button @click="$emit('action', nameBtn.name)" class="btn">{{ nameBtn.name }}</button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  btn: {
    type: Object,
    required: true,
  },
});
const nameBtn = ref(props.btn);

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
</style>
