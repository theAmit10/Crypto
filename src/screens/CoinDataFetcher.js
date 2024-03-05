// import WebSocket from 'react-native-websocket';

// // const BinanceAPI = require('binance-api-node');
// const BinanceAPI = require('binance-api-node').default

// class CoinDataFetcher {
//   constructor() {
//     this.client = new BinanceAPI();
//     this.socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker');

//     this.socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       // Update your coin data state here
//       console.log("from coindatafetcher")
//     };
//   }

//   start() {
//     this.socket.connect();
//   }

//   stop() {
//     this.socket.close();
//   }
// }

// export default CoinDataFetcher;
