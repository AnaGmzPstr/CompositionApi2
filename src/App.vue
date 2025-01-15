<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-success text-white mb-4">
    <div class="container">
      <router-link class="navbar-brand text-white" :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
    </div>
  </nav>

  <!-- Main Container -->
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="css">
.container {
  max-width: 960px;
}
</style>
