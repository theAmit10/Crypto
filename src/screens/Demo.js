import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {COLORS, FONT} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Demo = () => {
  const [buyPreference, setBuyPreferences] = useState('limit');
  const [buyPrice, setBuyPrice] = useState(null);
  const [receiveAmount, setReceiveAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const setBuyAssetPreference = () => {
    if (buyPreference === 'limit') {
      setBuyPreferences('At Market');
    } else {
      setBuyPreferences('limit');
    }
  };
  const THEME = useSelector(state => state.theme);

  return (
    <View style={{flex: 1, padding: heightPercentageToDP(2)}}>
      {/** for Buy Preferences */}
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={setBuyAssetPreference}
        style={{
          flexDirection: 'row',
          backgroundColor:
            THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
          margin: heightPercentageToDP(2),
          padding: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(2),
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: heightPercentageToDP(2),
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            }}>
            {buyPreference}
          </Text>
        </View>
        <View>
          <AntDesign
            name={'caretdown'}
            size={12}
            color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
          />
        </View>
      </TouchableOpacity>

      {/** for Price  */}

      <View
        style={{
          backgroundColor:
            THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
          margin: heightPercentageToDP(2),

          borderRadius: heightPercentageToDP(2),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: heightPercentageToDP(2),
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            }}>
            Price
          </Text>
        </View>
        <TextInput
          inputMode="decimal"
          cursorColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          onChangeText={setBuyPrice}
          value={buyPrice}
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            width: '95%',
            fontFamily: FONT.regular,
            padding: heightPercentageToDP(1),
            fontSize: heightPercentageToDP(2),
            borderRadius: heightPercentageToDP(1),
            margin: heightPercentageToDP(1),
            textAlign: 'center',
          }}></TextInput>

        <TextInput
          inputMode="decimal"
          placeholder="Amount"
          cursorColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.gray2
          }
          onChangeText={setReceiveAmount}
          value={receiveAmount}
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            width: '95%',
            fontFamily: FONT.regular,
            padding: heightPercentageToDP(1),
            fontSize: heightPercentageToDP(2),

            borderRadius: heightPercentageToDP(1),
            margin: heightPercentageToDP(1),
            textAlign: 'center',
          }}></TextInput>
      </View>

      {/** for Total  */}

      <View
        style={{
          backgroundColor:
            THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
          margin: heightPercentageToDP(2),

          borderRadius: heightPercentageToDP(2),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: heightPercentageToDP(2),
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            }}>
            Total
          </Text>
        </View>
        <TextInput
          inputMode="decimal"
          placeholder="(USDT)"
          cursorColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.gra
          }
          onChangeText={setTotalAmount}
          value={totalAmount}
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            width: '95%',
            fontFamily: FONT.regular,
            padding: heightPercentageToDP(1),
            fontSize: heightPercentageToDP(2),
            borderRadius: heightPercentageToDP(1),
            margin: heightPercentageToDP(1),
            textAlign: 'center',
          }}></TextInput>
      </View>

      {/** for Price Bottom Current Details  */}

      <View
        style={{
          backgroundColor:
            THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
          margin: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(2),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/** Available balance */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            paddingHorizontal: heightPercentageToDP(2),
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray,
              }}>
              Available Balance
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              }}>
              2.01 USDT
            </Text>
          </View>
        </View>

        {/** Max Buy */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            paddingHorizontal: heightPercentageToDP(2),
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray,
              }}>
              Max Buy
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              }}>
              0.008 BTC
            </Text>
          </View>
        </View>

        {/** Estimated Fee */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            paddingHorizontal: heightPercentageToDP(2),
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray,
              }}>
              Est. Fee
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: heightPercentageToDP(2),
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              }}>
              0.002 BTC
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {
//   LineChart,
// } from 'react-native-chart-kit';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import axios from 'axios';
// import {useSelector} from 'react-redux';
// import {COLORS} from '../../constants';
// import {TouchableOpacity} from 'react-native';

// const Demo = () => {
//   const THEME = useSelector(state => state.theme);
//   const [x, setx] = useState(null);
//   const [y, sety] = useState(null);

//   const chartConfig = {
//     backgroundGradientFrom:
//       THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
//     backgroundGradientTo:
//       THEME.data === 'DARK' ? COLORS.purple : COLORS.lightGray,

//     color: (opacity = 1) =>
//       THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false, // optional
//     propsForDots: {
//       r: '2',
//       strokeWidth: '1',
//       stroke: COLORS.skyBlue,
//       color: 'green',
//     },

//     style: {
//       borderRadius: heightPercentageToDP(2),
//     },
//   };

//   const data = {
//     labels: x ? x : ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: y ? y : [20, 45, 28, 80, 99, 43],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//         strokeWidth: 2, // optional
//       },
//     ],
//   };

//   useEffect(() => {
//     getMarketChartData('1m');
//   }, []);

//   // for getting single market details
//   const getMarketChartData = async (timeframe) => {
//     console.log("#################################")
//     console.log('Fetching Single Data ::: From Market :: timeframe');

//     const intervalString = getIntervalString(timeframe);
//     console.log("TIME :: "+intervalString)

//     const apiUrl =
//       `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${intervalString}`;

//     try {
//       const response = await axios.get(apiUrl);
//       console.log('REQUEST STARTED');
//       //   console.log('Response:', response.data);

//       const da = response.data;

//       const xValues = da.map(item => item[0]);
//       const yValues = da.map(item => item[1]);
//       //   setCData(yValues);
//     //   console.log('Response:', xValues);
//       console.log('Response y:', yValues[0]);

//       setx(xValues);
//       sety(yValues);

//       console.log('REQUEST STOPPED');
//     } catch (error) {
//       if (error.response) {
//         console.error('Error:', error.response);
//       } else {
//         console.error('Error:', error.message);
//       }
//     }
//   };

//   function getIntervalString(timeframe) {
//     switch (timeframe) {
//       case '1h':
//         return '1m'; // 1 minute interval for 1 hour chart
//       case '1d':
//         return '1h'; // 1 hour interval for 1 day chart
//       case '1w':
//         return '1w'; // 1 day interval for 1 week chart
//       case '1m':
//         return '1d'; // 1 day interval for 1 month chart
//       case '1y':
//         return '1M'; // 1 month interval for 1 year chart
//       case '5y':
//         return '1M'; // 1 month interval for 5 years chart
//       default:
//         throw new Error('Invalid timeframe');
//     }
//   }

//   const oneDay = () => {
//     console.log('Getting One Day Data :: ');
//     sety(null)
//     getMarketChartData('5y');
//   };

//   const oneWeek = () => {
//     console.log('Getting One Week Data :: ');
//     sety(null)
//     getMarketChartData('1w');
//   };

//   return (
//     <View>
//       <Text>Demo</Text>

//       {y ? (
//         <LineChart
//           data={{
//             datasets: [
//               {
//                 data: y ,
//               },
//             ],
//           }}
//           width={widthPercentageToDP(90)}
//           height={heightPercentageToDP(25)}
//           chartConfig={chartConfig}
//           bezier
//           pointerLabelComponent
//           isAnimated={true}
//           animateTogether
//           pressEnabled={true}
//           withHorizontalLines={false}
//           withVerticalLines={false}
//           showStripOnPress={true}
//           showTextOnPress={true}
//           disableScroll={false}
//           dataPointsHeight={6}
//           dataPointsWidth={6}
//           dataPointsHeight2={6}
//           dataPointsWidth2={6}
//         />
//       ) : (
//         <Text>Searching for Data</Text>
//       )}

//       <TouchableOpacity
//         style={{
//           margin: heightPercentageToDP(2),
//           backgroundColor: 'red',
//         }}
//         onPress={oneDay}>
//         <Text>1 month</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           margin: heightPercentageToDP(2),
//           backgroundColor: 'orange',
//         }}
//         onPress={oneWeek}>
//         <Text>1 week</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Demo;

// const styles = StyleSheet.create({});
