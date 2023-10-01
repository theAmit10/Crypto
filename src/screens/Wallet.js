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
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {CheckBox} from 'react-native-elements';
import {useState} from 'react';

import CoinitemsWallet from '../component/CoinitemsWallet';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

// ...
const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

const Wallet = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Wallet'} />
      <ScrollView>
        <View
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
          }}>
          {/** Top container */}
          <View style={styles.topContainer}>
            <View style={{position: 'relative',flex:1, alignItems:'center', justifyContent:'center'}}>
              <PieChart
                radius={heightPercentageToDP(11)}
                innerCircleColor={COLORS.skyBlue}
                innerRadius={heightPercentageToDP(9)}
                data={data}
                donut
                showGradient
                initialAngle={2}
                strokeWidth={5}
                strokeColor={COLORS.skyBlue}
                showText
                
              />

              <Text
                style={{
                  
                  position: 'absolute',
                  color: 'white',
                  fontFamily: FONT.extrabold,
                  fontSize: heightPercentageToDP(2.5),
                  alignSelf: 'center',
                  top : "35%"
                }}>
                $2,854,51
              </Text>
              <Text style={styles.totalVal}>
                BTC: 0,0035
                <Text className="text-green-500">+5.64%</Text>
              </Text>
            </View>

            <View style={styles.topContainerBottom}>
              <View style={styles.topContainerBottomContent}>
                <View
                  style={{
                    backgroundColor: COLORS.purpleDark,
                    alignSelf: 'center',
                  }}
                  className="bg-blue-100 p-3 rounded-md">
                  <AntDesign
                    name="creditcard"
                    size={heightPercentageToDP(3)}
                    color={'white'}
                    style={styles.centerImage}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
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
                    backgroundColor: COLORS.purpleDark,
                    alignSelf: 'center',
                  }}
                  className="bg-blue-100 p-3 rounded-md">
                  <AntDesign
                    name="wallet"
                    size={heightPercentageToDP(3)}
                    color={'white'}
                    style={styles.centerImage}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
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
                    backgroundColor: COLORS.purpleDark,
                    alignSelf: 'center',
                  }}
                  className="bg-blue-100 p-3 rounded-md">
                  <Octicons
                    name="arrow-switch"
                    size={heightPercentageToDP(3)}
                    color={'white'}
                    style={styles.centerImage}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: FONT.regular,
                    fontSize: heightPercentageToDP(1.5),
                    alignSelf: 'center',
                  }}>
                  Tranfer
                </Text>
              </View>
            </View>
          </View>

          {/** Middle  container */}
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
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
              containerStyle={{backgroundColor: COLORS.purpleDark}}
              textStyle={{color: 'white'}}
              checkedColor="green"
              uncheckedColor="red"
            />
          </View>

          <FlatList
            data={cryptocurrencies}
            renderItem={({item}) => <CoinitemsWallet marketCoin={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    alignItems: 'stretch',
    paddingBottom: 70,
  },

  topContainer: {
    display: 'flex',
    position: 'relative',
    backgroundColor: COLORS.skyBlue,
    width: '100%',
    height: heightPercentageToDP(35),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(3),
    paddingTop: heightPercentageToDP(2)
  },
  topContainerCircle: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(30),
    resizeMode: 'contain',
  },
  topContainerBottom: {
    flexDirection: 'row',
    gap: 10,
  },
  topContainerBottomContent: {
    margin: 10,
    width: widthPercentageToDP(15),
  },

  totalVal: {
    position: 'absolute',
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.6),
    top: '50%',
  },
});
