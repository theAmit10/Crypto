import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONT} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import CenterGraph from '../component/home/CenterGraph';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CoinItem from '../component/Coinitems';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';
import {connect, useDispatch, useSelector} from 'react-redux';
// import {getHoldings, getCoinMarket} from '../../stores/market/MarketAction';
import {useFocusEffect} from '@react-navigation/native';
import {dummyData} from '../constrants/constrants';
import Chart from '../component/home/Chart';

import {fetchCoinMarket} from '../../stores/coinMarketSlice';
import {fetchHoldings} from '../../stores/holdingsSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeTheme} from '../../stores/ThemeSlice';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';
import Market from './Market';
import AssetDetails from './AssetDetails';
import {fetchwalletMarket} from '../../stores/walletDataSlice';

// flatlist data
const dailyStatus = ['Top Gainers', 'Top Losers'];

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedCoin, setSelectedCoin] = useState(null);

  const THEME = useSelector(state => state.theme);
  console.log('THEMEAAA : ' + THEME.currentTheme);

  const dispatch = useDispatch();
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);
  // const wallets = useSelector(state => state.walletMarket.wallets);
  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch your holdings and coin market data
    // dispatch(fetchHoldings(/* Pass your parameters here */));
    dispatch(fetchCoinMarket());
    // dispatch(fetchwalletMarket())
    console.log('Hey from EFFECt');

    // coins.map(c => {
    //   // console.log('DATA : ' + c.name);
    // });
  }, []);

  // console.log("COOL WALLET :  "+wallets)

  const toggleTheme = () => {
    const newTheme = THEME.data === 'DARK' ? 'LIGHT' : 'DARK';
    dispatch(changeTheme(newTheme));
  };

  // storing data
  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  // getting data
  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('user'));
      console.log('ASYNC : ' + userData);
    } catch (error) {
      console.log(error);
    }
  };

  storeUser(THEME.data);
  getUser();

  // useEffect(() => {
  //   console.log('Hey from EFFECt');
  //   getCoinMarket();
  // }, []);

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
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
      }}
      className="flex-1">
      {/** Header */}

      <View
        style={{
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          ...styles.containerHeader,
        }}>
        <View style={styles.containerLeft}>
          <Image
            source={require('../../assets/image/logo.png')}
            style={styles.centerImage}
            tintColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
          />
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.title,
            }}>
            VRK Invest
          </Text>
        </View>

        {/** CONTAINER RIGHT */}

        <View style={styles.containerRight}>
          <TouchableOpacity
            style={styles.imageContainer}
            className="rounded-full"
            onPress={() => navigation.navigate('TradeListing')}>
            <LinearGradient
              colors={[
                THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
              ]}
              className="rounded-full p-2"
              style={styles.middleContentTopIcon}>
              <Icon
                name="search1"
                size={20}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageContainer}
            className="rounded-full"
            onPress={() => navigation.navigate('NotificationTab')}>
            <LinearGradient
              colors={[
                THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
              ]}
              className="rounded-full p-2"
              style={styles.middleContentTopIcon}>
              <Icon
                name="bells"
                size={20}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageContainer}
            className="rounded-full"
            onPress={() => navigation.navigate('Setting')}>
            <LinearGradient
              colors={[
                THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
              ]}
              className="rounded-full p-2"
              style={styles.middleContentTopIcon}>
              <Icon
                name="setting"
                size={20}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/** Main Content */}

      {/** FOR TOP CRYPTO DATA */}

      {topCryptoCurrencySection()}

      <FlatList
        data={coins}
        keyExtractor={item => item.id}
        contentContainerStyle={{}}
        ListHeaderComponent={
          <View>
            {/**Top Chart Coponent */}
            <View>
              {
                <Chart
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

            {/**Middle Chart Coponent */}

            <ScrollView horizontal={true}>
              <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                <CenterGraph
                  image={'wallet'}
                  title={'Total Balance'}
                  amount={'$8,060.34'}
                  itemColor={'red'}
                  chartColor={'rgba(255, 0, 0, 1)'}
                  chartPrices={coins[0]?.sparkline_in_7d?.price}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ProfitAndLoss')}>
                <CenterGraph
                  image={'barschart'}
                  title={'Profit & Loss'}
                  amount={'$6,640.34'}
                  itemColor={'orange'}
                  chartColor={'rgba(255, 165, 0, 1)'}
                  chartPrices={coins[0]?.sparkline_in_7d?.price}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
                <CenterGraph
                  image={'gift'}
                  title={'Rewards'}
                  amount={'$1,050.14'}
                  itemColor={'rgba(0, 255, 0, 1)'}
                  chartColor={'rgba(0,255, 0, 1)'}
                  chartPrices={coins[0]?.sparkline_in_7d?.price}
                />
              </TouchableOpacity>
            </ScrollView>

            {/** Active Status Gainer OR Looser */}

            <View
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                borderColor:
                  THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
                ...styles.containerTodayStatus,
              }}>
              <FlatList
                data={dailyStatus}
                keyExtractor={item => item}
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
                contentContainerStyle={{columnGap: 10}}
                
                horizontal
              />
            </View>
          </View>
        }
        renderItem={({item, index}) => {
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
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                marginVertical: heightPercentageToDP(1),
                borderRadius: heightPercentageToDP(1),
                padding: heightPercentageToDP(1),
                marginHorizontal: heightPercentageToDP(1),
              }}
              // on press
              // onPress={() => setSelectedCoin(item)}
              onPress={() => {
                console.log(item.id);
                navigation.navigate('AssetDetails', {
                  itemId: item,
                  itemIndex: index,
                });
              }}>
              {/** LOGO */}
              <View
                style={{
                  width: widthPercentageToDP(15),
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
                    padding: heightPercentageToDP(1),
                  }}
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
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.bold,
                    fontSize: heightPercentageToDP(2),
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
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
                    fontSize: heightPercentageToDP(2),
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.medium,
                  }}>
                  $ {item.current_price.toFixed(2)}
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
                      size={heightPercentageToDP(1.5)}
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
                      fontSize: heightPercentageToDP(1.5),
                      textAlignVertical: 'center',
                      textAlign: 'center',
                    }}>
                    {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 10, paddingBottom: heightPercentageToDP(10)}}></View>}
      />
    </SafeAreaView>
  );
};

// export default HomeScreen

const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    lineHeight: 50,
  },
  title: {
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
    
    marginTop: heightPercentageToDP(1),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    padding: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
    

    
    
    
  },

  tab: (activeJobType, item) => ({
    
    paddingVertical: heightPercentageToDP(2) / 2,
    paddingHorizontal: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    width: widthPercentageToDP(40),
    borderWidth: 1,
    borderColor: activeJobType === item ? 'green' : 'gray',
   
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? 'green' : 'gray',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
  }),
  middleContentTopIcon: {
    padding: heightPercentageToDP(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
