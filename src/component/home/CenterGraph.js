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

import {LineChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

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

const CenterGraph = props => {
  const THEME = useSelector(state => state.theme);
  const {image, title, amount, itemColor, chartPrices, chartColor} = props;

  // console.log('Chart Color : ' + itemColor);
  if (chartPrices && chartPrices.length > 0) {
    let startUnixTimeStamp = moment().subtract(7, 'day').unix();

    let realTimeChartData = chartPrices.map(value => value);

    return (
      <SafeAreaView
        style={{
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          borderColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          ...styles.container,
        }}>
        <LinearGradient
          colors={[
            THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
            THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
          ]}
          className="rounded-full p-2"
          style={styles.middleContentTopIcon}>
          <Icon
            name={image}
            size={25}
            color={chartColor}
            style={{alignSelf: 'center', opacity: 0.9}}
            className="rounded-full"
          />
        </LinearGradient>

        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.contentTitle,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.totalBalAmount,
          }}>
          {amount}
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
            width={widthPercentageToDP(20)}
            height={heightPercentageToDP(10)}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              backgroundGradientTo:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              decimalPlaces: 1,

              color: (opacity = 1) => itemColor,
              labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
              barRadius: 10,

              style: {
                borderRadius: 2,
              },
            }}
            bezier
            style={{
              borderRadius: 1,
              alignItems: 'center',
              paddingRight: 0,
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
    return <View style={styles.container}></View>;
  }
};

export default CenterGraph;

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(35),
   
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2)
    
  },
  contentTitle: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(1),
  },
  totalBalAmount: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
  },
  middleContentTopIcon: {
    padding: heightPercentageToDP(1),
    alignSelf: 'flex-start',
  },
  chart: {},
});
