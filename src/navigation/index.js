import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { Provider } from 'react-redux';
import ActionSheetBottom from '../screens/ActionSheetBottom';
import ActionSheetParent from '../screens/ActionSheetParent';
import Verification from '../screens/SubSetting/Verification';
import KnowYourCrypto from '../screens/SubSetting/KnowYourCrypto';
import Rewards from '../screens/SubSetting/Rewards';
import HelpDesk from '../screens/SubSetting/HelpDesk';
import Market from '../screens/Market';
import TradeListing from '../screens/TradeListing';
import Store from '../../stores/Store';
import AssetDetails from '../screens/AssetDetails';
import UpdateProfile from '../screens/SubSetting/UpdateProfile';
import DepositScreen from '../screens/SubSetting/DepositScreen';
import WithdrawScreen from '../screens/SubSetting/WithdrawScreen';
import Investment from '../screens/Investment';
import InvestmentDetails from '../screens/InvestmentDetails';
import CryptoDeposit from '../screens/SubSetting/deposit/CryptoDeposit';
import UpiDeposit from '../screens/SubSetting/deposit/UpiDeposit';
import BankDeposit from '../screens/SubSetting/deposit/BankDeposit';
import WithdrawCrypto from '../screens/SubSetting/withdraw/WithdrawCrypto';
import WithdrawBank from '../screens/SubSetting/withdraw/WithdrawBank';
import Top15Gainers from '../screens/Test';
import PL from '../screens/PL';
import MyInvestment from '../screens/MyInvestment';
import ChartComponent from '../screens/Temp';
import CryptoBuy from '../screens/CryptoBuy';
import MyInvestmentDetails from '../screens/MyInvestmentDetails';
import Test from '../screens/Test';
import Demo from '../screens/Demo';
import GoogleAuthPassword from '../screens/GoogleAuthPassword';
import Toast from 'react-native-toast-message';
import TicketDetails from '../screens/SubSetting/TicketDetails';
import Temp from '../screens/Temp';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen">
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
          <Stack.Screen name="AssetDetails" component={AssetDetails} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="DepositScreen" component={DepositScreen} />
          <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
          <Stack.Screen name="Investment" component={Investment} />
          <Stack.Screen
            name="InvestmentDetails"
            component={InvestmentDetails}
          />
          <Stack.Screen name="CryptoDeposit" component={CryptoDeposit} />
          <Stack.Screen name="UpiDeposit" component={UpiDeposit} />
          <Stack.Screen name="BankDeposit" component={BankDeposit} />
          <Stack.Screen name="MyInvestment" component={MyInvestment} />
          <Stack.Screen name="WithdrawCrypto" component={WithdrawCrypto} />
          <Stack.Screen name="WithdrawBank" component={WithdrawBank} />
          <Stack.Screen name="Top15Gainers" component={Top15Gainers} />
          <Stack.Screen name="PL" component={PL} />
          <Stack.Screen name="ChartComponent" component={ChartComponent} />
          <Stack.Screen name="CryptoBuy" component={CryptoBuy} />
          <Stack.Screen
            name="MyInvestmentDetails"
            component={MyInvestmentDetails}
          />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Temp" component={Temp} />
          <Stack.Screen name="Demo" component={Demo} />
          <Stack.Screen name="TicketDetails" component={TicketDetails} />
          <Stack.Screen
            name="GoogleAuthPassword"
            component={GoogleAuthPassword}
          />
        </Stack.Navigator>

        <Toast
          position="top"
          autoHide={true}
          visibilityTime={2000}
          onPress={() => Toast.hide()}
        />
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
