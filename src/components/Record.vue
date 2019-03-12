<template>
  <div>
    <Alert/>
    <RecordLecInfo/>
    <RecordStatus/>
    <StartRecord/>
  </div>
</template>

<script>
import Alert from "../components/Record/Alert";
import RecordLecInfo from "../components/Record/RecordLecInfo";
import RecordStatus from "../components/Record/RecordStatus";
import StartRecord from "../components/Record/StartRecord";

export default {
  name: "Dashboard",
  components: {
    Alert, RecordLecInfo, RecordStatus, StartRecord 
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