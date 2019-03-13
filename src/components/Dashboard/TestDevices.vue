/* 
1. DeviceReady 를 렌더링
2. 각 DeviceReady에 속성, 타이틀, 아이콘을 전달
 */

<template>
  <div>
    <div class="test_devices">
      <h1>장치 테스트</h1>
    </div>
    <div>
      <DeviceReady v-for="device in devices" :key="device.type" :device="device"/>
    </div>
  </div>
</template>

<script>
import DeviceReady from "@/components/Dashboard/DeviceReady";
export default {
  components: { DeviceReady },
  data() {
    return {
      devices: [
        {
          type: "screen",
          name: "스크린",
          icon_on: "./ic-screen-blue.svg",
          icon_off: "./ic-screen-gray.svg"
        },
        {
          type: "camera",
          name: "카메라",
          icon_on: "./ic-screen-blue.svg",
          icon_off: "./ic-screen-gray.svg"
        }
        // {
        //   type: "microphone",
        //   name: "마이크",
        //   icon_on: "./ic-screen-blue.svg",
        //   icon_off: "./ic-screen-gray.svg"
        // },
        // {
        //   type: "system-sound",
        //   name: "시스템사운드",
        //   icon_on: "./ic-screen-blue.svg",
        //   icon_off: "./ic-screen-gray.svg"
        // }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  .test_devices
    position absolute
    top 200px
    left 117px
    width 1238px
    height 433px
    border-radius 6px
    box-shadow 0 2px 10px -2px rgba(195, 195, 195, 0.5)
    background-color #ffffff

  h1
    margin-top 16px
    margin-left 24px
    font-size 18px
    font-weight bold
    line-height 1.33
    color #2e2a25  
</style>