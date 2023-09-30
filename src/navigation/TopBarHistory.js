import { View, Text, StyleSheet, Image, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constants';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryRefarrel from '../component/history/HistoryRefarrel';
import HistoryWithdraw from '../component/history/HistoryWithdraw';
import HistoryTrade from '../component/history/HistoryTrade';



const Tab = createMaterialTopTabNavigator();

const TobBarHistory = () => {
  return (
    <Tab.Navigator
        screenOptions={
            {
                tabBarShowLabel: true, 
                tabBarStyle: {
                    height: heightPercentageToDP(10),
                    backgroundColor: COLORS.purpleDark,
                    
                },
                tabBarActiveTintColor: COLORS.green,
                tabBarInactiveTintColor: COLORS.white,
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontFamily: FONT.regular
                  },
                tabBarIndicatorStyle: {
                    backgroundColor: COLORS.green, 

                  },
                           
            }
        }
    >
        <Tab.Screen name='Referral Income'  component={HistoryRefarrel}
                
        />

        <Tab.Screen name='Deposit/Withdraw'  component={HistoryWithdraw}
           
        />

        <Tab.Screen name='Trade' component={HistoryTrade}
            
        />



    </Tab.Navigator>


    
  )
}



export default TobBarHistory

