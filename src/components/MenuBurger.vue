<template>
  <div 
  @click="$emit('action')"
  @click.stop
  class="menu-burger animate__animated animate__backInLeft">
    <div class="close">
      <button @click="$emit('action')">X</button>
    </div>

    <nav class="navbar">
      <div class="menu">
        <ul class="menu-list">
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="$emit('action')"
            class="menu-list_item"
          >
            <router-link :to="item.path">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="contacts">
      <div class="email">
        <a href="#"> {{ email }}</a>
      </div>
      <div class="tel">
        <a href="#">{{ tel }}</a>
      </div>
    </div>

    <div class="social">
      <ul class="social-list">
        <li v-for="item in social" :key="item" class="social-list_item">
          <a href="#"> {{ item }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  email: String,
  tel: String,
  showMenu: Boolean,
});

const social = ["Instagram", "twitter", "Facebook", "LinkedIn"];
const items = ref(props.items);
const email = ref(props.email);
const tel = ref(props.tel);

</script>

<style lang="sass" scoped>
@import '../assets/style'

.menu-burger
  position: fixed
  padding: 48px 0 48px 40px
  width: 100%
  height: 100%
  background: lighten($primary, 15%)
  z-index: 999
  display: flex
  flex-direction: column
  

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

.navbar
  flex: 1 1 auto

.menu-list
  display: inline-flex
  flex-direction: column
  gap: 32px
  height: 100%
  &_item
    font-size: 2.5rem
    font-weight: 500
    line-height: 27px
    letter-spacing: 0.02em
    color: $black
    &:hover,
    &:active
      color: $white

.contacts
  display: inline-flex
  flex-direction: column-reverse
  font-size: 1.5rem
  line-height: 28px
  letter-spacing: .02em
  color: $grey
  gap: 32px
  margin-bottom: 64px
.tel
  font-size: 2.125rem
  line-height: 40px
.email,
.tel
  &:hover,
  &:active
    color: $white

.social-list
  display: flex
  gap: 20px
  font-size: 18px
  font-weight: 500
  line-height: 22px
  letter-spacing: .02em
  &_item
    position: relative
    &:hover
      color: $white
    &:not(:last-child)
      &::after
        content: ''
        position: absolute
        width: 1px
        height: 22px
        right: -10px
        top: 0
        background: $grey
        opacity: .8
</style>
