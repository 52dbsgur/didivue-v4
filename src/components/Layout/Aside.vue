<template>
  <v-navigation-drawer permanent>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="submit"
      >
        <v-list-tile-action>
          <v-btn>{{ item.icon }}</v-btn>
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
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Record', icon: 'question_answer' },
          { title: 'Stacks', icon: 'question_answer' },
          { title: 'Settings', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>