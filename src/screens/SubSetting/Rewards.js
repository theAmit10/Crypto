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
import {useSelector} from 'react-redux';

const Rewards = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
        ...styles.mainCointer,
      }}>
      <HeaderTop value={'Rewards'} />
      <ScrollView>
        {/** Content Container */}
        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.contentParentConatainer,
          }}>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.title,
            }}>
            Share your referral link and earn ccrypto when others trade
          </Text>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.subtitle,
            }}>
            Referral ID
          </Text>

          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.white,
              ...styles.referralContainer,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              ANSWBOWHSJ
            </Text>
            <Feather
              name="copy"
              size={heightPercentageToDP(3)}
              color={COLORS.green}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.subtitle,
            }}>
            Referral Link
          </Text>
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.white,
              ...styles.referralContainer,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              ADNKNANKDNKNGANNACKNV
            </Text>
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
              style={{
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              }}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="facebook"
                size={heightPercentageToDP(3)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              }}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="whatsapp"
                size={heightPercentageToDP(3)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              }}
              className="rounded-md blur-lg p-2">
              <FontAwesome5
                name="instagram"
                size={heightPercentageToDP(3)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>

            <View
              style={{
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.white,
              }}
              className="rounded-md blur-sm p-2">
              <FontAwesome5
                name="twitter"
                size={heightPercentageToDP(3)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </View>
        </View>

        {/** middle component */}

        {/** middle left */}

        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
            ...styles.middleComponent,
          }}>
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              ...styles.middleLeft,
            }}>
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
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}>
              Your Community
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.referCount,
              }}
              numberOfLines={1}>
              99
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.referText,
              }}>
              Referrals
            </Text>
          </View>

          {/** middle right */}
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              ...styles.middleRight,
            }}>
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
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.title,
              }}>
              Lifetime Rewards
            </Text>
            <Text style={styles.referCount} numberOfLines={1}>
              78.89
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.referText,
              }}>
              0.892 BTC
            </Text>
          </View>

          {/** Bottom Section */}
        </View>

        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.BottomTitle,
          }}>
          Track your income with our unique two-tier referral system;
        </Text>

        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.BottomSubTitle,
          }}>
          Crypto Money shares 20% of its trading fee profits from your direct
          and indirect referrals
        </Text>

        {/** Referral percentage bottom */}

        <View
          style={{
            borderColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.referralBottom,
          }}>
          <View
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.topReferralContainer,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                #
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Rewards Split
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Referrals
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(3),
              }}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Amount Earned
              </Text>
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
              <Text style={styles.title} numberOfLines={1}>
                #1
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                8%
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                3
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                (0.01 BTC)
              </Text>
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
              <Text style={styles.title} numberOfLines={1}>
                #2
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                6%
              </Text>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                13
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                padding: heightPercentageToDP(2),
              }}>
              <Text style={styles.title} numberOfLines={1}>
                (0.03 BTC)
              </Text>
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
  },
  contentParentConatainer: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
  },

  title: {
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

    margin: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    gap: 5,
  },
  middleRight: {
    flex: 1,
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
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
  },
  BottomTitle: {
    fontFamily: FONT.semibold,
    width: widthPercentageToDP(90),
    fontSize: heightPercentageToDP(2.5),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: heightPercentageToDP(2),
  },
  BottomSubTitle: {
    fontFamily: FONT.regular,
    width: widthPercentageToDP(90),
    fontSize: heightPercentageToDP(2),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: heightPercentageToDP(1),
  },
  referralBottom: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1.5),
    borderRadius: heightPercentageToDP(2),
  },
  topReferralContainer: {
    flexDirection: 'row',
    borderRadius: heightPercentageToDP(2),
  },
  topReferralContainerData: {
    height: heightPercentageToDP(10),
    flexDirection: 'row',
  },
});
