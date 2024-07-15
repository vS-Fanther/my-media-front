<template>
  <div class="anime">
    <div><strong>Name:</strong> {{ anime.name }}</div>
    <div><strong>Description:</strong> {{ anime.description }}</div>
    <div><strong>Genres:</strong> {{ anime.genres }}</div>
    <div><strong>Theme:</strong> {{ anime.theme }}</div>
    <div><strong>Original Name:</strong> {{ anime.original_name }}</div>
    <div><strong>Link:</strong> {{ anime.link }}</div>
    <div><strong>Manga Link:</strong> {{ anime.manga_link }}</div>
    <div class="btn__anime">
      <my-button
          @click="$emit('remove', anime)"
      >Delete
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.anime {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>