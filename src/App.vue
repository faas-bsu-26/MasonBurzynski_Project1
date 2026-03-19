<script setup>
import HamburgerMenu from './components/HamburgerMenu.vue'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <HamburgerMenu />
      <router-link class="app-title app-title-button" to="/about">Student Voice App</router-link>
      <div class="header-spacer" aria-hidden="true"></div>
    </header>

    <section class="app-panel">
      <router-view />
    </section>

    <nav class="main-nav">
      <router-link to="/ideas">Idea</router-link> |
      <router-link to="/issues">Issue</router-link> |
      <router-link to="/priorities">Priority</router-link>

    </nav>
    
  </div>
</template>
