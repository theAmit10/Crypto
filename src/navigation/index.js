import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OnboardingScreenTwo from '../screens/OnboardingScreenTwo';
import OnboardingScreenThree from '../screens/OnboardingScreenThree';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';
import Trade from '../screens/Trade';
import Transfer from '../screens/Transfer';
import TransferSuccess from '../screens/TransferSuccess';
import Setting from '../screens/Setting';
import OtpAuth from '../screens/OtpAuth';
import NotificationTab from '../screens/NotificationTab';
import Profile from '../screens/Profile';
import Hcontainer from '../screens/Hcontainer';
import Search from '../screens/Search';
import Onboard from '../screens/OnBoard';
import Wallet from '../screens/Wallet';
import History from '../screens/History';
import Payment from '../screens/Payment';
import ProfitAndLoss from '../screens/ProfitAndLoss';

import {createStore, applyMiddleware} from 'redux';
// import { createStoreHook,applyMiddleware } from 'react-redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../stores/rootReducer';
import ActionSheet from '../component/setting/ActionSheet';
import ActionSheetBottom from '../screens/ActionSheetBottom';
import {actionSheetEventManager} from 'react-native-actions-sheet/dist/src/eventmanager';
import ActionSheetParent from '../screens/ActionSheetParent';
import Verification from '../screens/SubSetting/Verification';
import KnowYourCrypto from '../screens/SubSetting/KnowYourCrypto';
import Rewards from '../screens/SubSetting/Rewards';
import HelpDesk from '../screens/SubSetting/HelpDesk';
import Market from '../screens/Market';
import TradeListing from '../screens/TradeListing';
import Store from '../../stores/Store';

const Stack = createNativeStackNavigator();



const AppNavigation = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Hcontainer">
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="OnboardingScreenTwo"
            component={OnboardingScreenTwo}
          />
          <Stack.Screen
            name="OnboardingScreenThree"
            component={OnboardingScreenThree}
          />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OtpAuth" component={OtpAuth} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Trade" component={Trade} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="NotificationTab" component={NotificationTab} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="TransferSuccess" component={TransferSuccess} />
          <Stack.Screen name="Hcontainer" component={Hcontainer} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="ProfitAndLoss" component={ProfitAndLoss} />
          <Stack.Screen
            name="ActionSheetBottom"
            component={ActionSheetBottom}
          />
          <Stack.Screen
            name="ActionSheetParent"
            component={ActionSheetParent}
          />

          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="KnowYourCrypto" component={KnowYourCrypto} />
          <Stack.Screen name="Rewards" component={Rewards} />
          <Stack.Screen name="HelpDesk" component={HelpDesk} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="TradeListing" component={TradeListing} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
