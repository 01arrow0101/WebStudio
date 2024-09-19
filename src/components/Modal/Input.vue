<template>
  <label :for="label">
    {{ title }}
    <input
      :id="label"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :name="label"
      class="input"
      :class="className"
    />
  </label>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  className:{
    type: String,
    required: false
  }
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style lang="sass" scoped>
$border-color: rgba(33, 33, 33, 0.2)
label
  display: flex
  flex-direction: column
  gap: 4px
.input
  width: 100%
  height: 40px
  margin-bottom: 10px
  border: 1px solid $border-color
  border-radius: .25rem
  padding-left: 46px
</style>
