
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../constants';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderTop from '../../component/profile/HeaderTop';
import TobBarHistory from '../../navigation/TopBarHistory';
import TabBarHelpDesk from '../../navigation/TabBarHelpDesk';




const Tab = createMaterialTopTabNavigator();

const HelpDesk = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
    <HeaderTop value={"HelpDesk"}/> 
    <TabBarHelpDesk/>
    </View>
  );
};

export default HelpDesk;









