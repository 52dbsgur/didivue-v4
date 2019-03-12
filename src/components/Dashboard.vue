<template>
  <div>
    <DeviceReady/>
    <GuideSound/>
    <Plan/>
    <PlayVideo/>
    <PreviewTest/>
    <Pricing/>
    <RecordStart/>
    <TestDevices/>
  </div>
</template>

<script>
import DeviceReady from "../components/Dashboard/DeviceReady";
import GuideSound from "../components/Dashboard/GuideSound";
import Plan from "../components/Dashboard/Plan";
import PlayVideo from "../components/Dashboard/PlayVideo";
import PreviewTest from "../components/Dashboard/Pricing";
import Pricing from "../components/Dashboard/Pricing";
import RecordStart from "../components/Dashboard/RecordStart";
import TestDevices from "../components/Dashboard/TestDevices";


export default {
  name: "Dashboard",
  components: {
    DeviceReady, GuideSound, Plan, PlayVideo, PreviewTest, Pricing, RecordStart, TestDevices 
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