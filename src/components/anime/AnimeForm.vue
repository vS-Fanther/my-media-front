<template>
  <form @submit.prevent>
    <h4>Create anime</h4>
    <my-input
        v-model="anime.name"
        type="text"
        placeholder="name"
    />
    <my-input
        v-model="anime.description"
        type="text"
        placeholder="body"
    />
    <my-input
        v-model="anime.genres"
        type="text"
        placeholder="body"
    />
    <my-input
        v-model="anime.theme"
        type="text"
        placeholder="body"
    />
    <my-input
        v-model="anime.originalName"
        type="text"
        placeholder="body"
    />
    <my-input
        v-model="anime.link"
        type="text"
        placeholder="body"
    />
    <my-input
        v-model="anime.mangaLink"
        type="text"
        placeholder="body"
    />
    <my-button
        @click="createAnime"
    >Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      anime: {
        name: '',
        description: '',
        genres: '',
        theme: '',
        originalName: '',
        link: '',
        mangaLink: ''
      }
    }
  },
  methods: {
    createAnime() {
      this.$emit('create', this.anime)
      this.anime = {
        name: '',
        description: '',
        genres: '',
        theme: '',
        originalName: '',
        link: '',
        mangaLink: ''
      }

    }
  }
}
</script>

<style scoped>

</style>