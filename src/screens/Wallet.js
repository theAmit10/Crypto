import {StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {CheckBox} from 'react-native-elements';
import React, {useEffect, useState} from 'react';

import {PieChart} from 'react-native-gifted-charts';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCoinMarket} from '../../stores/coinMarketSlice';
import {fetchHoldings} from '../../stores/holdingsSlice';

// ...
const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

const Wallet = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getCoinMarket();
  //     // getHoldings(holdings = dummyData)
  //   }, []),
  // );

  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME.data);

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

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Wallet'} />

      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={coins}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          ListHeaderComponent={
            // TOP VIEW
            <View>
              <View
                style={{
                  backgroundColor:
                    THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                  ...styles.topContainer,
                }}>
                <View
                  style={{
                    position: 'relative',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PieChart
                    radius={heightPercentageToDP(11)}
                    innerCircleColor={
                      THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue
                    }
                    innerRadius={heightPercentageToDP(9)}
                    data={data}
                    donut
                    showGradient
                    initialAngle={2}
                    strokeWidth={5}
                    strokeColor={
                      THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue
                    }
                    showText
                  />

                  <Text
                    style={{
                      position: 'absolute',
                      color:
                        THEME.data === 'LIGHT'
                          ? COLORS.purpleDark
                          : COLORS.white,
                      fontFamily: FONT.extrabold,
                      fontSize: heightPercentageToDP(2.5),
                      alignSelf: 'center',
                      top: '35%',
                    }}>
                    $2,854,51
                  </Text>
                  <Text
                    style={{
                      color:
                        THEME.data === 'LIGHT'
                          ? COLORS.purpleDark
                          : COLORS.white,
                      ...styles.totalVal,
                    }}>
                    BTC: 0,0035
                    <Text className="text-green-500">+5.64%</Text>
                  </Text>
                </View>

                <View style={styles.topContainerBottom}>
                  <View style={styles.topContainerBottomContent}>
                    <View
                      style={{
                        backgroundColor:
                          THEME.data === 'LIGHT'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        alignSelf: 'center',
                      }}
                      className="p-3 rounded-md">
                      <AntDesign
                        name="creditcard"
                        size={heightPercentageToDP(3)}
                        color={
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark
                        }
                        style={styles.centerImage}
                      />
                    </View>
                    <Text
                      style={{
                        color:
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        fontFamily: FONT.regular,
                        fontSize: heightPercentageToDP(1.5),
                        alignSelf: 'center',
                      }}>
                      Withdraw
                    </Text>
                  </View>

                  <View style={styles.topContainerBottomContent}>
                    <View
                      style={{
                        backgroundColor:
                          THEME.data === 'LIGHT'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        alignSelf: 'center',
                      }}
                      className="bg-blue-100 p-3 rounded-md">
                      <AntDesign
                        name="wallet"
                        size={heightPercentageToDP(3)}
                        color={
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark
                        }
                        style={styles.centerImage}
                      />
                    </View>
                    <Text
                      style={{
                        color:
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        fontFamily: FONT.regular,
                        fontSize: heightPercentageToDP(1.5),
                        alignSelf: 'center',
                      }}>
                      Deposit
                    </Text>
                  </View>

                  <View style={styles.topContainerBottomContent}>
                    <View
                      style={{
                        backgroundColor:
                          THEME.data === 'LIGHT'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        alignSelf: 'center',
                      }}
                      className="bg-blue-100 p-3 rounded-md">
                      <Octicons
                        name="arrow-switch"
                        size={heightPercentageToDP(3)}
                        color={
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark
                        }
                        style={styles.centerImage}
                      />
                    </View>
                    <Text
                      style={{
                        color:
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        fontFamily: FONT.regular,
                        fontSize: heightPercentageToDP(1.5),
                        alignSelf: 'center',
                      }}>
                      Tranfer
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.extrabold,
                    fontSize: heightPercentageToDP(2.5),
                    alignSelf: 'center',
                  }}>
                  Wallet Balance
                </Text>

                <CheckBox
                  title="Hide Balance"
                  fontFamily={FONT.extrabold}
                  checked={isChecked}
                  onPress={handleCheckboxToggle}
                  containerStyle={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.light : COLORS.skyBlue,
                  }}
                  textStyle={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  }}
                  checkedColor={COLORS.purpleDark}
                  uncheckedColor={COLORS.purpleDark}
                />
              </View>
            </View>
          }
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
                  backgroundColor:
                    THEME.data === 'LIGHT'
                      ? COLORS.lightGray
                      : COLORS.skyBlue,
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
                    style={{
                      backgroundColor:
                        THEME.data === 'LIGHT'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      padding: 6,
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
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      fontFamily: FONT.bold,
                      fontSize: heightPercentageToDP(2),
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
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

                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'stretch',
  },

  topContainer: {
    display: 'flex',
    position: 'relative',

    height: heightPercentageToDP(35),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(3),
    paddingTop: heightPercentageToDP(2),
    marginHorizontal: heightPercentageToDP(-2),
    borderBottomEndRadius: heightPercentageToDP(1),
  },
  topContainerCircle: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(30),
    resizeMode: 'contain',
  },
  topContainerBottom: {
    flexDirection: 'row',
    gap: heightPercentageToDP(1),
  },
  topContainerBottomContent: {
    margin: heightPercentageToDP(2),
    width: widthPercentageToDP(15),
  },

  totalVal: {
    position: 'absolute',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),
    top: '50%',
  },
});

export default Wallet;
