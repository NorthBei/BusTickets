module.exports = {
  publicPath: '/BusTickets/dist/',
  devServer: {
    // add this config just let me can use ngrok to connect to the dev-server
    disableHostCheck: true
  },
  pwa: {
    name: 'BusTickets',
    themeColor: '#fff'
  }
}
