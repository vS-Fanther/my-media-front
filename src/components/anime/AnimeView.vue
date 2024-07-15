<template>
  <div>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск...."
        v-focus
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Добавить
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <anime-form
          @create="createAnime"
      />
    </my-dialog>
    <anime-list
        :animes="sortedAndSearchedAnimes"
        @remove="removeAnime"
        v-if="!isAnimesLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div class="page__config">
      <div class="page__wrapper">
        <div
            v-if="totalPages !== 1"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
              'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div>
      <div class="page__size">
        <my-select
            v-model="limit"
            :options="pageSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api";
import AnimeList from "@/components/anime/AnimeList.vue";
import AnimeForm from "@/components/anime/AnimeForm.vue";

export default {
  components: {
    AnimeList,
    AnimeForm
  },
  data() {
    return {
      animes: [],
      dialogVisible: false,
      isAnimesLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'name', name: 'По названию'},
        {value: 'description', name: 'По содержимому'},
      ],
      pageSize: [
        {value: 10, name: 10},
        {value: 25, name: 25},
        {value: 50, name: 50},
        {value: 100, name: 100}
      ],
    }
  },
  methods: {
    createAnime(anime) {
      this.animes.push(anime);
      this.dialogVisible = false;
    },
    removeAnime(anime) {
      this.animes = this.animes.filter(p => p.id !== anime.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber
    },
    async fetchAnimes() {
      try {
        this.isAnimesLoading = true;
        const response = await API.get('/anime', {
          params: {
            page: this.page,
            limit: this.limit
          }
        });
        this.totalPages = 2;//Math.ceil(response.headers['x-total-count'] / this.limit);
        this.animes = response.data.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isAnimesLoading = false;
      }
    },
  },
  mounted() {
    this.fetchAnimes();
  },
  computed: {
    sortedAnimes() {
      return [...this.animes]
          .sort((anime1, anime2) =>
              anime1[this.selectedSort]
                  ?.localeCompare(anime2[this.selectedSort]))
    },
    sortedAndSearchedAnimes() {
      return this.sortedAnimes.filter(anime => anime.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page() {
      this.fetchAnimes()
    },
    limit() {
      this.page = 1;
      this.fetchAnimes()
    }
  }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  padding: 20px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}
.page__config {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.page__size {
  display: flex;
  margin-top: 15px;
  padding: 20px;
}
.current-page {
  border: 2px solid teal;
}
</style>