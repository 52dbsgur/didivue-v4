<template>
  <div>
    <div class="login">
      <v-card class="login_card" height="100%">
        <v-card-title class="logo-didicast pt-5">
          <img src="../assets/img/logo-didicast.svg" class="logo-didicast">
        </v-card-title>
        <v-card-text>
          <p>아이디</p>
          <v-form class="login_input">
            <v-text-field outline></v-text-field>
          </v-form>
          <p>비밀번호</p>
          <v-form class="login_input">
            <v-text-field
              outline
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.validError]"
              :type="show1 ? 'text' : 'password'"
              name="login_password"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-form>
        </v-card-text>
          <!-- <v-btn color="primary" @click="$router.push('layout')">로그인</v-btn>
          <router-link to="layout"><button>test</button></router-link> -->
          <v-btn to="/layout">로그인</v-btn>
       
        <img src="../assets/img/login.jpg" class="login_img">
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        validError: () => "비밀번호를 오류(5회 이상). 고객센터로 문의 바랍니다."
      }
    };
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped>
  .login
    width 1366px
    height 768px
    background-color #ffffff

  .login_card
    position relative

  .logo-didicast
    width 220px
    height 26px
    top 57px

  .login_input
    width 400px

  .login_img
    position absolute
    top 0
    right 0
    width 683px
    height 768px
           
</style>
