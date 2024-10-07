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
      :class="hasError ? 'error' : className"
      @input="emit('update:modelValue', inputValue)"
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
  },
  hasError: Boolean
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style lang="sass" scoped>
$primary: #2196F3
$border-color: rgba(33, 33, 33, 0.2)



label
  display: flex
  flex-direction: column
  gap: 4px

  font-size: 12px
  line-height: 14px
  letter-spacing: 1%

.input
  width: 100%
  height: 40px
  margin-bottom: 10px
  border: 1px solid $border-color
  border-radius: .25rem
  padding-left: 46px
  &:focus
    outline-color: $primary

.error
  border: 1px solid #f30    
</style>
