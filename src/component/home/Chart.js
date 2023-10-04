import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../constants';
import {LineChart} from 'react-native-gifted-charts';

const lineDataOrg = [
  {value: 26227.05218111046, dataPointText: '1695807867'},
  {value: 26138.4925731258, dataPointText: '1695811467'},
  {value: 2638.4925731258, dataPointText: '1695815067'},
  {value: 26338.4925731258, dataPointText: '1695818667'},
  {value: 26038.4925731258, dataPointText: '1695822267'},
  {value: 26138.4925731258, dataPointText: '60'},
  {value: 26138.4925731258, dataPointText: '54'},
  {value: 26238.4925731258, dataPointText: '85'},
  {value: 23138.4925731258, dataPointText: '36'},
  {value: 21138.4925731258, dataPointText: '60'},
  {value: 20138.4925731258, dataPointText: '54'},
  {value: 2000, dataPointText: '85'},
  {value: 36000, dataPointText: '36'},
  {value: 6000, dataPointText: '60'},
];

const lineData = [
  {value: 26227.05218111046, dataPointText: 1695807867},
  {value: 26138.4925731258, dataPointText: 1695811467},
  {value: 2638.4925731258, dataPointText: 1695815067},
  {value: 26338.4925731258, dataPointText: 1695818667},
  {value: 26038.4925731258, dataPointText: 1695822267},
  {value: 26138.4925731258, dataPointText: 60},
  {value: 26138.4925731258, dataPointText: 54},
  {value: 26238.4925731258, dataPointText: 85},
  {value: 23138.4925731258, dataPointText: 36},
  {value: 21138.4925731258, dataPointText: 60},
  {value: 20138.4925731258, dataPointText: 54},
  {value: 2000, dataPointText: 85},
  {value: 36000, dataPointText: 36},
  {value: 6000, dataPointText: 60},
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



  let realTimeChartData = chartPrices ? chartPrices ?.map((value => ({value: value}))) : [];

  let realTimeChartDat = chartPrices ? chartPrices ?.map(((index, value) => ({value: value,dataPointText:index }))) : []

  // console.log('DATA: ' + chartPrices);

  // const data = [
  //   // Your data points here
  //   // Example:
  //   26227.05218111046,
  //   26243.852966398415,
  //   // ...
  // ];

  datas.map((val) =>{
    console.log("ABCD : "+val.x +" | " +val.y)
  })
  
 
    const lineDatas =  chartPrices ? chartPrices ?.map((value, index) => ({
      x: value, // Assuming x-axis values are the indices of your data
      y: index, // Your data values on the y-axis
    })) : [];

    // console.log("LINE DATA : "+lineDatas);

  return (
    <View style={styles.mainContainer}>

      <LineChart
      height={heightPercentageToDP(50)}
      
        data={lineData}
        xKey="x" // Key for x-axis values
        yKey="y" // Key for y-axis values
        showPoints // Show data points on the line chart
        color="blue" // Line color
        lineWidth={2} // Line width
        backgroundColor={COLORS.green}
      />
      <LineChart
      
        backgroundColor={COLORS.green}
        data={lineData}
        curved={true}
        isAnimated={true}
        animateTogether
        pressEnabled={true}
        showStripOnPress={true}
        showTextOnPress={true}
        disableScroll={true}
        pointerConfig={{
          radius: 5,

          // pointerStripHeight:120,
          pointerLabelComponent: () => {
            return (
              <View
                style={{position: 'relative', width: widthPercentageToDP(40)}}>
                <Text style={{color: COLORS.white}}>$15,360.34</Text>
              </View>
            );
          },
        }}
        // data2={lineData2}
        hideDataPoints
        // showVerticalLines

        initialSpacing={0}
        color1="red"
        color2="orange"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsHeight2={6}
        dataPointsWidth2={6}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-2}
        textFontSize={10}
        hideRules
        spacing={1}
        hideAxesAndRules
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
