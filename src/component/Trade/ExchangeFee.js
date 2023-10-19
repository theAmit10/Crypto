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

const ExchangeFee = ({from, value}) => {
  const THEME = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.container,
        borderColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
      }}>
      <View style={styles.containerLeft}>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.title,
          }}>
          Exchange Fees :
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.titleDescription,
          }}>
          Read term and conditions
        </Text>
      </View>

      <Text style={{
        color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
        ...styles.tradeValue,
      }} numberOfLines={1}>
        $75.89
      </Text>
    </SafeAreaView>
  );
};

export default ExchangeFee;

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    height: heightPercentageToDP(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    borderWidth: 1,
    borderColor: COLORS.skyBlue,
    borderRadius: 5,
    padding: heightPercentageToDP(1),
  },
  titleDescription: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.5),
  },
  title: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
  },

  containerLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  containerRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  tradeValue: {
    
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
  },
});
