<template>
  <div>
    <md-list class="md-double-line">
      <md-subheader>會員資訊</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">person</md-icon>

        <div class="md-list-item-text">
          <span>Victor Shen</span>
          <span></span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>edit</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-icon class="md-primary">wc</md-icon>

        <div class="md-list-item-text">
          <span>男</span>
        </div>

      </md-list-item>

      <md-list-item>
        <md-icon class="md-primary">smartphone</md-icon>

        <div class="md-list-item-text">
          <span>09123456789</span>
          <span>已驗證</span>
        </div>

      </md-list-item>

      <md-list-item>
        <md-icon class="md-primary">email</md-icon>

        <div class="md-list-item-text">
          <span>notification@example.com</span>
          <span>有車票釋出時，會寄信到這</span>
        </div>
      </md-list-item>

      <md-list-item>
        <md-icon class="md-primary">stars</md-icon>

        <div class="md-list-item-text">
          <span>3點</span>
          <span>Bus Point</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>arrow_forward_ios</md-icon>
        </md-button>

      </md-list-item>

      <md-divider></md-divider>
    </md-list>

    <md-list class="md-double-line">
      <md-subheader>信用卡</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">credit_card</md-icon>

        <div class="md-list-item-text">
          <span>4099 **** **** 9120</span>
          <span>03/22</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>done</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-icon class="md-primary">credit_card</md-icon>

        <div class="md-list-item-text">
          <span>4692 **** **** 2980</span>
          <span>12/25</span>
        </div>

      </md-list-item>

    </md-list>
  </div>
</template>
<script>
export default {
  name: 'home',
  data: () => ({
  })
}
</script>
