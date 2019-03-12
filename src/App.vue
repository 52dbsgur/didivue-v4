<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat router-link to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat router-link to="/login">
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn flat router-link to="/system-info">
        <span class="mr-2">System Informaiton</span>
      </v-btn>
    </v-toolbar>
    <br>
    <br>
    <br>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
