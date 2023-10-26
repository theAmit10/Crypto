import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];
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
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
];

const PLTopContainer = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
        ...styles.container,
      }}>
      <Image
        source={require('../../../assets/image/bitcoin_image.jpg')}
        style={styles.centerImage}
      />
      <View>
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

      <View style={styles.totalValContainer}>
        <MaterialCommunityIcons name="bitcoin" size={20} color="orange" />
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.totalValText,
          }}>
          0,0035
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.totalValText,
          }}>
          BTC
        </Text>
      </View>

      <View style={styles.containerBottom}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              ...styles.bottomContainerLeft,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.bottomContainerContent,
              }}>
              YESTERDAY’S P&L
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.bottomContainerLoss,
              }}>
              -$5979.68
              <Text style={{fontSize: heightPercentageToDP(1.5)}}> +4.5%</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              ...styles.bottomContainerRight,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.bottomContainerContent,
              }}>
              YESTERDAY’S P&L
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.bottomContainerProfit,
              }}>
              +$465.37{' '}
              <Text style={{fontSize: heightPercentageToDP(1.5)}}> +4.5%</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PLTopContainer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: heightPercentageToDP(25),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: heightPercentageToDP(3),
  },
  totalBal: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    margin: heightPercentageToDP(2),
    alignSelf: 'center',
  },

  totalBalAmount: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(3),
    alignSelf: 'center',
  },
  totalValContainer: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),
    flexDirection: 'row',
    gap: heightPercentageToDP(1),
  },
  totalValText: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),

    textAlignVertical: 'center',
  },
  totalVal: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),
  },

  centerImage: {
    position: 'absolute',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
  },
  containerBottom: {
    flex: 1,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomContainerLeft: {
    flex: 1,
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(100),
    margin: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    alignItems: 'center',
  },
  bottomContainerRight: {
    flex: 1,

    width: widthPercentageToDP(40),
    height: heightPercentageToDP(100),
    margin: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    alignItems: 'center',
  },
  bottomContainerContent: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(1.5),
  },
  bottomContainerLoss: {
    flex: 1,
    color: COLORS.red,
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(1.8),
  },
  bottomContainerProfit: {
    flex: 1,
    color: COLORS.green,
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(1.8),
  },
});
