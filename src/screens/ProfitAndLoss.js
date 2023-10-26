import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONT} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import Graph from '../component/home/Graph';
import PLTopContainer from '../component/profitAndLoss/PLTopContainer';
import PLMiddleGraph from '../component/profitAndLoss/PLMiddleGraph';
import PLAssetAllocation from '../component/profitAndLoss/PLAssetAllocation';
import {connect, useDispatch, useSelector} from 'react-redux';

import {fetchCoinMarket} from '../../stores/coinMarketSlice';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {LineChart} from 'react-native-chart-kit';

const ProfitAndLossChart = ({containerStyles, chartPrices}) => {
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
          source={require('../../assets/image/bitcoin_image.jpg')}
          style={styles.centerImage}
        />
        {/** TOP CONTAINER */}
        <View style={styles.topContainer}>
          <View style={styles.topContainerLeft}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.topContainerLeftTitle,
              }}>
              Profit & Loss
            </Text>
          </View>
          <View style={styles.topContainerRight}>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  ...styles.bottomContainerContent,
                }}>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  ...styles.bottomContainerContent,
                }}>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
                  ...styles.bottomContainerContent,
                }}>
                1M
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/** chart section */}
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
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
              backgroundGradientTo:
                THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
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
              borderRadius: 4,
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
      </SafeAreaView>
    );
  } else {
    return <View style={styles.container}></View>;
  }
};

const ProfitAndLoss = () => {
  const THEME = useSelector(state => state.theme);

  const [selectedCoin, setSelectedCoin] = useState(null);
  const dispatch = useDispatch();
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);
  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch your holdings and coin market data
    // dispatch(fetchHoldings(/* Pass your parameters here */));
    dispatch(fetchCoinMarket());
    console.log('Hey from EFFECt');

    coins.map(c => {
      console.log('DATA : ' + c.name);
    });
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getCoinMarket();
  //     // getHoldings(holdings = dummyData)
  //   }, [])
  // )

  return (
    <View
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.mainContainerParent,
      }}>
      <ScrollView>
        <HeaderTop value={'Profit & Loss'} />
        {/** Top container */}
        <PLTopContainer />

        {/** Middle container
      <PLMiddleGraph />
      */}
        

        <View>
          {
            <ProfitAndLossChart
              containerStyles={{
                marginTop: heightPercentageToDP(2),
              }}
              chartPrices={
                selectedCoin
                  ? selectedCoin?.sparkline_in_7d?.price
                  : coins[0]?.sparkline_in_7d?.price
              }
            />
          }
        </View>

        {/** Third container */}
        <PLAssetAllocation />
      </ScrollView>
    </View>
  );
};

// export default ProfitAndLoss;

const styles = StyleSheet.create({
  mainContainerParent: {
    flex: 1,
  },

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
  topContainer: {
    height: heightPercentageToDP(5),
    flexDirection: 'row',
  },
  topContainerLeft: {
    flex: 1,
    padding: heightPercentageToDP(1),
  },
  topContainerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topContainerLeftTitle: {
    fontFamily: FONT.extrabold,
    alignSelf: 'flex-start',
    fontSize: heightPercentageToDP(2.5),
  },
});

export default ProfitAndLoss;
