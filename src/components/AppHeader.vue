<template>
  <header>
    <div class="header">
      <AppLogo />
      <div @click="isActiveMenu = true" class="btn-burger">
        <div class="btn-line"></div>
      </div>
      <nav v-if="!isActiveMenu" class="navbar">
        <div class="menu">
          <ul class="menu-list">
            <li
              v-for="(item, key) in ROUTER_PATH"
              :key="key"
              :class="{ active: activeKey === key }"
              class="menu-list_item"
            >
              <router-link :to="item.path" @click="handleClick(key)">
                {{ item.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
      <div class="contacts">
        <div class="email">
          <a href="mailto:info@devstudio.com">info@devstudio.com</a>
        </div>
        <div class="tel">
          <a href="tel:+380981111111">+38 096 111 11 11</a>
        </div>
      </div>
      <MenuBurger
        v-if="isActiveMenu"
        @close="isActiveMenu = false"
        :items="ROUTER_PATH"
        :show-menu="isActiveMenu"
        :tel="'+38 096 111 11 11'"
        :email="'info@devstudio.com'"
        :showMenu="isActiveMenu"
        @action="isActiveMenu = false"
      />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ROUTER_PATH } from "../router/path.js";
import AppLogo from "./AppLogo.vue";
import MenuBurger from "./MenuBurger.vue";

const isActiveMenu = ref(false);
const activeKey = ref(null);
const route = useRoute();

function handleClick(key) {
  activeKey.value = key;
}

// Инициализация активного ключа при монтировании компонента
const initActiveKey = () => {
  const values = Object.values(ROUTER_PATH);
  const index = values.findIndex((item) => item.path === route.path);
  if (index !== -1) {
    activeKey.value = Object.keys(ROUTER_PATH)[index];
  }
};

onMounted(() => {
  initActiveKey();
});
</script>

<style lang="sass" scoped>
@import '../assets/style'

.header
  position: relative
  display: flex
  justify-content: space-evenly
  align-items: center
  border-bottom: 1px solid #F5F4FA
  gap: 8px
  padding: 24px 0
  @media (max-width: 767px)
    justify-content: space-between
    padding: 20px 16px
.btn-burger
  display: none
  position: absolute
  top: 20px
  right: 16px
  width: 21px
  height: 21px
  cursor: pointer
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
.navbar
  @media (max-width: 480px)
    display: none
.menu-list
  display: flex
  justify-content: center
  align-items: center
  gap: 50px
  &_item
    position: relative
    font-size: .875rem
    font-weight: 500
    line-height: 16px
    letter-spacing: 0.02em
    color: $black
    &.active
      position: relative
      color: $primary
      &::after
        content:''
        position: absolute
        bottom: -32px
        left: 0
        width: 100%
        height: 4px
        border-radius: 2px
        background: $primary
    &:hover
      color: $primary
      transition: all .4s ease

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
  cursor: pointer
  padding-left: 26px
  position: relative

  &::after
    content: ''
    position: absolute
    top: 50%
    left: 0
    transform: translateY(-50%)
    width: 16px
    height: 12px
    background: url('../src/assets/icons/mail.svg') center / cover no-repeat

  &:hover,
  &:active
    color: $primary
.tel
  padding-left: 20px
  &:after
    width: 10px
    height: 16px
    background: url('../src/assets/icons/phone.svg') center / contain no-repeat
</style>
