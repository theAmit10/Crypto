import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ProgressBarAndroidComponent,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AccountDetails from '../component/payment/AccountDetails';
import CardDetails from '../component/payment/CardDetails';
import SavedCards from '../component/payment/SavedCards';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const TopBarPayment = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: heightPercentageToDP(6),
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor:
          THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
        tabBarLabelStyle: {
          textTransform: 'none',
          fontFamily: FONT.medium,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.green,
        },
      }}>
      <Tab.Screen name="Account Details" component={AccountDetails} />

      <Tab.Screen name="Card Details" component={CardDetails} />

      <Tab.Screen name="Soved Cards" component={SavedCards} />
    </Tab.Navigator>
  );
};

export default TopBarPayment;
