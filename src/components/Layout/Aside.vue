<template>
  <v-navigation-drawer class="aside" permanent height="600" width="100">

    <v-list dense class="pt-5">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        router :to="item.route"
        class="list_tile"
      >
        <v-list-tile-action>
          <img :src="item.icon" alt="">
        </v-list-tile-action>

        <!-- <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content> -->
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: './dashboard.svg', route: '/layout/dashboard' },
          { title: 'Record', icon: './record.svg', route: '/layout/record' },
          { title: 'Stacks', icon: './stacks.svg' , route: '/layout/stacks'},
          { title: 'Settings', icon: './settings.svg' , route: '/layout/settings'}
        ]

      }
    }
  }
</script>

<style lang="stylus" scoped>
  img
    padding-left 20px

  .list_tile
    height 70px
  
</style>