<template>
  <div class="ticket">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-100 center">
        <img src="@/assets/qrcode.png" alt="QRCode" id="qrcode">
      </div>
      <div class="md-layout-item md-xsmall-size-100">
        <md-list class="md-double-line">
          <md-subheader>起訖點</md-subheader>
          <md-list-item>
            <md-icon class="md-primary">directions_car</md-icon>

            <div class="md-list-item-text">
              <span>臺北轉運站</span>
              <span>台北市</span>
            </div>
          </md-list-item>

          <md-list-item>
            <md-icon class="md-primary">outlined_flag</md-icon>
            <div class="md-list-item-text">
              <span>台中火車站</span>
              <span>台中市</span>
            </div>
          </md-list-item>

          <md-divider></md-divider>

          <md-subheader>時間&amp;票價</md-subheader>

          <md-list-item>
            <md-icon class="md-primary">schedule</md-icon>

            <div class="md-list-item-text">
              <span>2019-11-20 晚上20:40</span>
              <span>直達車</span>
            </div>
          </md-list-item>

          <md-list-item>
            <md-icon class="md-primary">attach_money</md-icon>
            <div class="md-list-item-text">
              <span>票價: $ 300 (全票)</span>
              <span>Bus Point: 3點</span>
            </div>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data: () => ({
    xx: null
  })
}
</script>
<style lang="scss">
#qrcode {
  height: auto;
  width: 300px;
  margin: 0 auto;
}

.center {
  display: flex;
}
</style>
