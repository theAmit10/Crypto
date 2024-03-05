import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CryptoJS from 'crypto-js';
import axios from 'axios';

const CryptoBuy = () => {

  // Replace these with your actual Binance API keys
  const apiKey = '9jgPKA1LpiwKQwIBlm6OpveDg0f9aFJKzBRSlhTVbLBt97t9Ck1lFvWWNt8lzR9p';
  const apiSecret = 'JVSzS67w3fJ3G4am29QVZjfGKPYYkXubxy1829gSRX8WeDgZ9lWnWEiCpWqSFQjV';

  const symbol = 'BTCUSDT'; // Symbol of the crypto asset you want to buy
  const quantity = 0.01; // Amount of crypto asset to buy
  const orderType = 'MARKET'; // Type of order (MARKET, LIMIT, etc.)

  
  useEffect(() => {
    const timestamp = Date.now();
    const signature = CryptoJS.HmacSHA256(`symbol=${symbol}&side=BUY&type=${orderType}&quantity=${quantity}&timestamp=${timestamp}`, apiSecret).toString(CryptoJS.enc.Hex);

    const config = {
      headers: {
        'X-MBX-APIKEY': apiKey,
      },
      params: {
        symbol,
        side: 'BUY',
        type: orderType,
        quantity,
        timestamp,
        signature,
      },
    };

    axios.post('https://api.binance.com/api/v3/order', null, config)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        // Handle successful order placement
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized - Check API Key and Secret');
        } else {
          console.error('Error placing order:', error.message);
        }
        // Handle error
      });
  }, []);


//   useEffect(() => {
//     const timestamp = Date.now();
//     const signature = CryptoJS.HmacSHA256(`timestamp=${timestamp}`, apiSecret).toString(CryptoJS.enc.Hex);

//     const config = {
//       headers: {
//         'X-MBX-APIKEY': apiKey,
//       },
//       params: {
//         symbol,
//         quantity,
//         timestamp,
//         type: orderType,
//         signature,
//       },
//     };


//      // Make the API request to place a buy order
//      axios.post('https://api.binance.com/api/v3/order', null, config)
//      .then((response) => {
//        console.log('Order placed successfully:', response.data);
//        // Handle successful order placement
//      })
//      .catch((error) => {
//        console.error('Error placing order:', error);
//        // Handle error
//      });
//  }, []);

  return (
    <View>
      <Text>CryptoBuy</Text>
    </View>
  )
}

export default CryptoBuy

const styles = StyleSheet.create({})