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
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';
import AvailableBalance from '../component/Trade/AvailableBalance';
import ExchangeFee from '../component/Trade/ExchangeFee';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import {hairlineWidth} from 'nativewind';
import TradeListing from './TradeListing';
import {useSelector} from 'react-redux';

const Trade = () => {
  const THEME = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
        ...styles.container,
      }}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Trade'} />
      <ScrollView>
        <View
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
          }}>
          {/** send container */}
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.sendContainer,
            }}>
            <View style={styles.sendContainerLeft}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.send,
                }}>
                Send
              </Text>
              <TextInput
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.amount,
                }}
                inputMode="decimal"
                placeholder="2,856,34"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                }></TextInput>
              <Image
                source={require('../../assets/image/bitcoin_image.jpg')}
                style={styles.centerImage}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate(TradeListing)}>
              <View style={styles.sendContainerRight}>
                <FontAwesome
                  name={'bitcoin'}
                  size={heightPercentageToDP(3)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                />
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.tradeValue,
                  }}>
                  BTC
                </Text>
                <AntDesign
                  name={'down'}
                  size={heightPercentageToDP(3)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -20,
              zIndex: 2,
              backgroundColor: COLORS.green,
            }}
            className="rounded-full  w-20 h-20 p-1 border-green-300 ">
            <Ionicons
              name={'swap-vertical-outline'}
              size={heightPercentageToDP(4)}
              color={'white'}
              style={{alignItems: 'center'}}
            />
          </View>

          {/** Receive Container */}

          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.receiveContainer,
            }}>
            <View style={styles.sendContainerLeft}>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.send,
                }}>
                Receive
              </Text>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.amount,
                }}>
                18,599,43
              </Text>
              <Image
                source={require('../../assets/image/bitcoin_image.jpg')}
                style={styles.centerImage}
              />
            </View>

            <TouchableOpacity>
              <View style={styles.sendContainerRight}>
                <FontAwesome5Brands
                  name={'ethereum'}
                  size={heightPercentageToDP(3)}
                  color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                />
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.tradeValue,
                  }}>
                  ETH
                </Text>
                <AntDesign
                  name={'down'}
                  size={heightPercentageToDP(3)}
                  color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                />
              </View>
            </TouchableOpacity>
          </View>

          <AvailableBalance />
          <ExchangeFee />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'stretch',
  },

  sendContainer: {
    height: heightPercentageToDP(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    borderWidth: 1,

    borderRadius: 5,
  },
  receiveContainer: {
    height: heightPercentageToDP(12),
    marginTop: heightPercentageToDP(-5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 10,
    marginEnd: 10,
    borderWidth: 1,

    borderRadius: 5,
  },
  send: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(2),
  },
  amount: {
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center',
    marginStart: heightPercentageToDP(2),
  },
  centerImage: {
    position: 'absolute',
    width: widthPercentageToDP(100),
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
  },
  sendContainerLeft: {
    width: widthPercentageToDP(50),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sendContainerRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(1),
    paddingEnd: heightPercentageToDP(2),
  },

  tradeValue: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
  },
});
