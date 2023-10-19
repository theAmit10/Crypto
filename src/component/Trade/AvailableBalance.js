import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const AvailableBalance = ({from, value}) => {
  const THEME = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.container,
        borderColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
      }}>
      <Text
        style={{
          color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
          ...styles.name,
        }}>
        Available Balance :
      </Text>
      <Text
        style={{
          color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
          ...styles.tradeValue,
        }}
        numberOfLines={1}>
        $765,678 BTC
      </Text>
    </SafeAreaView>
  );
};

export default AvailableBalance;

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    borderWidth: 1,

    borderRadius: 5,
    padding: heightPercentageToDP(2),
  },
  name: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
  },
  tradeValue: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
  },
});
