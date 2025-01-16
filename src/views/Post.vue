<template>
  <div v-if="post" class="container my-5">
    <button @click="$router.go(-1)" class="btn btn-secondary mb-4">
      Volver
    </button>
    <h1 class="display-4 mb-4">{{ post.title }}</h1>
    <p class="text-muted fs-4">{{ user.name }}</p>
    <p class="lead">{{ post.body }}</p>
  </div>
  <div v-else class="container text-center my-5">
    <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-3">Cargando post...</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import fetchApi from '../composables/readPosts.js';

const { llegirPost, llegirUsuari } = fetchApi();
const route = useRoute();
const post = ref(null);
const user = ref(null);

watchEffect(async () => {
  const id = route.params.id;
  if (id) {
    post.value = null;
    user.value = null;
    post.value = await llegirPost(id);
    user.value = await llegirUsuari(id);
  }
});
</script>
