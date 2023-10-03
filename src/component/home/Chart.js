import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants';
import { LineChart } from "react-native-gifted-charts"


const lineData = [
  { value: 26117.151507594062, dataPointText: "1" },
  { value: 26138.4925731258, dataPointText: "2" },
  { value: 2638.4925731258, dataPointText: "3" },
  { value: 26338.4925731258, dataPointText: "4" },
  { value: 26038.4925731258, dataPointText: "36" },
  { value: 26138.4925731258, dataPointText: "60" },
  { value: 26138.4925731258, dataPointText: "54" },
  { value: 26238.4925731258, dataPointText: "85" },
  { value: 23138.4925731258, dataPointText: "36" },
  { value: 21138.4925731258, dataPointText: "60" },
  { value: 20138.4925731258, dataPointText: "54" },
  { value: 8, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
];

const dataaa=[ {value:24138.4925731258}, {value:26138.4925731258}, {value:25138.4925731258}, {value:22138.4925731258} ]
console.log(dataaa)
const data = [
  26117,
  26138,
  26181,
  26128,
  26059,
  
];


const Chart = ({containerStyles, chartPrices }) => {

  let startUnixTimeStamp = moment().subtract(7, 'day').unix();

  let datas = chartPrices
    ? chartPrices?.map((item, index) => {
        return {
          x: startUnixTimeStamp + (index + 1) * 3600,
          y: item,
        };
      })
    : [];

   

    console.log("HEY MINE  ")
    // console.log("HEY RESPONSE : "+chartPrices)
    // console.log("HEY RESPONSE : "+datas)
    
    // datas.map((abc) => {
    //   console.log("CHART x : "+abc.value +" y : "+abc.dataPointText)
    // })

    // let cd = chartPrices
    // ? chartPrices?.map((item, index) => {
    //     return {
    //       value: item,
    //     };
    //   })
    // : {};

    // console.log("DATA: "+cd)

    // chartPrices.map((abc) => {
    //   console.log("CHART  : "+abc)
    // })


  return (
    <View style={styles.mainContainer}>
      <Text style={{color: 'white'}}>Chart</Text>

      <LineChart
      data={
        dataaa
      }
       
    />
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  mainContainer: {
    
    backgroundColor: COLORS.skyBlue,
    marginTop: heightPercentageToDP(2),
  },
})


// import {StyleSheet, Text, View, Dimensions} from 'react-native';
// import React from 'react';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import {COLORS} from '../../../constants';
// import {
//   ChartDot,
//   ChartPath,
//   ChartPathProvider,
//   monotoneCubicInterpolation,
// } from '@rainbow-me/animated-charts';
// import moment from 'moment';

// export const {width: SIZE} = Dimensions.get('window');

// export const data = [
//   {x: 1453075200, y: 1.47},
//   {x: 1453161600, y: 1.37},
//   {x: 1453248000, y: 1.53},
//   {x: 1453334400, y: 1.54},
//   {x: 1453420800, y: 1.52},
//   {x: 1453507200, y: 2.03},
//   {x: 1453593600, y: 2.1},
//   {x: 1453680000, y: 2.5},
//   {x: 1453766400, y: 2.3},
//   {x: 1453852800, y: 2.42},
//   {x: 1453939200, y: 2.55},
//   {x: 1454025600, y: 2.41},
//   {x: 1454112000, y: 2.43},
//   {x: 1454198400, y: 2.2},
// ];

// const points = monotoneCubicInterpolation({data, range: 40});

// const Chart = ({containerStyles, chartPrices}) => {
  

//   return (
//     <View style={{backgroundColor: 'black'}}>
     
//     </View>
//   );
// };

// export default Chart;

// const styles = StyleSheet.create({
  // mainContainer: {
  //   height: heightPercentageToDP(30),
  //   backgroundColor: COLORS.skyBlue,
  //   marginTop: heightPercentageToDP(2),
  // },
// });

// // <View style={styles.mainContainer}>
// // <View style={{...containerStyles}}>
// //   <Text>Chart</Text>

// //   {/** Chart */}

// //   {data.length > 0 && (
// //     <ChartPathProvider
// //       data={{
// //         points,
// //         smoothingStrategy: 'bezier',
// //       }}>
// //       <ChartPath
// //         height={150}
// //         width={widthPercentageToDP(100)}
// //         stroke={COLORS.red}
// //         strokeWidth={2}
// //       />
// //     </ChartPathProvider>
// //   )}
// // </View>
// // </View>


