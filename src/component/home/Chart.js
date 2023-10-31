import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {LineChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';

const Chart = ({containerStyles, chartPrices}) => {
  const THEME = useSelector(state => state.theme);
  if (chartPrices && chartPrices.length > 0) {
    let startUnixTimeStamp = moment().subtract(7, 'day').unix();
    let realTimeChartData = chartPrices.map(value => value);

    return (
      <SafeAreaView
        style={{
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          ...styles.container,
        }}>
        <Image
          source={require('../../../assets/image/bitcoin_image.jpg')}
          style={styles.centerImage}
        />
        <View style={styles.containerTop}>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.totalBal,
            }}>
            Total Balance
          </Text>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.totalBalAmount,
            }}>
            $20,360.34
          </Text>
        </View>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
            ...styles.totalVal,
          }}>
          BTC: 0,0035
          <Text className="text-green-500">+5.64%</Text>
        </Text>

        <View style={styles.chart}>
          <LineChart
            data={{
              datasets: [
                {
                  data: realTimeChartData,
                },
              ],
            }}
            width={Dimensions.get('window').width}
            height={heightPercentageToDP(30)}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              backgroundGradientTo:
                THEME.data === 'DARK' ? COLORS.purple : COLORS.lightGray,
              decimalPlaces: 2,

              color: (opacity = 1) => `rgba(255, 0, 0, 1)`, // Set opacity to 1 (fully opaque)
              labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`, // Set opacity to 0 (fully transparent)
              style: {
                borderRadius: 2,
              },
            }}
            bezier
            style={{
              marginTop: heightPercentageToDP(10),
              borderRadius: 16,
              paddingRight: 0,
            }}
            withShadow
            withHorizontalLines={false}
            withDots={false}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={false} // Remove vertical labels
            withHorizontalLabels={false} // Remove horizontal labels
            withVerticalLines={false}
          />
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              1H
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              1D
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              1W
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              1M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              1Y
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightGray,
                ...styles.bottomContainerContent,
              }}>
              All
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return <View style={styles.container}></View>;
  }
};

export default Chart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: heightPercentageToDP(2),
  },

  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: heightPercentageToDP(40),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: heightPercentageToDP(3),
  },
  totalBal: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    margin: 10,
    marginTop: 10,
  },
  totalBalAmount: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(3),
  },
  totalVal: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),
    paddingStart: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingStart: 20,
    paddingEnd: 20,

    borderWidth: 2,

    borderRadius: 20,
  },

  centerImage: {
    position: 'absolute',
    left: -40,
    width: '50%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
  },
  containerBottom: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: heightPercentageToDP(1),
    justifyContent: 'space-evenly',
    gap: heightPercentageToDP(1),
  },
  bottomContainerContent: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(1.6),
    paddingBottom: heightPercentageToDP(0.5),
    paddingTop: heightPercentageToDP(0.5),
    paddingHorizontal: heightPercentageToDP(2),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
  },
  chart: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
  },
  chartIndicatorStatus: {
    position: 'absolute',
    width: widthPercentageToDP(30),
    color: COLORS.purpleDark,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    zIndex: 99,

    paddingBottom: 10,
    paddingTop: 10,
    paddingStart: 20,

    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.skyBlue,
    borderRadius: 20,
  },
});

// import React from 'react';
// import moment from 'moment';
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP
// } from 'react-native-responsive-screen';
// import { COLORS } from '../../../constants';
// import { LineChart } from 'react-native-chart-kit';

// const Chart = ({ containerStyles, chartPrices }) => {
//   if (chartPrices && chartPrices.length > 0) {
//     let startUnixTimeStamp = moment().subtract(7, 'day').unix();

//     let realTimeChartData = chartPrices.map(value => value);

//     return (
//       <View style={styles.mainContainer}>
//         <LineChart
//           data={{
//             datasets: [
//               {
//                 data: realTimeChartData,
//               },
//             ],
//           }}
//           width={Dimensions.get('window').width}

//           height={220}
//           yAxisLabel="$"
//           yAxisSuffix="k"
//           yAxisInterval={1}
//           chartConfig={{
//             backgroundColor: '#e26a00',
//             backgroundGradientFrom: COLORS.skyBlue,
//             backgroundGradientTo: COLORS.purple,
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: '2',
//               strokeWidth: '1',
//               stroke: COLORS.skyBlue,
//               color: 'green',
//             },
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//           withShadow
// withHorizontalLines={false}
// withDots={false}
// withInnerLines={false}
// withOuterLines={false}
// withVerticalLabels={false} // Remove vertical labels
// withHorizontalLabels={false} // Remove horizontal labels

//         />
//       </View>
//     );
//   } else {
//     return null; // Render nothing if chartPrices is undefined or empty
//   }
// };

// export default Chart;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: COLORS.skyBlue,
//     marginTop: heightPercentageToDP(2),
//   },
// });

// import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import moment from 'moment';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import {COLORS} from '../../../constants';
// // import {LineChart} from 'react-native-gifted-charts';
// import {LineChart} from 'react-native-chart-kit';

// const data = [26117, 26138, 26181, 26128, 26059];

// // const dataaaa = data.map(value => ({value: value + 2000.4925731258}));

// const Chart = ({containerStyles, chartPrices}) => {
//   let startUnixTimeStamp = moment().subtract(7, 'day').unix();

//   let datas = chartPrices
//     ? chartPrices?.map((item, index) => {
//         return {
//           x: startUnixTimeStamp + (index + 1) * 3600,
//           y: item,
//         };
//       })
//     : [];

//   // console.log('HEY MAN BEFORE DATAS : ' + chartPrices.length);
//   // const selectedData = chartPrices.slice(0, 40);
//   // console.log('HEY MAN AFYER DATAS : ' + selectedData.length);
//   // console.log('HEY MAN AFYER DATAS : ' + selectedData);

//   let realTimeChartData = chartPrices
//     ? chartPrices?.map(value => (value))
//     : '';

//     console.log('HEY chart : ' + chartPrices);
//     console.log('HEY Real : ' + realTimeChartData);

//   return (
//     <View style={styles.mainContainer}>
//       <LineChart
//         data={{
//           datasets: [
//             {
//               data: realTimeChartData,
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width}
//         height={220}
//         yAxisLabel="$"
//         yAxisSuffix="k"
//         yAxisInterval={1} // optional, defaults to 1
//         chartConfig={{
//           backgroundColor: '#e26a00',
//           backgroundGradientFrom: COLORS.skyBlue,
//           backgroundGradientTo: COLORS.purple,

//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: '2',
//             strokeWidth: '1',
//             stroke: COLORS.skyBlue,

//             color: 'green',
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//         withShadow
//       />
//     </View>
//   );
// };

// export default Chart;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: COLORS.skyBlue,
//     marginTop: heightPercentageToDP(2),
//   },
// });

// <LineChart

// backgroundColor={COLORS.green}
// data={lineData}
// curved={true}
// isAnimated={true}
// animateTogether
// pressEnabled={true}
// showStripOnPress={true}
// showTextOnPress={true}
// disableScroll={true}
// pointerConfig={{
//   radius: 5,

//   // pointerStripHeight:120,
//   pointerLabelComponent: () => {
//     return (
//       <View
//         style={{position: 'relative', width: widthPercentageToDP(40)}}>
//         <Text style={{color: COLORS.white}}>$15,360.34</Text>
//       </View>
//     );
//   },
// }}
// // data2={lineData2}
// hideDataPoints
// // showVerticalLines

// initialSpacing={0}
// color1="red"
// color2="orange"
// textColor1="green"
// dataPointsHeight={6}
// dataPointsWidth={6}
// dataPointsHeight2={6}
// dataPointsWidth2={6}
// dataPointsColor1="blue"
// dataPointsColor2="red"
// textShiftY={-2}
// textShiftX={-2}
// textFontSize={10}
// hideRules
// spacing={1}
// hideAxesAndRules
// />
// let realTimeChartDat = chartPrices
//   ? chartPrices?.map((index, value) => ({value: value, dataPointText: index}))
//   : [];

// const lineDatas = chartPrices
//   ? chartPrices?.map((value, index) => ({
//       x: value,
//       y: index,
//     }))
//   : [];

// const lineData = [
//   {value: 26227.05218111046, dataPointText: 1695807867},
//   {value: 26138.4925731258, dataPointText: 1695811467},
//   {value: 2638.4925731258, dataPointText: 1695815067},
//   {value: 26338.4925731258, dataPointText: 1695818667},
//   {value: 26038.4925731258, dataPointText: 1695822267},
//   {value: 26138.4925731258, dataPointText: 1695822267},
//   {value: 26138.4925731258, dataPointText: 1695822267},
//   {value: 26238.4925731258, dataPointText: 1695822267},
//   {value: 23138.4925731258, dataPointText: 31695822267},
//   {value: 21138.4925731258, dataPointText: 1695822267},
//   {value: 20138.4925731258, dataPointText: 169522267},
//   {value: 2000, dataPointText: 169582267},
//   {value: 36000, dataPointText: 169582267},
//   {value: 6000, dataPointText: 1695822267},
// ];

// const dataaa = [
//   {value: 24138.4925731258},
//   {value: 26138.4925731258},
//   {value: 25138.4925731258},
//   {value: 22138.4925731258},
// ];
// console.log(dataaa);
