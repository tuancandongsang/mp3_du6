<template>
  <div id="login">
    <div class="background"></div>
    <div class="container">
      <h1>Login</h1>
      <div class="form">
        <div class="username">
          <label for="">Username:</label>
          <input type="text" v-model="username" />
          <div class="validate-input" v-if="isNullEmail">
            username is required
          </div>
          <div class="validate-input">{{ message }}</div>
        </div>
        <div class="password">
          <label for="">Password:</label>
          <input type="password" v-model="password" />
          <div class="validate-input" v-if="isNullPassWord">
            password is required
          </div>
          <div class="validate-input" >
            {{messagePassword}}
          </div>
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
      isNullEmail: false,
      isNullPassWord: false,
      isMaxLengthEmail: false,
      message: "",
      messagePassword : ""
    };
  },
  computed: {
    isValidLogin() {
      return this.username && this.password;
    },
  },
  watch: {
    username() {
      !this.username ? (this.isNullEmail = true) : (this.isNullEmail = false);
      this.username && this.username.length < 9
        ? (this.message = "UserName min length  is 8")
        : (this.message = "");
    },
    password() {
      !this.password
        ? (this.isNullPassWord = true)
        : (this.isNullPassWord = false);

        if(this.password){
             const  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
             const result = regularExpression.test(this.password);
             result ? this.messagePassword = "" : this.messagePassword = "Invalid PassWord"
        }else{
            this.messagePassword = ""
        }
    },
  },
  methods: {
    submitLogin() {
      if (this.isValidLogin && !this.messagePassword && !this.message) {
        this.$router.push("/");
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