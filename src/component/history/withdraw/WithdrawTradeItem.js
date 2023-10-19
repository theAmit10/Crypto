import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONT} from '../../../../constants';
import CoinItem from '../../Coinitems';
import {useSelector} from 'react-redux';

const WithdrawTradeItem = () => {
  const THEME = useSelector(state => state.theme);
  const [isHiddenBottomView, setIsHiddenBottomView] = useState(false);

  const hideView = () => {
    if (isHiddenBottomView) {
      setIsHiddenBottomView(false);
    } else {
      setIsHiddenBottomView(true);
    }
  };
  return (
    <TouchableOpacity onPress={hideView}>
      <View
        style={{
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          borderColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
          ...styles.container,
        }}>
        {/** left container */}
        <View style={styles.containerLeft}>
          {/** withdraw or deposit icon  */}

          <View
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.middleContentTopIcon,
            }}
            className="rounded-full ">
            <MaterialCommunityIcons
              name="bitcoin"
              size={15}
              color={THEME.data === 'DARK' ? COLORS.white : COLORS.purple}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          <View
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.middleContentTopIconTwo,
            }}
            className="rounded-full ">
            <MaterialCommunityIcons
              name="ethereum"
              size={15}
              color={THEME.data === 'DARK' ? COLORS.white : COLORS.purple}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          <View style={styles.middleContent}>
            <View style={styles.middleContentTop}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                BTC
              </Text>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                -
              </Text>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                ETH
              </Text>
            </View>

            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Jan 8, 2023 - 8:20am
            </Text>
          </View>
        </View>

        {/** Right container */}
        <View style={styles.containerRight}>
          <View style={styles.rightStatusContainer}>
            <View
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                borderColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.rightStatusContainerIcon,
              }}
              className="rounded-full ">
              <MaterialCommunityIcons
                name="check"
                size={15}
                color={COLORS.green}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
            <Text style={styles.rightStatusContainerIconTitle}>Success</Text>
          </View>
          <View style={styles.rightStatusContainerLeft}>
            <View
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                borderColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.rightStatusContainerIconLeft,
              }}>
              <Ionicons
                name={isHiddenBottomView ? 'remove-outline' : 'add'}
                size={20}
                color={COLORS.green}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </View>
        </View>
      </View>

      {/** bottom View */}

      {isHiddenBottomView && (
        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            borderColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.bottmContainer,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row', gap: 3}}>
                <Text style={styles.bottomTitle}>Amounts :</Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}
                  numberOfLines={1}>
                  1.2267
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 3}}>
                <Text style={styles.bottomTitle}>Price :</Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}
                  numberOfLines={1}>
                  $6262
                </Text>
              </View>
            </View>

            <View
              style={{width: widthPercentageToDP(10), alignItems: 'center'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor:
                    THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
                  width: 1,
                  height: '100',
                }}></View>

              <View
                style={{
                  backgroundColor:
                    THEME.data === 'LIGHT'
                      ? COLORS.lightGray
                      : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,

                  ...styles.middleContentRightIconView,
                }}
                className="rounded-full ">
                <AntDesign
                  name="arrowright"
                  size={20}
                  color={THEME.data === 'LIGHT' ? COLORS.white : COLORS.white}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </View>

            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row', gap: 3}}>
                <Text style={styles.bottomTitle}>Total Value : </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}
                  numberOfLines={1}>
                  $78.897
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 3}}>
                <Text style={styles.bottomTitle}>Price :</Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}
                  numberOfLines={1}>
                  $6262
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default WithdrawTradeItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: heightPercentageToDP(10),

    marginTop: heightPercentageToDP(1),
    marginHorizontal: heightPercentageToDP(1),

    padding: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
  },

  title: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  containerLeft: {
    width: widthPercentageToDP(65),
    flexDirection: 'row',
  },
  containerRight: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStatus: {
    backgroundColor: COLORS.green,
    padding: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: 10,
    marginEnd: 10,
    borderColor: COLORS.green,
    alignSelf: 'center',
  },
  middleContent: {
    justifyContent: 'center',
  },
  middleContentTop: {
    flexDirection: 'row',
    gap: 3,
  },
  middleContentTopIcon: {
    padding: heightPercentageToDP(0.5),
    borderWidth: 2,

    alignSelf: 'center',
    marginEnd: -5,
  },
  middleContentTopIconTwo: {
    padding: heightPercentageToDP(0.5),
    borderWidth: 2,

    alignSelf: 'center',
    marginEnd: 4,
  },
  rightStatusContainer: {
    flex: 2,
    alignSelf: 'center',
  },
  rightStatusContainerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  rightStatusContainerIconLeft: {
    borderWidth: 1,

    borderRadius: 5,
  },
  rightStatusContainerIcon: {
    padding: heightPercentageToDP(0.5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rightStatusContainerIconTitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
    color: COLORS.green,
  },
  bottomTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  bottmContainer: {
    height: heightPercentageToDP(10),
    marginHorizontal: heightPercentageToDP(1),
    padding: heightPercentageToDP(1),
    borderTopRightRadius: 2,
    borderBottomRightRadius: heightPercentageToDP(1),
    borderBottomLeftRadius: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(-1),
    borderWidth: 2,
  },
  middleContentRightIconView: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 5,
    top: 6,
    padding: 1,
  },
});
