import React from 'react';
import {COLORS, FONT} from '../../constants';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateTicket from '../component/helpdesk/CreateTicket';
import ExistingTicket from '../component/helpdesk/ExistingTicket';

const Tab = createMaterialTopTabNavigator();

const TabBarHelpDesk = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: heightPercentageToDP(8),
          backgroundColor: COLORS.purpleDark,
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: COLORS.white,
        tabBarLabelStyle: {
          textTransform: 'none',
          fontFamily: FONT.regular,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.green,
        },
      }}>
      <Tab.Screen name="Create Ticket" component={CreateTicket} />

      <Tab.Screen name="Existing" component={ExistingTicket} />
    </Tab.Navigator>
  );
};

export default TabBarHelpDesk;
