import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavigationContainer from '../component/home/NavigationContainer';
import HeaderTop from '../component/profile/HeaderTop';
import ProfileAbout from '../component/profile/ProfileAbout';
import ProfileContent from '../component/profile/ProfileContent';
import TopContainer from '../component/Trade/TopContainer';
import AvailableBalance from '../component/Trade/AvailableBalance';
import ExchangeFee from '../component/Trade/ExchangeFee';
import NotificationContent from '../component/notification/NotificationContent';

const NotificationTab = () => {

  const navigation = useNavigation();

  

  return (
    <SafeAreaView style={styles.container} >
    <StatusBar style="light" hidden={false}  />
    <HeaderTop value={"Notification"}/>
    <ScrollView >    
        <View style={styles.container}>                
                <NotificationContent title={'You recevied a payment of $230.00'} name={'from Zoya'} time={'10 min ago'} amount={'$230.00'}/>
                <NotificationContent title={'You recevied a payment of $30.00'} name={'from Deepak'} time={'50 min ago'} amount={'$30.00'}/>
                <NotificationContent title={'You recevied a payment of $130.00'} name={'from Imran'} time={'2 hour  ago'} amount={'$130.00'}/>
                <NotificationContent title={'You recevied a payment of $50.00'} name={'from Shubham'} time={'5 hour ago'} amount={'$50.00'}/>
                
                
        </View>


         
    
    </ScrollView>

    
        
        
    </SafeAreaView>
  )
}

export default NotificationTab


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    
    alignItems: 'stretch',
   
    
    
    
    
    

  },
  image: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  contentContainer: {
    position:'absolute'
  },
  centerImage:{
    width: 200,
    height: 200,
    resizeMode: "cover", 
    
  },
  title: {
    color: "white",
    fontFamily: FONT.bold,
    fontSize: 28,
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  },
  subtitle: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 14,
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  },
  userNameInput: {
    width:"95%",
    lineHeight: 20,
    color: "white",
    fontFamily: FONT.regular,
    padding: 10,
    fontSize: 14,
    backgroundColor:COLORS.purpleDark,
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,    
    margin: 5,
    marginEnd: 10,   
    opacity: 0.5
    

  },
  bottonContainer: {
    position: 'absolute',
    width: "100%",
    flexDirection: 'row',
    alignItems:'flex-end',
    padding: 20,
    marginTop: 10,
    bottom: 20
    

  },
  next: {
    color: "white",
    width: "100%",
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor:COLORS.green,
    fontSize:14,
    padding: 12,
    borderRadius: 5,
    textAlign:'center'
  },
  accountAndForgotContainer:{
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginEnd: 10
    
  },
  account: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: 14,
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  },
  forgot: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: 14,
    display:'flex',
    justifyContent:'flex-start',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  },
  profileImage:{
    position:'absolute',
    width: 150,
    height: 150,
    resizeMode: "cover",  
    tintColor: "lightgreen" ,
    alignSelf:'center',
    top:80,
    zIndex:2

  },

});
