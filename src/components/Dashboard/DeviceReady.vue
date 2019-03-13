/* 
1. 전달받은 디바이스 타입속성을 통해서 디바이스 검색/콤보 값 세팅
2. 사용자가 선택한 디바이스를 스토어에 저장
 */

<template>
  <div class="device_ready">
    <v-card v-if="device" flat class="card text-xs-center ma-3" style="z-index: 9999">
      <v-card-title :class="card_title_class">
        <h2>{{ device.name}}</h2>
      </v-card-title>
      <v-card-text class="pt-3">
        <v-avatar class="white">
          <img :src="device.icon_off">
        </v-avatar>
      </v-card-text>
      <div v-if="device.type == 'camera'">
        <v-card-text>
          <div class="subheading">{{ device.name }}</div>
          <div class="grey--text">{{ device.name }} 연결 {{ isOn ? '연결 완료' : '대기' }}</div>
        </v-card-text>
        <v-select
          class="select"
          v-model="deviceValues"
          :items="deviceNames"
          label="선택해 주세요"
          v-on:change="changeDevice"
          outline
        ></v-select>
      </div>
      <div v-else>other</div>
    </v-card>
  </div>
</template>

<script>
//npm install ffdevices [FOR FIND DEVICES (Video, audio)]
export default {
  name: "DeviceReady",
  props: ["device"],
  data() {
    return {
      selectedDevice: "", //사용자가 v-select에서 선택한 Camera
      deviceNames: [], //Devices Camera List (Video를 지원하는)
      deviceValues: [], //Devices Camera List (Video를 지원하는)
      isOn: false,
      card_title_class: "card_title_gray"
    };
  },
  methods: {
    //디바이스의 정보를 가져오는 부분
    getDevices() {
      let self = this;
      const ffdevices = require("ffdevices");
      ffdevices.getAll(function(error, devices) {
        if (!error) {
          self.addlist(devices);
        } else {
          console.log("getffmpegDevices > error :", error);
        }
      });
    },
    addlist(devices) {
      console.log("count :", this.$store.state.counter.main);

      console.log("devices :", devices);
      // this.selectCamera = devices[0].name; //초기 카메라를 Devices의 목록중 제일 처음의 것으로 선택하여 나타냄
      let flag = false; //디바이스의 타입이 video인지 audio인지 확인하기 위하여 생성한 flag변수
      devices.forEach(item => {
        item.type !== "audio" ? (flag = true) : (flag = false);
        if (flag === true) {
          console.log(item.name);
          this.deviceNames.push(item.name);
          this.deviceValues.push(item.value);
        }
      });
    },
    changeDevice(e) {
      // 선택된 디바이스를 스토어에 저장
      this.selectedDevice = e;
      if (this.device.type == "camera") {
        this.card_title_class = "card_title";
        this.isOn = true;
        this.$store.dispatch("dashboard/changeDeviceCamera", {
          selectedDevice: this.selectedDevice
        });
      }
    }
  },
  mounted() {
    this.getDevices();
  }
};
</script>

<style lang="stylus" scoped>
  .device_ready
    position relative
    left 24px
    top 250px
    float left

  img 
    width 60px
    height 64px

  .card
    width 270px
    height 220px
    border-radius 6.1px
    border solid 1.7px #05b1d8
    background-color #ffffff

  .card_title
    width 270px
    height 42px
    border-radius 6.1px
    border solid 0.8px #bdbdbd
    background-color #05b1d8 

  .card_title_gray
    width 270px
    height 42px
    border-radius 6.1px
    border solid 0.8px #bdbdbd
    background-color gray 

  .card_title h2
    color white
    font-size 14px  

  .select
     height 22px 
</style>