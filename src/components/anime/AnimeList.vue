<template>

  <div v-if="animes.length > 0">
    <h3>Anime list</h3>
    <transition-group name="user-list">
      <anime-item
          v-for="anime in animes"
          :anime="anime"
          :key="anime.id"
          @remove="$emit('remove', anime)"
      />
    </transition-group>
  </div>
  <h3 v-else style="color: red">Нихуя нет</h3>
</template>

<script>
import AnimeItem from "@/components/anime/AnimeItem.vue";

export default {
  components: {
    AnimeItem
  },
  props: {
    animes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>