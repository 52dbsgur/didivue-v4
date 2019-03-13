<template>
  <div>
    <v-btn flat> 뒤로</v-btn>
    <div class="start_record">
      
      <h2>녹화</h2>
      <div class="black_box">
        <h1>촬영 준비 완료</h1>
        <v-btn class="record_start red white--text">녹화 시작</v-btn>
      </div>
      <div class="connect_status">
        <h4>장치 연결 상태</h4>
        <v-card class="card" flat v-for="item in devices" :key="item.title">
         <v-layout row wrap :class="`pa-3 item ${item.status}`">
           <v-flex>
             <div>{{ item.title }}</div>
             <div class="caption grey--text">
               {{ item.name }}
             </div>
           </v-flex>
         </v-layout>
         <v-divider></v-divider>
       </v-card>
      </div>
      <h3>강의명</h3>
      <p>강사명</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [
        { title: '스크린', name: 'HANSUNG-ULTRON-4K' },
        { title: '카메라', name: 'Logitech-C702' },
        { title: '마이크', name: 'MICROPHONE-V102' },
        { title: '윈도우 환경 설정', name: '설정됨' },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .start_record
    position absolute
    top 50px
    left 130px
    width 1240px
    height 570px
    padding-left 33px
    border-radius 6px
    box-shadow 0 2px 10px -2px rgba(195, 195, 195, 0.5)
    background-color #ffffff

  h2
    margin-top 20px

  h1
    margin 0 auto
    padding-top 150px
    width 144px
    height 36px
    font-family SpoqaHanSans
    font-size 22px
    font-weight bold
    color #ffffff
    
  .black_box
    float left
    width 780px
    height 400px
    background-color #2e2a25

  .record_start
    margin-top 100px
    left 50%
    margin-left -102px
    width 204px
    height 57.6px
    border-radius 7.2px
    background-color #ed1d23  

  .connect_status
    display inline-block
    margin-left 20px
    width 360px
    height 400px
    border-radius 6px
    background-color #0a3352

  .connect_status h4
    color white
    margin-top 10px
    margin-left 20px
    
  .card
    margin-top 15px
    margin-left 20px
    width 320px
    height 64px
    border-radius 6px
    background-color #ffffff        
</style>