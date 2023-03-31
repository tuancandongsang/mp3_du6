<template>
  <div id="login">
    <div class="background"></div>
    <div class="container">
      <h1 v-if="pageCurrent === 'login'">Login</h1>
      <h1 v-if="pageCurrent === 'register'">Register</h1>
      <div class="form">
        <div class="username">
          <label for="" v-if="pageCurrent === 'login'">Username:</label>
          <label for="" v-if="pageCurrent === 'register'"
            >Create Username:</label
          >
          <input type="text" v-model="username" @blur="checkName" />
          <div class="validate-input">{{ message }}</div>
        </div>
        <div class="password">
          <label for="" v-if="pageCurrent === 'login'">Password:</label>
          <label for="" v-if="pageCurrent === 'register'"
            >Create Password:</label
          >
          <input type="password" v-model="password" />
          <div class="validate-input">
            {{ messagePassword }}
          </div>
        </div>
      </div>
      <div class="submit">
        <button @click="submitLogin">Submit</button>
      </div>
      <div class="checkLogin" v-if="pageCurrent === 'register'">
        <p>
          Bạn đã có tài khoản
          <b @click="this.$router.push('/login')">Đăng nhập ngay</b>
        </p>
      </div>
      <div class="checkLogin" v-if="pageCurrent === 'login'">
        <p>
          Bạn chưa có tài khoản
          <b @click="this.$router.push('/register')">Đăng ký ngay</b>
        </p>
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
      pageCurrent: "",
    };
  },
  created() {
    this.pageCurrent = this.$route.name;
    this.$watch(
      () => this.$route.name,
      (value, _) => {
        this.pageCurrent = value;
      }
    );
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
    changeToLogin() {
      this.$router.push("/login");
    },
    changeToRegister() {
      this.$router.push("/register");
    },
    async submitLogin() {
      if (this.isValidLogin && !this.messagePassword && !this.message) {
        if (this.pageCurrent === "login") {
          const fromLogin = {
            userName: this.username.trim(),
            passWord: this.password.trim(),
          };
          try {
            const res = await setLogin(fromLogin);
            window.localStorage.setItem("tokenzing", res.data.assetToken);
            this.$router.push("/");
          } catch (error) {
            console.log(error);
          }
        }
        if (this.pageCurrent === "register") {
          const fromRegister = {
            userName: this.username,
            passWord: this.password,
          };
          try {
            this.$router.push("/login");
          } catch (error) {}
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
