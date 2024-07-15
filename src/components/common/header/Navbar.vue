<template>
  <div class="header">
    <div class="home">
      <router-link to="/" style="color: white">
        <i class="fas fa-home"/>
      </router-link>
    </div>

    <div class="navbar">
      <nav>
        <ul class="nav-list">
          <li>
            <router-link to="/users">Юзеры</router-link>
          </li>
          <li>
            <router-link to="/favorites">Избранное</router-link>
          </li>
          <li>
            <router-link to="/last-comments">Последние</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="login">
      <my-dialog v-model:show="dialogVisible">
        <ChoseAction @action="disableDialog"/>
      </my-dialog>
      <i @click="showDialog" style="color: white" class="fas fa-user"/>
    </div>
  </div>
</template>

<script>
import ChoseAction from "@/components/common/header/auth/ChoseAction.vue";

export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  components: {
    ChoseAction,
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    disableDialog() {
      this.dialogVisible = false;
    },
    login() {
      this.dialogVisible = false;
    },
    register() {
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background: teal;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home,
.login {
  flex: 0 1 auto;
}

.navbar {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin: 0;
}

.nav-list a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
}

.nav-list a:hover {
  text-decoration: underline;
}

.fa-home,
.fa-user {
  font-size: 2rem; /* Увеличение размера иконок */
}
</style>
