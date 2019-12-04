<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Bus Tickets</h3>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>settings</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
      <router-view/>
    </div>
    <md-bottom-bar md-sync-route id="bottom-sheet">
      <md-bottom-bar-item to="/" exact md-label="訂票" md-icon="local_play"></md-bottom-bar-item>
      <md-bottom-bar-item to="/history" md-label="購票紀錄" md-icon="update"></md-bottom-bar-item>
      <md-bottom-bar-item to="/waiting" md-label="候位情況" md-icon="event_seat"></md-bottom-bar-item>
      <md-bottom-bar-item to="/member" md-label="會員中心" md-icon="account_circle"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  padding: 10px;
  flex: 1;
  margin-bottom: 56px;
  overflow: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#bottom-sheet {
  position: fixed;
  bottom: 0;
  z-index: 4;
}
</style>
