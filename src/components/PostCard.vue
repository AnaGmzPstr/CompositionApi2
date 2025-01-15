<template>
  <!-- Card for each post -->
  <div class="card mb-4 shadow-sm" style="width: 18rem;">
    <img
      src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="card-img-top"
      alt="Post image"
      style="background: #cccccc; width: 100%; height: 150px; object-fit: cover;"
    />
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="{ name: 'Post', params: { id: post.id } }" class="text-decoration-none text-dark">
          {{ post.title }}
        </router-link>
      </h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});
const post = { ...props.post };
</script>
