<template>
  <div>
    <StackTab/>
    <StackTableRaw/>
    <SelectOpening/>
    <UsageCheck/>
    <UploadProgress/>
    <StackTableUploaded/>
    <EditVideo/>
  </div>
</template>

<script>
import StackTab from "../components/Stacks/StackTab";
import StackTableRaw from "../components/Stacks/StackTableRaw";
import SelectOpening from "../components/Stacks/SelectOpening";
import UsageCheck from "../components/Stacks/UsageCheck";
import UploadProgress from "../components/Stacks/UploadProgress";
import StackTableUploaded from "../components/Stacks/StackTableUploaded";
import EditVideo from "../components/Stacks/EditVideo";

export default {
  name: "Dashboard",
  components: {
    StackTab, StackTableRaw, SelectOpening, UsageCheck, UploadProgress, StackTableUploaded, EditVideo 
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