<template>
  <form @submit.prevent>
    <div>
      <my-input
          v-model="user.username"
          type="text"
          placeholder="username"
      />
      <my-input
          v-model="user.email"
          type="text"
          placeholder="email"
      />
      <my-input
          v-model="user.password"
          type="password"
          placeholder="password"
      />
      <my-button
          @click="registerUser"
      >Регистрация
      </my-button>
    </div>
  </form>
</template>

<script>
import API from "@/api";

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async registerUser() {
      try {
        console.log(this.user.email);
        const response = await API.post('user/add', {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        });
      } catch (e) {
        console.log(e);
      }
      this.$emit('register', this.user);
      this.user = {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>