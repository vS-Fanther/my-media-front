<template>
  <form @submit.prevent class="view">
    <h4>{{ text }}</h4>
    <div class="btns" v-if="!store.getters.isAuthenticated">
      <my-button
          @click="loginForm"
      >Логин
      </my-button>
      <my-button
          @click="registerForm"
          v-if="text !== 'Аккаунт создан успешно'"
      >Регистрация
      </my-button>
    </div>
    <div v-else>
      <my-button
          @click="logout"
      >Выйти ?
      </my-button>
    </div>
    <my-dialog v-model:show="showLoginForm">
      <Login @login="loginUser"/>
    </my-dialog>
    <my-dialog v-model:show="showRegisterForm">
      <Register @register="registerUser"/>
    </my-dialog>
  </form>
</template>

<script>
import Login from "@/components/common/header/auth/Login.vue";
import Register from "@/components/common/header/auth/Register.vue";
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
  components: {Register, Login},
  data() {
    return {
      text: 'Зачем нажал сюда?',
      showLoginForm: false,
      showRegisterForm: false,
    }
  },
  methods: {
    loginForm() {
      this.showLoginForm = true;
    },
    registerForm() {
      this.showRegisterForm = true;
    },
    registerUser() {
      this.text = 'Аккаунт создан успешно';
      this.showRegisterForm = false;
    },
    loginUser() {
      this.$emit('action');
      this.showLoginForm = false;
    },
    async logout() {
      console.log(store.getters.getUserId)
      await store.dispatch('logout')
      console.log(store.getters.getUserId)
      this.text = 'Успешно';
    },
  }
}
</script>

<style scoped>
.view {
  display: block;
}

.btns {
  display: flex;
  justify-content: space-between;
}
</style>