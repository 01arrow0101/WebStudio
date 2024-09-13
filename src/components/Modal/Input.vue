<template>
<label :for="label">
  <input v-model="value" :type="type" :placeholder="placeholder" :name="label">
</label>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  label:{
    type: String,
    required :true
  },
  type: {
    type: String,
    default: 'text',
    validation(value){
      return ['text', 'password','number'].includes(value)
    }
  },
  placeholder: String,
  required: false,
  default: '',
})

const value = ref('')
</script>

<style lang="sass" scoped>
input
  width: 100%
</style>  