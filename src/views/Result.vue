<template>
  <div>
    <h3 style="margin:5px 0px;">2019-11-20 20:30 臺北轉運站 ~ 台中火車站</h3>
    <p style="margin: 5px 0;">此旅程可累積Bus Point 3點</p>
    <p style="margin: 5px 0;">預估車程</p>
    <ul>
      <li>直達車：2.5小時~3小時</li>
      <li>非直達：3小時~3小時20分鐘</li>
    </ul>
    <!-- <h3 style="text-align:center;">臺北轉運站 ~ 台中火車站</h3> -->
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100">
        <md-card class="card">
          <md-card-area>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">20:40</div>
                <div class="md-subhead">國光客運</div>
              </md-card-header-text>

              <md-card-header-text>
                <div class="md-title price">$ 300</div>
                <div class="md-subhead">剩下16個空位</div>
              </md-card-header-text>
            </md-card-header>
            <md-card-content class="content">
              <div>直達車</div>
            </md-card-content>
          </md-card-area>
          <md-card-actions class="action-separator">
            <div>
              <md-button class="md-icon-button">
                <md-icon>wifi</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>battery_charging_full</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>wc</md-icon>
              </md-button>
            </div>
            <md-button class="md-primary" @click="showDialog = true">購買</md-button>
          </md-card-actions>
        </md-card>
      </div>

      <div class="md-layout-item md-xsmall-size-100">
        <md-card class="card noticket">
          <md-card-area>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title time">21:00</div>
                <div class="md-subhead">國光客運</div>
              </md-card-header-text>

              <md-card-header-text>
                <div class="md-title price">$ 300</div>
                <div class="md-subhead">已售完</div>
              </md-card-header-text>
            </md-card-header>
            <md-card-content>
              <div>直達車</div>
              <div style="color:#f3705a;">目前3人候位中</div>
              <div class="tickesnote">
                <md-switch v-model="notify" class="md-primary switch">有車票時通知我</md-switch>
              </div>
            </md-card-content>
          </md-card-area>
          <md-card-actions class="action-separator">
            <div>
              <md-button class="md-icon-button">
                <md-icon>wifi</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>battery_charging_full</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>wc</md-icon>
              </md-button>
            </div>
            <md-button class="md-primary" @click="showSnackbar = true">補位</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100">
        <md-card class="card">
          <md-card-area>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">21:20</div>
                <div class="md-subhead">國光客運</div>
              </md-card-header-text>

              <md-card-header-text>
                <div class="md-title price">$ 300</div>
                <div class="md-subhead">剩下10個空位</div>
              </md-card-header-text>
            </md-card-header>
            <md-card-content class="content">
              <div>直達車</div>
            </md-card-content>
          </md-card-area>
          <md-card-actions class="action-separator">
            <div>
              <md-button class="md-icon-button">
                <md-icon>wifi</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>battery_charging_full</md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon>wc</md-icon>
              </md-button>
            </div>
            <md-button class="md-primary" @click="showDialog = true">購買</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog" :md-fullscreen="false" :md-backdrop="true">
      <md-dialog-title>選擇票種與張數</md-dialog-title>
      <md-dialog-content>
        <div class="md-layout md-gutter md-alignment-center-center">
          <div class="md-layout-item md-xsmall-size-20">全票</div>
          <div class="md-layout-item md-xsmall-size-40">$ 300</div>
          <div class="md-layout-item md-xsmall-size-30 overflow-hidden">
            <md-field>
              <label>張數</label>
              <md-input v-model="count1"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center-center">
          <div class="md-layout-item md-xsmall-size-20">半票</div>
          <div class="md-layout-item md-xsmall-size-40">$ 160</div>
          <div class="md-layout-item md-xsmall-size-30 overflow-hidden">
            <md-field>
              <label>張數</label>
              <md-input v-model="count2"></md-input>
            </md-field>
          </div>
        </div>
        ※ 軍警票、敬老票、學生票，請洽實體櫃台購買，並出示證件
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">取消</md-button>
        <md-button class="md-primary" @click="checkout">確定</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-snackbar md-position="center" :md-active.sync="showSnackbar" :md-duration="5000" md-persistent>
      <span>再等1小時，車票就便宜100塊<br>而且還有2倍點數喔！</span>
      <md-button class="md-primary" @click="showSnackbar = false">立即搶票</md-button>
    </md-snackbar>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: () => ({
    notify: false,
    showDialog: false,
    showSnackbar: false,
    count1: 1,
    count2: 0
  }),
  methods: {
    checkout () {
      this.showDialog = false
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin: 0 0 16px !important;

  &.noticket .time {
    text-decoration:line-through;
  }
  .md-card-actions.action-separator {
    justify-content: space-between;
  }
}
.tickesnote {
  display: flex;
  align-items: center;
  .switch {
    margin: 0;
    margin-right: 12px;
    margin-top: 8px;
  }
}

.overflow-hidden {
  overflow: hidden;
}
</style>
