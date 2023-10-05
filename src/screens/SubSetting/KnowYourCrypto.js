import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import HeaderTop from '../../component/profile/HeaderTop';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Graph from '../../component/home/Graph';

const KnowYourCrypto = () => {
  return (
    <SafeAreaView style={styles.mainCointer}>
      <ScrollView>
        <HeaderTop value={'KnowYourCrypto'} />

        {/** Content Container */}

        <Graph />

        {/** Middle Container */}
        <View style={styles.middleContent}>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>Price</Text>
            <Text style={styles.title} numberOfLines={1}>
              $34,126
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>24h Change</Text>
            <Text style={styles.title} numberOfLines={1}>
              1.11%
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>24h Volume</Text>
            <Text style={styles.title} numberOfLines={1}>
              $64,126
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.subtitle}>Market Cap</Text>
            <Text style={styles.title} numberOfLines={1}>
              $34,126
            </Text>
          </View>
        </View>

        {/** About Coin Container */}

        <View style={styles.aboutCoinContainer}>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONT.bold,
              fontSize: heightPercentageToDP(2.5),
              marginVertical: heightPercentageToDP(1),
            }}>
            About Coin
          </Text>

          <View style={styles.aboutContentTopData}>
            <View style={styles.aboutLeft}>
              <MaterialCommunityIcons
                name="bitcoin"
                size={heightPercentageToDP(4)}
                color="orange"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
            <View style={styles.aboutMiddle}>
              <Text style={styles.aboutMiddleTitle}>Digital Cash</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                1 BTC = 68.58 USD
              </Text>
            </View>
            <View style={styles.aboutRight}>
              <Text style={styles.tradeBtn}>Trade</Text>
            </View>
          </View>

          <Text style={styles.subtitle} className="mt-2 mb-2">
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

        <View style={styles.newsContainer}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text style={styles.newsDescription} className="mt-2 mb-2" numberOfLines={3}>
              It is an altcoin that was forked from the Bitcoin from the Bitcoin
              Protocol. It is also a
              <Text style={styles.showmore}> Show more</Text>
            </Text>
          </View>
        </View>


        <View style={styles.newsContainer}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text style={styles.newsDescription} className="mt-2 mb-2" numberOfLines={3}>
              It is an altcoin that was forked from the Bitcoin from the Bitcoin
              Protocol. It is also a
              <Text style={styles.showmore}> Show more</Text>
            </Text>
          </View>
        </View>

        <View style={styles.newsContainer}>
          <View style={styles.newsLeft}></View>
          <View style={styles.newsRight}>
            <Text style={styles.newsDescription} className="mt-2 mb-2" numberOfLines={3}>
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
    backgroundColor: COLORS.purpleDark,
  },
  middleContent: {
    height: heightPercentageToDP(10),
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'row',
    gap: heightPercentageToDP(2),
  },

  aboutCoinContainer: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    backgroundColor: COLORS.skyBlue,
    borderRadius: heightPercentageToDP(2),
  },
  aboutContentTopData: {
    height: heightPercentageToDP(10),
    flexDirection: 'row',

    borderRadius: heightPercentageToDP(2),
    borderColor: COLORS.purple,
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
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    color: COLORS.gray2,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    opacity: 0.5,
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
    color: COLORS.white,
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
    backgroundColor: COLORS.skyBlue,
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
  newsDescription:{
    color: COLORS.gray2,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  
  }
});
