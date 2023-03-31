<template>
  <div id="login">
    <div class="background"></div>
    <div class="container">
      <h1>Login</h1>
      <div class="form">
        <div class="username">
          <label for="">Username:</label>
          <input type="text" v-model="username" @blur="checkName" />
          <div class="validate-input">{{ message }}</div>
        </div>
        <div class="password">
          <label for="">Password:</label>
          <input type="password" v-model="password" />
          <div class="validate-input">
            {{ messagePassword }}
          </div>
        </div>
      </div>
      <div class="submit">
        <button @click="submitLogin">Submit</button>
      </div>
      <div class="checkLogin">
        <p>Bạn đã có tài khoản <b>Đăng nhập ngay</b></p>
      </div>
      <div class="checkLogin">
        <p>Bạn chưa có tài khoản <b>Đăng ký ngay</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import "./login.scss";
import { setLogin } from "../../apis/serveLogin";
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      messagePassword: "",
    };
  },
  computed: {
    isValidLogin() {
      return this.username && this.password;
    },
  },
  watch: {
    username() {
      this.username && this.username.length < 2
        ? (this.message = "UserName min length  is 2")
        : (this.message = "");
    },
    password() {
      if (!this.password) {
        this.messagePassword = "Password invalid";
      }
      if (this.password.length < 3) {
        this.messagePassword = "Min 3 text";
      } else {
        this.messagePassword = "";
      }
    },
  },
  methods: {
    async submitLogin() {
      if (this.isValidLogin && !this.messagePassword && !this.message) {
        const fromLogin = { userName: this.username, passWord: this.password };
        try {
          const res = await setLogin(fromLogin);
          window.localStorage.setItem("tokenzing", res.data.assetToken);
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>
.validate-input {
  margin-left: 20px;
  margin-top: 3px;
  color: red;
}
</style>