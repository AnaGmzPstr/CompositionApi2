<template>
  <!-- Post Cards Grid -->
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="post in postsArray" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<script setup>
import PostCard from "../components/PostCard.vue";
import lecturaPosts from "../composables/readPosts.js";

const { postsArray, llegirTots } = lecturaPosts();
llegirTots();
</script>
