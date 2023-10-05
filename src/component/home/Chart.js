import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../constants';
// import {LineChart} from 'react-native-gifted-charts';
import {LineChart} from 'react-native-chart-kit';



const lineData = [
  {value: 26227.05218111046, dataPointText: 1695807867},
  {value: 26138.4925731258, dataPointText: 1695811467},
  {value: 2638.4925731258, dataPointText: 1695815067},
  {value: 26338.4925731258, dataPointText: 1695818667},
  {value: 26038.4925731258, dataPointText: 1695822267},
  {value: 26138.4925731258, dataPointText: 1695822267},
  {value: 26138.4925731258, dataPointText: 1695822267},
  {value: 26238.4925731258, dataPointText: 1695822267},
  {value: 23138.4925731258, dataPointText: 31695822267},
  {value: 21138.4925731258, dataPointText: 1695822267},
  {value: 20138.4925731258, dataPointText: 169522267},
  {value: 2000, dataPointText: 169582267},
  {value: 36000, dataPointText: 169582267},
  {value: 6000, dataPointText: 1695822267},
];

const dataaa = [
  {value: 24138.4925731258},
  {value: 26138.4925731258},
  {value: 25138.4925731258},
  {value: 22138.4925731258},
];
console.log(dataaa);
const data = [26117, 26138, 26181, 26128, 26059];

const dataaaa = data.map(value => ({value: value + 2000.4925731258}));

const Chart = ({containerStyles, chartPrices}) => {
  let startUnixTimeStamp = moment().subtract(7, 'day').unix();

  let datas = chartPrices
    ? chartPrices?.map((item, index) => {
        return {
          x: startUnixTimeStamp + (index + 1) * 3600,
          y: item,
        };
      })
    : [];

  // console.log('HEY MAN BEFORE DATAS : ' + chartPrices.length);
  // const selectedData = chartPrices.slice(0, 40);
  // console.log('HEY MAN AFYER DATAS : ' + selectedData.length);

  let realTimeChartData = chartPrices
    ? chartPrices?.map(value => ({value}))
    : [];

  let realTimeChartDat = chartPrices
    ? chartPrices?.map((index, value) => ({value: value, dataPointText: index}))
    : [];

  

  const lineDatas = chartPrices
    ? chartPrices?.map((value, index) => ({
        x: value, 
        y: index, 
      }))
    : [];



  return (
    <View style={styles.mainContainer}>
      {datas.length > 0 && console.log('abd')}

      <LineChart
        data={{
          
          datasets: [
            {
              data: chartPrices,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: COLORS.skyBlue,
          backgroundGradientTo: COLORS.purple,
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '2',
            strokeWidth: '1',
            stroke: COLORS.skyBlue,
            
            color: 'green'
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withShadow
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.skyBlue,
    marginTop: heightPercentageToDP(2),
  },
});

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
