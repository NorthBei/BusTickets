<template>
  <div>
    <md-subheader>2019-11-05</md-subheader>
    <md-card class="card" @click.native="showDialog = true">
      <md-card-area>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">台中火車站 ~ 臺北轉運站</div>
            <div class="md-subhead">國光客運</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-header>
          <md-card-header-text>
            <div class="md-title">20:40</div>
            <div class="md-subhead">直達車</div>
          </md-card-header-text>

          <md-card-header-text>
            <div class="md-title price">$ 300</div>
            <div class="md-subhead">信用卡</div>
          </md-card-header-text>

          <md-card-header-text>
            <div class="md-title price">3點</div>
            <div class="md-subhead">Bus Point</div>
          </md-card-header-text>
        </md-card-header>
      </md-card-area>
    </md-card>
    <div>
      <md-dialog :md-active.sync="showDialog">
        <md-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="showDialog = false">
            <md-icon>arrow_back</md-icon>
          </md-button>
          <h3 class="md-title">車票詳細資訊</h3>
        </md-toolbar>
        <ticket style="overflow:auto;"></ticket>
      </md-dialog>
    </div>
  </div>
</template>
<script>
import Ticket from '@/views/Ticket.vue'

export default {
  name: 'history',
  data: () => ({
    showDialog: false
  }),
  components: {
    Ticket
  }
}
</script>
