<template>
  <div class="menu-burger">
    <button class="close-btn">X</button>
    <nav class="navbar">
      <div class="menu">
        <ul class="menu-list">
          <li
            v-for="(item, index) in items"
            :key="index"
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
const showMenu = ref(props.showMenu);
</script>

<style lang="sass" scoped>
@import '../assets/style'

.menu-burger
  position: relative
  padding: 48px 0 48px 40px
  width: 100%
  height: 100%
  background: lighten($primary, 15%)
  // left: 0%
  transition: all 3s ease

.close-btn
  position: absolute
  width: 20px
  height: 20px
  top: 24px
  right: 24px
.menu-list
  width: 100%
  display: flex
  flex-direction: column
  gap: 32px
  margin-bottom: 300px
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
  display: flex
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
