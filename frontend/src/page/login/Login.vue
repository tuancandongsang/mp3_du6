<template>
  <div id="login">
    <div class="background"></div>
    <div class="container">
      <h1>Login</h1>
      <div class="form">
        <div class="username">
          <label for="">Username:</label>
          <input type="text" v-model="username" />
        </div>
        <div class="password">
          <label for="">Password:</label>
          <input type="password" v-model="password" />
        </div>
      </div>
      <div class="submit">
        <button @click="submitLogin">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./login.scss";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
    submitLogin(){
        console.log('tuancan');
        this.$router.push('/')
    }
  }
};
</script>

<style>
</style>