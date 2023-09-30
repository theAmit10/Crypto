import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TobBarHistory from '../navigation/TopBarHistory';



const Tab = createMaterialTopTabNavigator();

const History = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
    <HeaderTop value={"History"}/> 
    
    <TobBarHistory/>
    

    </View>
  );
};

export default History;









