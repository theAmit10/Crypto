import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  FlatListComponent,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONT} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Graph from '../component/home/Graph';
import CenterGraph from '../component/home/CenterGraph';
import BottomCard from '../component/home/BottomCard';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CoinItem from '../component/Coinitems';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';
import {connect} from 'react-redux';
import {getHoldings, getCoinMarket} from '../../stores/market/MarketAction';
import {useFocusEffect} from '@react-navigation/native';
import {dummyData} from '../constrants/constrants';
import Chart from '../component/home/Chart';

// flatlist data
const dailyStatus = ['Top Gainers', 'Top Losers'];

const HomeScreen = ({getHoldings, getCoinMarket, myHoldings, coins}) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Hey from EFFECt');
    getCoinMarket();
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getCoinMarket();
  //     // getHoldings(holdings = dummyData)
  //   }, []),
  // );

  const [activeDayStatus, setActiveDayStatus] = useState('Top Gainers');

  function topCryptoCurrencySection() {
    return <View></View>;
  }

  return (
    <SafeAreaView
      style={{backgroundColor: COLORS.purpleDark}}
      className="flex-1">
      {/** Header */}
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.containerHeader}>
        <View style={styles.containerLeft}>
          <Image
            source={require('../../assets/image/logo.png')}
            style={styles.centerImage}
          />
          <Text style={styles.title}>VRK Invest</Text>
        </View>

        <View style={styles.containerRight}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <View style={styles.middleContentTopIcon} className="rounded-full ">
              <Icon
                name="search1"
                size={20}
                color={COLORS.white}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              navigation.navigate('NotificationTab');
            }}>
            <View style={styles.middleContentTopIcon} className="rounded-full ">
              <Icon
                name="bells"
                size={20}
                color={COLORS.white}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <View style={styles.middleContentTopIcon} className="rounded-full ">
              <Icon
                name="setting"
                size={20}
                color={COLORS.white}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/** Main Content */}

      <ScrollView
        style={{flex: 1, marginBottom: 70}}
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        {/** Graph */}

        <View>
          {
            <Chart
              containerStyles={{
                marginTop: heightPercentageToDP(2),
              }}
              chartPrices={coins[0]?.sparkline_in_7d?.price}
            />
          }
        </View>

        {/** CenterGraph  */}

        <ScrollView horizontal={true}>
          <CenterGraph
            image={'wallet'}
            title={'Total Balance'}
            amount={'$8,060.34'}
            itemColor={'red'}
            chartPrices={coins[0]?.sparkline_in_7d?.price}
          />
          <CenterGraph
            image={'barschart'}
            title={'Profit & Loss'}
            amount={'$6,640.34'}
            itemColor={'orange'}
            chartPrices={coins[0]?.sparkline_in_7d?.price}
          />
          <CenterGraph
            image={'gift'}
            title={'Rewards'}
            amount={'$1,050.14'}
            itemColor={'green'}
            chartPrices={coins[0]?.sparkline_in_7d?.price}
          />
        </ScrollView>

        {/** Active Status Gainer OR Looser */}

        <View style={styles.containerTodayStatus}>
          <FlatList
            data={dailyStatus}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.tab(activeDayStatus, item)}
                onPress={() => {
                  setActiveDayStatus(item);
                }}>
                <Text style={styles.tabText(activeDayStatus, item)}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{columnGap: 10}}
            width={widthPercentageToDP(100)}
            horizontal
          />
        </View>

        {/**
      <FlatList
          data={cryptocurrencies}
          renderItem={({item}) => <CoinItem marketCoin={item}/>}
        />
       
      */}

        {/** FOR TOP CRYPTO DATA */}

        {topCryptoCurrencySection()}

        <FlatList
          data={coins}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            marginTop: 10,
            paddingHorizontal: 10,
          }}
          //
          // ListHeaderComponent={
          //   <View style={{marginBottom: 10}}>
          //     <Text
          //       style={{color: 'white', fontFamily: FONT.bold, fontSize: 18}}>
          //       TOP CRYPTOCURRENCIES
          //     </Text>
          //   </View>
          // }
          renderItem={({item}) => {
            let priceColor =
              item.price_change_percentage_7d_in_currency == 0
                ? COLORS.gray
                : item.price_change_percentage_7d_in_currency > 0
                ? COLORS.green
                : COLORS.red;

            return (
              <TouchableOpacity
                style={{
                  height: heightPercentageToDP(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.skyBlue,
                  marginVertical: heightPercentageToDP(1),
                  borderRadius: heightPercentageToDP(1),
                  padding: heightPercentageToDP(1),
                }}
                // on press
              >
                {/** LOGO */}
                <View
                  style={{
                    width: widthPercentageToDP(15),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{backgroundColor: COLORS.purpleDark, padding: 6}}
                    className="rounded-full ">
                    <Image
                      source={{uri: item.image}}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                </View>

                {/** NAME */}

                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: FONT.bold,
                      fontSize: heightPercentageToDP(2),
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: FONT.regular,
                      fontSize: heightPercentageToDP(2),
                    }}>
                    {item.symbol.toUpperCase()}
                  </Text>
                </View>

                {/** FIGURES */}

                <View>
                  <Text
                    style={{
                      textAlign: 'right',

                      color: COLORS.white,
                      fontFamily: FONT.bold,
                    }}>
                    $ {item.current_price}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}>
                    {item.price_change_percentage_7d_in_currency != 0 && (
                      <AntDesign
                        name={
                          item.price_change_percentage_7d_in_currency < 0
                            ? 'caretdown'
                            : 'caretup'
                        }
                        size={12}
                        color={priceColor}
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                    )}

                    <Text
                      style={{
                        marginLeft: 5,
                        color: priceColor,
                        fontFamily: FONT.regular,
                        lineHeight: 15,
                        padding: 2,
                      }}>
                      {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 10}}></View>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// export default HomeScreen

const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    backgroundColor: COLORS.skyBlue,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    lineHeight: 50,
  },
  title: {
    color: 'white',
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
    textAlignVertical: 'center',
    alignItems: 'baseline',
    marginStart: -5,
    margin: 10,
  },
  centerImage: {
    width: 40,
    height: 60,
    resizeMode: 'cover',
  },
  containerLeft: {
    flexDirection: 'row',
  },
  containerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(0.5),
    marginEnd: heightPercentageToDP(1),
  },
  imageContainer: {
    position: 'relative',
  },
  centerImageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 20,
    left: 10,
  },
  containerTodayStatus: {
    backgroundColor: COLORS.skyBlue,

    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  gainer: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    paddingBottom: 5,
    paddingTop: 5,
    paddingStart: 30,
    paddingEnd: 30,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    opacity: 0.8,
  },
  loser: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    paddingBottom: 5,
    paddingTop: 5,
    paddingStart: 30,
    paddingEnd: 30,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    opacity: 0.8,
  },

  tab: (activeJobType, item) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeJobType === item ? 'green' : 'gray',
    width: widthPercentageToDP(40),
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? 'green' : 'gray',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
  }),
  middleContentTopIcon: {
    backgroundColor: COLORS.purple,
    padding: heightPercentageToDP(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page,
        ),
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page,
        ),
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
