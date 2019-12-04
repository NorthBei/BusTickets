<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100">
        <md-datepicker v-model="date">
          <label>日期</label>
        </md-datepicker>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100">
        <md-field>
          <label>時間</label>
          <md-input v-model="time"></md-input>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-40">
        <md-field>
          <label for="start">起點</label>
          <md-select v-model="start" name="start" id="start">
            <md-option value="台北市">台北市</md-option>
            <md-option value="新北市">新北市</md-option>
            <md-option value="桃園市">桃園市</md-option>
            <md-option value="新竹市">新竹市</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xsmall-size-60">
        <md-field>
          <label for="startAt">站名</label>
          <md-select v-model="startAt" name="startAt" id="startAt">
            <md-option value="臺北轉運站">臺北轉運站</md-option>
            <md-option value="新北市">新北市</md-option>
            <md-option value="桃園市">桃園市</md-option>
            <md-option value="新竹市">新竹市</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-40">
        <md-field>
          <label for="start">終點</label>
          <md-select v-model="end" name="start" id="start">
            <md-option value="台北市">台北市</md-option>
            <md-option value="新北市">新北市</md-option>
            <md-option value="桃園市">桃園市</md-option>
            <md-option value="新竹市">新竹市</md-option>
            <md-option value="台中市">台中市</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xsmall-size-60">
        <md-field>
          <label for="endAt">站名</label>
          <md-select v-model="endAt" name="endAt" id="endAt">
            <md-option value="臺北轉運站">臺北轉運站</md-option>
            <md-option value="新北市">新北市</md-option>
            <md-option value="桃園市">桃園市</md-option>
            <md-option value="新竹市">新竹市</md-option>
            <md-option value="台中火車站">台中火車站</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter md-alignment-center-right">
      <div class="md-layout-item md-xsmall-size-100 ">
        <md-switch v-model="hasSeat" class="md-primary">只顯示有座位的班次</md-switch>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100">
        <md-button class="md-raised md-primary" id="search-btn" @click="nextView">搜尋</md-button>
      </div>
    </div>
    <md-dialog :md-active.sync="isShowDialog" id="buy-flow">
      <md-app md-waterfall md-mode="fixed" :md-scrollbar="false">
        <md-app-toolbar class="md-primary">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="backView">
              <md-icon>{{icon}}</md-icon>
            </md-button>
            <h3 class="md-title">{{title}}</h3>
          </div>
        </md-app-toolbar>
        <md-app-content>
          <keep-alive>
            <component :is="view" @next="nextView"></component>
          </keep-alive>
        </md-app-content>
      </md-app>
    </md-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import Result from '@/views/Result.vue'
import Seats from '@/views/Seats.vue'
import Payment from '@/views/Payment.vue'
import Ticket from '@/views/Ticket.vue'

const state = ['result', 'seats', 'payment', 'ticket']

export default {
  name: 'search',
  data: () => ({
    start: '台北市',
    startAt: '臺北轉運站',
    date: '2019-11-20',
    time: '20:30',
    end: '台中市',
    endAt: '台中火車站',
    view: 'ticket',
    hasSeat: true,
    isShowDialog: false,
    stateIndex: null
  }),
  methods: {
    nextView () {
      if (!this.isShowDialog) {
        this.isShowDialog = true
        this.stateIndex = -1
      }
      this.stateIndex++
      this.view = state[this.stateIndex]
    },
    backView () {
      if (state[this.stateIndex] === 'ticket') {
        this.isShowDialog = false
        return
      }

      if (this.isShowDialog && this.stateIndex === 0) {
        this.isShowDialog = false
        this.view = ''
      } else {
        this.stateIndex--
        this.view = state[this.stateIndex]
      }
    }
  },
  computed: {
    title () {
      switch (state[this.stateIndex]) {
        case 'result': return '搜尋結果'
        case 'seats': return '選擇座位'
        case 'payment': return '結帳'
        case 'ticket': return '電子票卷'
      }
      return '-'
    },
    icon () {
      return state[this.stateIndex] === 'ticket' ? 'close' : 'arrow_back'
    }
  },
  components: {
    Result,
    Seats,
    Payment,
    Ticket
  }
}
</script>

<style lang="scss" scoped>
#search-btn {
  width: 100%;
  margin: 6px 0;
  height: 40px;
}

#buy-flow {
  overflow: auto;
  background: #fafafa;

  .md-app-content {
    background: #fafafa;
    height: auto;
  }
}
</style>
