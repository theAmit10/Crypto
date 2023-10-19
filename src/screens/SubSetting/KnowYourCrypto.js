import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONT} from '../../../constants';
import HeaderTop from '../../component/profile/HeaderTop';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Graph from '../../component/home/Graph';
import {useDispatch, useSelector} from 'react-redux';
import Chart from '../../component/home/Chart';
import {fetchCoinMarket} from '../../../stores/coinMarketSlice';

const KnowYourCrypto = () => {
  const THEME = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);
  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch your holdings and coin market data
    // dispatch(fetchHoldings(/* Pass your parameters here */));
    dispatch(fetchCoinMarket());
    console.log('Hey from EFFECt');
    // coins.map(c => {
    //   // console.log('DATA : ' + c.name);
    // });
  }, []);

  const toggleTheme = () => {
    const newTheme = THEME.data === 'DARK' ? 'LIGHT' : 'DARK';
    dispatch(changeTheme(newTheme));
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
        ...styles.mainCointer,
      }}>
      <ScrollView>
        <HeaderTop value={'KnowYourCrypto'} />

        {/** Content Container */}

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

        {/** Middle Container */}
        <View
          style={{
            ...styles.middleContent,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
                ...styles.subtitle,
                flex: 1,
              }}>
              Price
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}
              numberOfLines={1}>
              $34,126
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
                ...styles.subtitle,
                flex: 1,
              }}>
              24h Change
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}
              numberOfLines={1}>
              1.11%
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
                ...styles.subtitle,
                flex: 1,
              }}>
              24h Volume
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}
              numberOfLines={1}>
              $64,126
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
                ...styles.subtitle,
                flex: 1,
              }}>
              Market Cap
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}
              numberOfLines={1}>
              $34,126
            </Text>
          </View>
        </View>

        {/** About Coin Container */}

        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            ...styles.aboutCoinContainer,
          }}>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              fontFamily: FONT.bold,
              fontSize: heightPercentageToDP(2.5),
              marginVertical: heightPercentageToDP(1),
            }}>
            About Coin
          </Text>

          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              borderColor: THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              ...styles.aboutContentTopData,
            }}>
            <View style={styles.aboutLeft}>
              <MaterialCommunityIcons
                name="bitcoin"
                size={heightPercentageToDP(4)}
                color="orange"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
            <View style={styles.aboutMiddle}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.aboutMiddleTitle,
                }}>
                Digital Cash
              </Text>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}
                numberOfLines={1}>
                1 BTC = 68.58 USD
              </Text>
            </View>
            <View style={styles.aboutRight}>
              <Text style={styles.tradeBtn}>Trade</Text>
            </View>
          </View>

          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.subtitle,
            }}
            className="mt-2 mb-2">
            Dash is an open source cryptocurrency. It is an altcoin that was
            forked from the Bitcoin from the Bitcoin Protocol. It is also a
            decentralized autonomous organization (DAO) run by a subset of its
            user, which are called "masternodes".The currency permits
            transaction that can be untraceable.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.showmore}>Show more</Text>
            <AntDesign
              name="down"
              size={heightPercentageToDP(2)}
              color={COLORS.green}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>
        </View>

        {/** news and events */}

        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONT.bold,
            fontSize: heightPercentageToDP(2.5),
            margin: heightPercentageToDP(2),
          }}>
          News & Events About Bitcoin
        </Text>

        {/** new data */}

        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            borderColor: THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
            ...styles.newsContainer,
          }}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}
              className="mt-2 mb-2"
              numberOfLines={3}>
              It is an altcoin that was forked from the Bitcoin from the Bitcoin
              Protocol. It is also a
              <Text style={styles.showmore}> Show more</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            borderColor: THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
            ...styles.newsContainer,
          }}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}
              className="mt-2 mb-2"
              numberOfLines={3}>
              It is an altcoin that was forked from the Bitcoin from the Bitcoin
              Protocol. It is also a
              <Text style={styles.showmore}> Show more</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
            borderColor: THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
            ...styles.newsContainer,
          }}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}
              className="mt-2 mb-2"
              numberOfLines={3}>
              It is an altcoin that was forked from the Bitcoin from the Bitcoin
              Protocol. It is also a
              <Text style={styles.showmore}> Show more</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KnowYourCrypto;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
  },
  middleContent: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'row',
    gap: heightPercentageToDP(2),
  },

  aboutCoinContainer: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
  },
  aboutContentTopData: {
    height: heightPercentageToDP(10),
    flexDirection: 'row',

    borderRadius: heightPercentageToDP(2),

    borderWidth: 1,
  },
  leftContainer: {
    width: widthPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  tradeBtn: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    backgroundColor: COLORS.green,
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1),
    textAlign: 'center',
  },
  aboutContentTop: {
    height: heightPercentageToDP(8),
    backgroundColor: COLORS.purple,
    borderColor: COLORS.purpleDark,
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  aboutLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutMiddle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  aboutRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutMiddleTitle: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
  },
  showmore: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    margin: heightPercentageToDP(2),
  },
  newsContainer: {
    height: heightPercentageToDP(15),
    margin: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  newsRight: {
    flex: 3,

    borderRadius: heightPercentageToDP(2),
    margin: heightPercentageToDP(2),
  },
  newsLeft: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: heightPercentageToDP(2),
    margin: heightPercentageToDP(2),
  },
  newsDescription: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
});
