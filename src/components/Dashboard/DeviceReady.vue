<template>
  <div>
    <div class="device_ready" v-for="item in device_on" :key="item.name">
    <v-card flat class="card text-xs-center ma-3" style="z-index: 9999">
      <v-card-title class="card_title">
        <h2>{{ item.name}}</h2>
      </v-card-title>
      <v-card-text class="pt-3">
        <v-avatar class="white">
          <img :src="item.icon">
        </v-avatar>
      </v-card-text>
        <v-card-text>
          <div class="subheading">{{ item.name }}</div>
          <div class="grey--text">{{ item.status }}</div>
        </v-card-text>
        <v-select
          class="select"
          :device_on="item.name"
          label="선택해 주세요"
          outline
        ></v-select>
      </v-card>
    </div>
  </div>
</template>

<script>
//npm install ffdevices [FOR FIND DEVICES (Video, audio)]
export default {
  data() {
    return {
      selectCamera: '',   //사용자가 v-select에서 선택한 Camera
      cameras: [],        //Devices Camera List (Video를 지원하는)
      device_on: [
        { name: '스크린', status: '스크린 연결 완료', icon: './ic-screen-gray.svg' },
        { name: '카메라', status: '카메라 연결 완료', icon: './ic-camera-gray.svg' },
        { name: '마이크', status: '마이크 연결 완료', icon: './ic-mic-gray.svg' },
        { name: '윈도우 환경 설정', status: '윈도우 설정 완료', icon: './ic-speaker-blue.svg' }
      ],
      device_off: [
        { name: '스크린', status: '스크린 연결 대기중', icon: './ic-screen-gray.svg' },
        { name: '카메라', status: '카메라 연결 대기중', icon: './ic-camera-gray.svg' },
        { name: '마이크', status: '마이크 연결 대기중', icon: './ic-mic-gray.svg' },
        { name: '윈도우 환경 설정', status: '윈도우 설정 대기중', icon: './ic-speaker-gray.svg' }
      ],
    }
  },
  methods: {
    //디바이스의 정보를 가져오는 부분
    getDevices () {
      let self = this
      const ffdevices = require('ffdevices')
      ffdevices.getAll(function (error, devices) {
        if (!error) {
          self.addCameralist(devices)
        } else {
          console.log('getffmpegDevices > error :', error)
        }
      })
    },
    addCameralist (devices) {
      this.selectCamera = devices[0].name   //초기 카메라를 Devices의 목록중 제일 처음의 것으로 선택하여 나타냄
      let flag = false                      //디바이스의 타입이 video인지 audio인지 확인하기 위하여 생성한 flag변수
      devices.forEach((item) => {
        (item.type !== 'audio') ? flag = true : flag = false
        if (flag === true) {
          console.log(item)
          this.cameras.push(item)
        }
      })
    }
  },
  mounted () {
    this.getDevices()
  }
}
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

  .card_title h2
    color white
    font-size 14px  

  .select
     height 22px 
</style>