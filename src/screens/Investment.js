import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import InvestmentItem from '../component/investment/InvestmentItem';
import { fetchTopLooserMarket } from '../../stores/topLooserSlice';

const Investment = () => {
  const THEME = useSelector(state => state.theme);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const topLooser = useSelector(state => state.topLooserMarket.topLooser);

  useEffect(() => {
    dispatch(fetchTopLooserMarket());
  }, []);


  console.log("FOR TOP lOOSER")
  console.log("FOR TOP lOOSER : "+topLooser[1].name)
  topLooser
  console.log("FOR TOP lOOSER datas : "+topLooser.length)


  
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
