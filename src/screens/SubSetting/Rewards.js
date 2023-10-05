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
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Rewards = () => {
  return (
    <SafeAreaView style={styles.mainCointer}>
      <HeaderTop value={'Rewards'} />
      <ScrollView>
        {/** Content Container */}
        <View style={styles.contentParentConatainer}>
          <Text style={styles.title}>
            Share your referral link and earn ccrypto when others trade
          </Text>
          <Text style={styles.subtitle}>Referral ID</Text>

          <View style={styles.referralContainer}>
            <Text style={styles.subtitle}>ANSWBOWHSJ</Text>
            <Feather
              name="copy"
              size={heightPercentageToDP(3)}
              color={COLORS.green}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          <Text style={styles.subtitle}>Referral Link</Text>
          <View style={styles.referralContainer}>
            <Text style={styles.subtitle}>ADNKNANKDNKNGANNACKNV</Text>
            <Feather
              name="copy"
              size={heightPercentageToDP(3)}
              color={COLORS.green}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          {/** social media container */}
          <View style={styles.socialMediaContainer}>
            <View
              style={{backgroundColor: COLORS.purple}}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="facebook"
                size={heightPercentageToDP(3)}
                color="white"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{backgroundColor: COLORS.purple}}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="whatsapp"
                size={heightPercentageToDP(3)}
                color="white"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{backgroundColor: COLORS.purple}}
              className="rounded-md blur-lg p-2">
              <FontAwesome5
                name="instagram"
                size={heightPercentageToDP(3)}
                color="white"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{backgroundColor: COLORS.purple}}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="twitter"
                size={heightPercentageToDP(3)}
                color="white"
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </View>
        </View>

        {/** middle component */}

        {/** middle left */}

        <View style={styles.middleComponent}>
          <View style={styles.middleLeft}>
            <View
              style={{
                backgroundColor: COLORS.green,
                width: widthPercentageToDP(10),
                opacity: 0.5,
              }}
              className="rounded-md blur-sm p-2">
              <FontAwesome6
                name="people-line"
                size={heightPercentageToDP(2)}
                color="white"
                style={{alignSelf: 'center', opacity: 1}}
              />
            </View>
            <Text style={styles.title}>Your Community</Text>
            <Text style={styles.referCount} numberOfLines={1}>
              99
            </Text>
            <Text style={styles.referText}>Referrals</Text>
          </View>

          {/** middle right */}
          <View style={styles.middleRight}>
            <View
              style={{
                backgroundColor: COLORS.green,
                width: widthPercentageToDP(10),
                opacity: 0.5,
              }}
              className="rounded-md blur-sm p-2">
              <FontAwesome6
                name="indian-rupee-sign"
                size={heightPercentageToDP(2)}
                color="white"
                style={{alignSelf: 'center', opacity: 1}}
              />
            </View>
            <Text style={styles.title}>Lifetime Rewards</Text>
            <Text style={styles.referCount} numberOfLines={1}>
              78.89
            </Text>
            <Text style={styles.referText}>0.892 BTC</Text>
          </View>

          {/** Bottom Section */}
        </View>

        <Text style={styles.BottomTitle}>
          Track your income with our unique two-tier referral system;
        </Text>

        <Text style={styles.BottomSubTitle}>
          Crypto Money shares 20% of its trading fee profits from your direct
          and indirect referrals
        </Text>

        {/** Referral percentage bottom */}

        <View style={styles.referralBottom}>
          <View style={styles.topReferralContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title}>#</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title}>Rewards Split</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title}>Referrals</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(3),
              }}>
              <Text style={styles.title}>Amount Earned</Text>
            </View>
          </View>

          {/** Referral Data one */}

          <View style={styles.topReferralContainerData}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>#1</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>8%</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>3</Text>
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>(0.01 BTC)</Text>
            </View>
          </View>

          {/** Referral Data Two */}

          <View style={styles.topReferralContainerData}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>#2</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>6%</Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>13</Text>
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>(0.03 BTC)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
    backgroundColor: COLORS.purpleDark,
  },
  contentParentConatainer: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    backgroundColor: COLORS.skyBlue,
    borderRadius: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
  },

  title: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  referralContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: heightPercentageToDP(1.5),
    borderColor: COLORS.purpleDark,
    borderRadius: heightPercentageToDP(2),
  },
  socialMediaContainer: {
    height: heightPercentageToDP(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  middleComponent: {
    margin: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
    flexDirection: 'row',
  },
  middleLeft: {
    flex: 1,
    backgroundColor: COLORS.skyBlue,
    margin: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    gap: 5,
  },
  middleRight: {
    flex: 1,
    backgroundColor: COLORS.skyBlue,
    margin: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    gap: 5,
  },
  referCount: {
    color: COLORS.green,
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
  },
  referText: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    opacity: 0.5,
  },
  BottomTitle: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop : heightPercentageToDP(2)
  },
  BottomSubTitle: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    alignSelf: 'center',
    textAlign: 'center',
    opacity: 0.5,
    marginTop : heightPercentageToDP(1)
  },
  referralBottom: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1.5),
    borderColor: COLORS.purpleDark,
    borderRadius: heightPercentageToDP(2),
  },
  topReferralContainer: {
   
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: COLORS.purpleDark,
    borderRadius: heightPercentageToDP(2),
  },
  topReferralContainerData: {
    height: heightPercentageToDP(10),
    
    flexDirection: 'row',
  },
});
