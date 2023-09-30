
import { ScrollView, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Register = () => {

  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="light"/>
    <ScrollView >

    <View style={styles.contentContainer} >

      {/** Round Image */}
      <View style={styles.imageContainer} className="rounded-full ">
        <Image 
                  source={require("../../assets/image/add-user.png")}
                  style={styles.centerImage}
                  
                />
      </View>


      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.titleDescription}>Welcome, Please Enter Your Details</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Email address</Text>
        <TextInput style={styles.userNameInput} placeholder='example@gmail.com' placeholderTextColor="white"></TextInput>
        <Text style={styles.subtitle}>Password</Text>
        <TextInput style={styles.userNameInput} placeholder='@12345678' placeholderTextColor="white"  ></TextInput>
        <Text style={styles.subtitle}>Confirm Password</Text>
        <TextInput style={styles.userNameInput} placeholder='@12345678' placeholderTextColor="white" ></TextInput>
      </View>

      <View style={styles.googleAuthContainer}>
          <Image 
            source={require("../../assets/image/google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleAuth} >Sign up with Google</Text>
      </View>

      
      <Text style={styles.continue} onPress={() => navigation.navigate("OtpAuth")} >Continue</Text>
      
      

      
    </View>
    
    
    
    </ScrollView>
    

      

    
    
      

      
      

      
    
        
    </SafeAreaView>
  )
}

export default Register


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    alignItems:'center'
  },
  
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightPercentageToDP(5)
    
  },
  imageContainer: {
    display: 'flex',
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(40),
    backgroundColor: COLORS.skyBlue,
    justifyContent:'center',
    alignItems: 'center'
  },
  centerImage:{
    height: heightPercentageToDP(15),
    width: widthPercentageToDP(18),
    resizeMode: "contain",  
    
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(4), 
    
  },
  titleDescription: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5), 
    opacity:0.5
   
  },
  subtitle: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    margin: 5
  
    
  },
  userNameInput: {
    color: "white",
    fontFamily: FONT.regular,
    
    fontSize: heightPercentageToDP(2.5),
    backgroundColor:COLORS.purpleDark,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,    
    opacity:0.5,
    paddingStart: 10
    

  },
  inputContainer: {
    width:widthPercentageToDP(100),
    padding: 20,
    alignItems:'stretch',
  },
 
  continue: {
    color: "white",
    fontFamily: FONT.bold,
    backgroundColor: COLORS.green,
    borderBottomColor:COLORS.green,
    fontSize:heightPercentageToDP(2.5),
    padding: 12,
    borderRadius: 5,
    textAlign:'center',
    alignSelf: 'stretch',
    marginStart: 20,
    marginEnd: 20,  
  },
  
 
  
  googleAuthContainer: {
    color: "white",
    flexDirection:'row',
    fontFamily: FONT.semibold,
    padding: 10,
    fontSize: 14,
    backgroundColor:COLORS.purpleDark,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,    
    justifyContent:'center',
    marginBottom: heightPercentageToDP(3),
    alignSelf:'stretch',
    marginStart: 20,
    marginEnd: 20,    
    
  },
  googleAuth: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    display:'flex',
    justifyContent:'flex-start',
    alignItems: 'baseline',
    marginStart: 10,
    
    
  },
  googleImage:{
    
    width: 25,
    height: 25,
    resizeMode: "cover", 
   
  }

});

