<template>
  <transition  name="overlay">
    <div v-if="isShowModal" class="wrapper">
        <div class="modal animate__animated animate__backInDown">
          <div class="close">
            <button @click="closeModal">X</button>
          </div>
          <div class="title">Залиште свої дані, ми вам передзвонимо</div>
          <form @submit.prevent="submitForm">
            <div 
              v-for="field in fields"
              :key="field.label"
              :id="field.label"
              class="name col">
              <Input :title="field.title" v-model="field.value" :label="field.label" :type="field.type" />
              <Svg :className="field.className" :name="field.icon"></Svg>
            </div>
            <div class="commit col">
              Коментар
              <textarea v-model="commit" name="commit" id="commit" placeholder="Введите текст"></textarea>
            </div>
            <div class="license">
              <input type="checkbox" v-model="checked">
              Погоджуюся з розсилкою та приймаю <a class="license-link" href="#">Умови договору</a>
            </div>
            <div class="button">
              <AppButton type="btn">Відправити</AppButton>
            </div>
          </form>
        </div>
      </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from '../Button/AppButton.vue';
import Input from './Input.vue';
import Svg from '../Svg.vue';

const props = defineProps({
  isShowModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:isShowModal']);

const checked = ref(false);
const fields = ref([
  {
    title: "Ім'я",
    value: ref(''),
    label: 'name',
    type: 'text',
    icon: 'user',
    className: 'svg-icon'
  },
  {
    title: "Телефон",
    value: ref(''),
    label: 'tel',
    type: 'tel',
    icon: 'tel',
    className: 'svg-icon'
  },
  {
    title: "Пошта",
    value: ref(''),
    label: 'mail',
    type: 'text',
    icon: 'email',
    className: 'svg-icon'
  },
]);

const commit = ref('');

function submitForm() {
  const isValid = fields.value.every(field => field.value.value.length > 0) && checked.value;
  if (isValid) {
    console.log(checked.value, ...fields.value.map(field => field.value.value));
  } else {
    console.log('Ошибка');
  }
}

function closeModal() {
  emit('update:isShowModal', false);
}
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'

.overlay-enter-from,
.overlay-leave-to
  opacity: 0

.overlay-enter-active,
.overlay-leave-active
  transition: all 1s


.svg-icon
  position: absolute
  top: 38px
  left: 16px
  width: 18px
  height: 18px
  transform: translateY(-50%)
  transition: color 0.3s ease  
  color: $grey

.col:focus-within .svg-icon
  color: $primary  

.wrapper
  position: absolute
  inset: 0
  display: flex
  justify-content: center
  padding-top: 200px
  background: rgba(0,0,0,70%)
  z-index: 9999

.modal
  position: relative
  max-width: 528px
  max-height: 580px
  width: 100%
  padding: 40px
  border-radius: 4px
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)
  background: $white

.close
  position: absolute
  top: 8px
  right: 8px
  & button
    width: 30px
    height: 30px
    background: $white
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 50%
    cursor: pointer
    &:hover
      color: $primary

.title
  font-size: 20px
  font-weight: 700
  line-height: 23px
  letter-spacing: 3%
  margin-bottom: 12px  

.col
  position: relative
  display: flex
  flex-direction: column
  gap: 4px
  font-size: 12px
  font-weight: 400
  line-height: 14px
  letter-spacing: 1%
  color: $grey

.commit
  margin-bottom: 20px
  & textarea
    max-width: 28rem
    width: 100%
    height: 96px
    border: 1px solid rgba(33, 33, 33, 0.2)
    border-radius: .25rem
    &:focus
      outline-color: $primary
    &[placeholder]
      padding-left: 16px
      padding-top: 4px

.license
  display: flex
  align-items: center
  gap: 8px
  margin-bottom: 30px
  &-link
    color: $primary
    text-decoration: underline

.button
  text-align: center
  &.btn
    padding: 10px 52px    
</style>
