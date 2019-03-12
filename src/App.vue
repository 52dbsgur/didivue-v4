<template>
  <v-app>
    <v-content>
      <!-- <Login/> -->
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login
  },
  data() {
    return {
      //
    };
  }
};
</script>
