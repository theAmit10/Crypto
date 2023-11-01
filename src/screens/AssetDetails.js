import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HeaderTop from '../component/profile/HeaderTop';
import {fetchCoinMarket} from '../../stores/coinMarketSlice';
import Chart from '../component/home/Chart';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {LineChart} from 'react-native-chart-kit';
import {COLORS, FONT} from '../../constants';

const ChartDetails = ({containerStyles, chartPrices}) => {
  const THEME = useSelector(state => state.theme);
  if (chartPrices && chartPrices.length > 0) {
    let startUnixTimeStamp = moment().subtract(7, 'day').unix();

    let realTimeChartData = chartPrices.map(value => value);

    return (
      <SafeAreaView
        style={{
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.purple,
          ...styles.container,
        }}>
        <Image
          source={require('../../assets/image/bitcoin_image.jpg')}
          style={styles.centerImage}
        />

        
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
                THEME.data === 'DARK' ? COLORS.purple : COLORS.card,
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

const AssetDetails = ({route}) => {
  const {itemId, itemIndex} = route.params;
  // const title = itemId.

  const THEME = useSelector(state => state.theme);

  console.log('DE');

  console.log(itemId);

  const dispatch = useDispatch();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);

  useEffect(() => {
    dispatch(fetchCoinMarket);
    console.log('Hey from EFFECt');
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
        ...styles.container,
      }}>
      <StatusBar
        
        hidden={false}
        backgroundColor={
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray
        }
        barStyle={THEME.data === 'DARK' ? 'light-content' : 'dark-content'}
      />
      <HeaderTop value={itemId.name} />

      <ChartDetails
        containerStyles={{
          marginTop: heightPercentageToDP(2),
        }}
        chartPrices={
          selectedCoin
            ? selectedCoin?.sparkline_in_7d?.price
            : coins[itemIndex]?.sparkline_in_7d?.price
        }></ChartDetails>

      {/** Stats */}

      <View
        style={{
          backgroundColor:
            THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
        }}>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            fontFamily: FONT.bold,
            fontSize: heightPercentageToDP(2.5),
            alignSelf: 'flex-start',
            marginStart: heightPercentageToDP(2),
            marginTop: heightPercentageToDP(2),
          }}>
          Stats
        </Text>

        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            ...styles.statContainer,
          }}>
          {/** content */}
          <View
            style={{
              ...styles.statContainerContent,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}>
              Market Cap
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}
              numberOfLines={1}>
              {itemId.market_cap}
            </Text>
          </View>

          <View
            style={{
              ...styles.statContainerContent,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}>
              Circulating Supply
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}
              numberOfLines={1}>
              {itemId.circulating_supply}
            </Text>
          </View>

          <View
            style={{
              ...styles.statContainerContent,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}>
              Max Supply
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}
              numberOfLines={1}>
              {itemId.max_supply}
            </Text>
          </View>

          <View
            style={{
              ...styles.statContainerContent,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}>
              Current Price
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}
              numberOfLines={1}>
              $ {itemId.current_price}
            </Text>
          </View>

          <View
            style={{
              ...styles.statContainerContent,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}>
              Popularity
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.statContainerContentTitle,
              }}
              numberOfLines={1}>
              #{itemId.market_cap_rank}
            </Text>
          </View>
        </View>

        {/** BUY AND SELL CONTAINER */}
        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            ...styles.bottomContainer,
          }}>
          <Text style={styles.buy}>Buy</Text>
          {/**  <Text style={styles.sell}>Sell</Text> */}
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AssetDetails;

const styles = StyleSheet.create({
  container: {
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
  },

  centerImage: {
    position: 'absolute',
    width: '100%',
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
  statContainer: {
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(95),
    margin: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1),
  },
  statContent: {
    flex: 1,
  },
  statContainerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: heightPercentageToDP(1.5),
  },
  statContainerContentTitle: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
  },
  bottomContainer: {
    height: heightPercentageToDP(15),
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: heightPercentageToDP(2),
    gap: heightPercentageToDP(2),
  },
  buy: {
    backgroundColor: COLORS.green,
    height: heightPercentageToDP(7),
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: FONT.semibold,
    color: COLORS.white,
    borderRadius: heightPercentageToDP(1),
    borderWidth: 2,
    borderColor: COLORS.green,
    fontSize: heightPercentageToDP(2),
  },
  sell: {
    backgroundColor: COLORS.red,
    height: heightPercentageToDP(6),
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    color: COLORS.white,
    borderRadius: heightPercentageToDP(1),
    borderWidth: 2,
    borderColor: COLORS.red,
  },
});
