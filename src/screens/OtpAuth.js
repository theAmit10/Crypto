import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const OtpAuth = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="light"/>
    <ImageBackground 
      source={require("../../assets/image/back_one.png")}
      style={styles.image}
    
    />
      
      <Text style={styles.title}>OTP Authentication </Text>
      <Text style={styles.subtitle}>An authentication code has been,</Text>
      <Text style={styles.subtitleBelow}>sent to registered email</Text>
      
      <View style={styles.accountAndForgotContainer}>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
        <TextInput style={styles.userOtpInput} inputMode='numeric'></TextInput>
      </View>
      
      <View style={styles.accountAndForgotContainer}>
        <Text style={styles.resendCodeText} onPress={() => navigation.navigate("Register")} >I didn’t receive code.</Text>
        <Text style={styles.resendCode} onPress={() => navigation.navigate("ForgotPassword")} > Resend Code</Text>
      </View>

      <View style={styles.bottonContainer}>
        <Text style={styles.next} onPress={() => navigation.navigate("Login")} >Submit</Text>
      </View>
    
        
    </SafeAreaView>
  )
}

export default OtpAuth


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
    
    
    

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
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(4),
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  },
  subtitle: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
    opacity:0.5
  },
  subtitleBelow:{
    color: "white",
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    opacity:0.5
  },
  userOtpInput: {
    lineHeight: 20,
    color: COLORS.white,
    fontFamily: FONT.extrabold,
    padding: 10,
    fontSize: 18,
    backgroundColor:COLORS.purpleDark,
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,    
    margin: 5,
    marginEnd: 10,   
    opacity: 0.5,
    textAlign: 'center'
    

  },
  bottonContainer: {
    position: 'absolute',
    width: "100%",
    flexDirection: 'row',
    alignItems:'flex-end',
    padding: 20,
    marginTop: 10,
    bottom: heightPercentageToDP(2)
    

  },
  next: {
    color: "white",
    width: "100%",
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor:COLORS.green,
    fontSize:heightPercentageToDP(2.5),
    padding: 12,
    borderRadius: 5,
    textAlign:'center'
  },
  accountAndForgotContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginEnd: 10,
    marginStart: 20
    
  },
  resendCodeText: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
    opacity: 0.5
  },
  resendCode: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display:'flex',
    justifyContent:'flex-start',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20
  }

});
