<template>
  <v-app>
    <v-content>
      <!-- <Login/> -->
      <Aside/>
    </v-content>
  </v-app>
</template>

<script>
// import Login from "./components/Login";
import Aside from "./components/Layout/Aside";

export default {
  name: "App",
  components: {
    // Login
    Aside
  },
  data() {
    return {
      //
    };
  }
};
</script>
