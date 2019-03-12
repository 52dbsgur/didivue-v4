<template>
  <v-navigation-drawer permanent height="600" width="100">

    <v-list dense class="pt-5">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        router :to="item.route"
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
          { title: 'Dashboard', icon: './dashboard.svg', route: '/' },
          { title: 'Record', icon: './record.svg', route: '/layout/record' },
          { title: 'Stacks', icon: './stacks.svg' , route: '/stacks'},
          { title: 'Settings', icon: './settings.svg' , route: '/settings'}
        ]

      }
    }
  }
</script>

<style lang="stylus" scoped>
  img
    padding-left 20px

</style>