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

import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {LineChart} from 'react-native-gifted-charts';
import {LineChart} from 'react-native-chart-kit';

const lineData = [
  {value: 0, dataPointText: '0'},
  {value: 20, dataPointText: '20'},
  {value: 18, dataPointText: '18'},
  {value: 200, dataPointText: '40'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
  {value: 36, dataPointText: '36'},
  {value: 100, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 8, dataPointText: '85'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
];

// <View style={styles.chart}>
//         <LineChart
//           data={lineData}
//           curved={true}
//           isAnimated={true}
//           // animateTogether
//           pressEnabled={false}
//           showStripOnPress={true}
//           showTextOnPress={true}
//           disableScroll={true}
//           hideDataPoints
//           height={heightPercentageToDP(2)}
//           // showVerticalLines
//           // spacing={44}
//           initialSpacing={0}
//           color1={itemColor}
//           color2="orange"
//           textColor1="green"
//           dataPointsHeight={6}
//           dataPointsWidth={6}
//           dataPointsHeight2={6}
//           dataPointsWidth2={6}
//           dataPointsColor1="blue"
//           dataPointsColor2="red"
//           textShiftY={-2}
//           textShiftX={-2}
//           textFontSize={10}
//           hideRules
//           spacing={4}
//           hideAxesAndRules
//         />
//       </View>

// const CenterGrapha = props => {
//   const {image, title, amount, itemColor, chartPrices} = props;
//   // let realTimeChartData = chartPrices.map(value => value);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.middleContentTopIcon} className="rounded-full ">
//         <Icon
//           name={image}
//           size={25}
//           color={itemColor}
//           style={{alignSelf: 'center', opacity: 0.9}}
//         />
//       </View>

//       <Text style={styles.contentTitle}>{title}</Text>
//       <Text style={styles.totalBalAmount}>{amount}</Text>

//       if (chartPrices && chartPrices.length `&gt;` 0) {
//         <View style={styles.chart}>
//           <LineChart
//             data={{
//               datasets: [
//                 {
//                   data: chartPrices,
//                 },
//               ],
//             }}
//             width={Dimensions.get('window').width}
//             height={heightPercentageToDP(30)}
//             yAxisLabel="$"
//             yAxisSuffix="k"
//             yAxisInterval={1}
//             chartConfig={{
//               backgroundGradientFrom: COLORS.skyBlue,
//               backgroundGradientTo: COLORS.purple,
//               decimalPlaces: 2,

//               color: (opacity = 1) => `rgba(255, 0, 0, 1)`, // Set opacity to 1 (fully opaque)
//               labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`, // Set opacity to 0 (fully transparent)
//               style: {
//                 borderRadius: 2,
//               },
//             }}
//             bezier
//             style={{
//               marginTop: heightPercentageToDP(10),
//               borderRadius: 16,
//             }}
//             withShadow
//             withHorizontalLines={false}
//             withDots={false}
//             withInnerLines={false}
//             withOuterLines={false}
//             withVerticalLabels={false} // Remove vertical labels
//             withHorizontalLabels={false} // Remove horizontal labels
//           />
//         </View>
//       }

//     </SafeAreaView>
//   );
// };

const CenterGraph = props => {
  const {image, title, amount, itemColor, chartPrices} = props;
  if (chartPrices && chartPrices.length > 0) {
    let startUnixTimeStamp = moment().subtract(7, 'day').unix();

    let realTimeChartData = chartPrices.map(value => value);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.middleContentTopIcon} className="rounded-full ">
          <Icon
            name={image}
            size={25}
            color={itemColor}
            style={{alignSelf: 'center', opacity: 0.9}}
          />
        </View>

        <Text style={styles.contentTitle}>{title}</Text>
        <Text style={styles.totalBalAmount}>{amount}</Text>

        <View style={styles.chart}>
          <LineChart
            data={{
              datasets: [
                {
                  data: realTimeChartData,
                },
              ],
            }}
            width={widthPercentageToDP(32)}
            height={heightPercentageToDP(10)}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: COLORS.skyBlue,
              backgroundGradientTo: COLORS.skyBlue,
              decimalPlaces: 1,

              color: (opacity = 1) => `rgba(255, 0, 0, 1)`, // Set opacity to 1 (fully opaque)
              labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`, // Set opacity to 0 (fully transparent)
              barRadius: 10,

              style: {
                borderRadius: 2,
              },
            }}
            bezier
            style={{
              borderRadius: 1,
              alignItems: 'center',
            }}
            withShadow
            withHorizontalLines={false}
            withDots={false}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={false} // Remove vertical labels
            withHorizontalLabels={false} // Remove horizontal labels
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return null;
  }
};

export default CenterGraph;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.skyBlue,
    width: widthPercentageToDP(35),
    height: heightPercentageToDP(25),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: heightPercentageToDP(1),
    borderColor: COLORS.skyBlue,
    borderRadius: heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(2),
    padding: heightPercentageToDP(1),
  },
  contentTitle: {
    color: COLORS.gray,
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(1),
  },
  totalBalAmount: {
    color: 'white',
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
  },
  middleContentTopIcon: {
    backgroundColor: COLORS.purple,
    padding: heightPercentageToDP(1),
    alignSelf: 'flex-start',
  },
  chart: {},
});
