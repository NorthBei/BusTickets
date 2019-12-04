<template>
  <div>
    <md-subheader>付款資訊</md-subheader>
    <div>
      <ul>
        <li>國光客運</li>
        <li>起訖點：臺北轉運站 ~ 台中車站</li>
        <li>時間：2019-11-20 20:40 (直達車)</li>
        <li>費用：$ 300 (全票)</li>
        <li>座位：15</li>
      </ul>
    </div>
    <md-subheader>選擇付款方式</md-subheader>
    <div class="pay" id="line" @click="pay">
      <img src="@/assets/line.png" class="logo">
      <div class="name">Line Pay</div>
    </div>
    <div class="pay" id="apple" @click="pay">
      <img src="@/assets/apple.png" class="logo">
      <div class="name">Apple Pay</div>
    </div>
    <div class="pay" id="google" @click="pay">
      <img src="@/assets/google.png" class="logo">
      <div class="name">Google Pay</div>
    </div>
    <div class="pay" id="crash" @click="pay">
      <img src="@/assets/card.png" class="logo">
      <div class="name">信用卡</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'payment',
  data: () => ({
  }),
  methods: {
    pay () {
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss" scoped>
.pay {
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  height: 90px;
  font-size: 30px;
  border-radius: 8px;
  border: 2px solid;
  padding: 24px 32px;
  margin-bottom: 16px;

  .logo {
    height: 50px;
  }

  .name {
    flex: 1;
    text-align: center;
  }
}

#line.pay {
  background: #56b94d;
  color: white;
  border-color: #56b94d;
}

#apple.pay {
  background: white;
  color: black;
  border-color: black;
}

#google.pay {
  background: #f1f1f1;
  color: #606368;
  border-color: #606368;
}

#crash.pay {
  background: white;
  color: #4980a9;
  border-color: #4980a9;
}
</style>
