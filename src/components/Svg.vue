<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: false
  }
})

const icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
</script>
<template>
<component :class="className" :is="icon"/>
</template>