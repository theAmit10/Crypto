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

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="ProfitAndLoss">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
