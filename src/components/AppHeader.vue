<template>
  <header>
    <div v-if="!isActiveMenu" class="header">
      <AppLogo />
      <div @click="isActiveMenu = true" class="btn-burger">
        <div class="btn-line"></div>
      </div>
      <nav class="navbar">
        <div class="menu">
          <ul class="menu-list">
            <li v-for="(item, index) in items" :key="index" class="menu-list_item">
              <router-link to="/portfolio"> {{ item }}</router-link>
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
    </div>
    <MenuBurger
      v-show="isActiveMenu"
      @click="isActiveMenu = false"
      :items="items"
      :email="email"
      :tel="tel"
      :show-menu="isActiveMenu"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import MenuBurger from './MenuBurger.vue'

const isActiveMenu = ref(false)

const items = ref(['Студія', 'Портфоліо', 'Контакти'])
const email = ref('email@gmail.com')
const tel = ref('+38(098)1111111')
</script>

<style lang="sass" scoped>
@import '../assets/style'

.header
  position: relative
  width: 100%
  display: flex
  justify-content: space-evenly
  align-items: center
  border-bottom: 1px solid #F5F4FA
  gap: 8px
  padding: 24px 0
  @media (max-width: 767px)
    justify-content: space-between
    padding: 20px 16px

.navbar
  @media (max-width: 480px)
    display: none
.btn-burger
  display: none
  position: fixed
  right: 0
  top: 0
  width: 21px
  height: 21px
  border: 1px solid $primary
  @media (max-width: 480px)
    display: block
.btn-line
  position: relative
  width: 16px
  height: 1px
  background: #000
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  &::before
    content: ''
    position: absolute
    width: 16px
    height: 1px
    background: #000
    top: 4px
    left: 0
  &::after
    content: ''
    position: absolute
    width: 16px
    height: 1px
    background: #000
    top: -4px
    left: 0
.menu-list
  display: flex
  justify-content: center
  align-items: center
  gap: 50px
  &_item
    font-size: .875rem
    font-weight: 500
    line-height: 16px
    letter-spacing: 0.02em
    color: $black
    &:hover,
    &:active
      color: $primary

.contacts
  display: flex
  align-items: center
  gap: 50px
  font-size: 14px
  font-weight: 500
  line-height: 16px
  letter-spacing: .02em
  color: $grey
  @media (max-width: 767px)
    flex-direction: column
    gap: 10px
  @media (max-width: 480px)
    display: none
.email,
.tel
  &:hover,
  &:active
    color: $primary
</style>
