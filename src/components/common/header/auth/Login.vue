<template>
  <form @submit.prevent>
    <div>
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
          @click="loginUser"
      >Логин
      </my-button>
    </div>
  </form>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async loginUser() {
      await store.dispatch('login', this.user)
      this.$emit('login', this.user);
      this.user = {
        email: '',
        password: ''
      }
    },
  }
}
</script>

<style scoped>

</style>