<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="hamburger-menu">
    <button class="menu-button" type="button" aria-label="Open menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>

    <aside class="side-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="side-menu-header">
        <h2>Menu</h2>
        <button class="side-menu-close" type="button" aria-label="Close menu" @click="closeMenu">X</button>
      </div>

      <nav class="side-menu-nav">
        <button class="side-menu-link side-menu-link-bottom" type="button">Log out</button>
      </nav>
    </aside>
  </div>
</template>
