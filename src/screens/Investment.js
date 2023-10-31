import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import InvestmentItem from '../component/investment/InvestmentItem';

const Investment = () => {
  const THEME = useSelector(state => state.theme);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <HeaderTop value={'Investment'} />

      <TouchableOpacity
        onPress={() => navigation.navigate('InvestmentDetails')}>
        <InvestmentItem
          planAbout={'CENT'}
          investment={'$24 to $300'}
          montlyrReturn={'5% to 10%'}
        />
      </TouchableOpacity>

      <InvestmentItem
        planAbout={'STANDARD'}
        investment={'$10 to $100'}
        montlyrReturn={'3% to 8%'}
      />

      <InvestmentItem
        planAbout={'PRO'}
        investment={'$240 to $3000'}
        montlyrReturn={'10% to 30%'}
      />
    </SafeAreaView>
  );
};

export default Investment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
