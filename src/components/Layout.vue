<template>
  <div class="layout">
    <Header/>
    <Aside/>
    <router-view></router-view>
    <ProgressInfo/>
  </div>
</template>

<script>
import Aside from './Layout/Aside'
import Header from './Layout/Header'
import ProgressInfo from './Layout/ProgressInfo'

export default {
  name: 'Layout',
  components: {
    Aside, Header, ProgressInfo
  }
}
</script>

<style lang="stylus" scoped>
</style>