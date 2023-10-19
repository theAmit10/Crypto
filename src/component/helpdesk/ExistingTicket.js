import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import Octicons from 'react-native-vector-icons/Octicons';
import ExistingItem from './ExistingItem';
import {useSelector} from 'react-redux';

const ExistingTicket = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <View
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        borderColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.mainCointer,
      }}>
      <ScrollView>
        <ExistingItem />
        <ExistingItem />
        <ExistingItem />
        <ExistingItem />
      </ScrollView>
    </View>
  );
};

export default ExistingTicket;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
  },
  contentContainer: {
    height: heightPercentageToDP(10),

    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    flexDirection: 'row',
    borderRadius: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
    borderWidth: 1,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 4,
    margin: heightPercentageToDP(1),
  },

  title: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
  },
  subtitle: {
    color: COLORS.gray2,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subSubTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(2),
  },
});
