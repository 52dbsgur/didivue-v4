<template>
  <v-navigation-drawer permanent>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        router :to="item.route"
      >
        <v-list-tile-action>
          <!-- <v-btn>{{ item.icon }}</v-btn> -->
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'dashboard', route: '/' },
          { title: 'Record', icon: 'record', route: '/layout/record' },
          { title: 'Stacks', icon: 'folder' , route: '/stacks'},
          { title: 'Settings', icon: 'setting' , route: '/settings'}
        ]

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>