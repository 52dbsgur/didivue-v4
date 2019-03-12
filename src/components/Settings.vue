<template>
  <div>
    <PersonInfo/>
    <RecordSettings/>
    <SaveFolder/>
  </div>
</template>

<script>
import PersonInfo from "../components/Settings/PersonInfo";
import RecordSettings from "../components/Settings/RecordSettings";
import SaveFolder from "../components/Settings/SaveFolder";

export default {
  name: "Dashboard",
  components: {
    PersonInfo, RecordSettings, SaveFolder, 
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="stylus" scoped>

</style>