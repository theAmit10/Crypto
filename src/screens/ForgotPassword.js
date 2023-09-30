
import { ScrollView, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ForgotPassword = () => {

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


      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.titleDescription}>Enter your Email address to recovert your password</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Email address</Text>
        <TextInput style={styles.userNameInput} placeholder='example@gmail.com' placeholderTextColor="white"></TextInput>
        
      </View>


      <Text style={styles.subtitle}>I didn’t receive code. Resend Code</Text>
      

      
      <Text style={styles.continue} onPress={() => navigation.navigate("OtpAuth")} >Continue</Text>
      
      

      
    </View>
    
    
    
    </ScrollView>
    

      

    
    
      

      
      

      
    
        
    </SafeAreaView>
  )
}

export default ForgotPassword


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    alignItems:'center'
  },
  
  contentContainer: {
    height:heightPercentageToDP(100),
    alignItems: 'center',
    marginTop: heightPercentageToDP(5),
  
    
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
    opacity:0.5,
    width: widthPercentageToDP(70),
    textAlign:'center'
   
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
   marginTop:heightPercentageToDP(10)
    
    

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




// import { StatusBar } from 'react-native';
// import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';
// import { COLORS, SIZES, FONT, images } from '../../constants'
// import { useNavigation } from "@react-navigation/native";
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// const ForgotPassword = () => {

//   const navigation = useNavigation();

  

//   return (
//     <SafeAreaView style={styles.container}>
//     <StatusBar style="light"/>
//     <ImageBackground 
//       source={require("../../assets/image/account_background.png")}
//       style={styles.image}
    
//     />

//       <Image 
//           source={require("../../assets/image/add-user.png")}
//           style={styles.centerImage}
//         />

      
//       <Text style={styles.title}>Forgot Password</Text>
//       <Text style={styles.titleDescription}>Enter your Email address to recover your password</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.subtitle}>Email address</Text>
//         <TextInput style={styles.userNameInput}>example@gmail.com</TextInput>
        
//       </View>

//       <Text style={styles.subtitle}>I didn’t receive code. Resend Code</Text>

      
      

//       <View style={styles.bottonContainer}>
        
//         <Text style={styles.next} onPress={() => navigation.navigate("Login")} >Send code</Text>
//       </View>
    
        
//     </SafeAreaView>
//   )
// }

// export default ForgotPassword


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     backgroundColor: COLORS.purple,
//     justifyContent: 'center',
//     alignItems: 'center',
    
    
    

//   },
//   image: {
//     position: 'absolute',
//     width: "100%",
//     height: "100%",
//     resizeMode: "stretch", 
//   },
//   contentContainer: {
//     position:'absolute'
//   },
//   centerImage:{
//     position: "absolute",
//     top: -120,
//     width: 80,
//     height: 80,
//     resizeMode: "cover", 
//     marginTop: 225,
    
    
//   },
//   title: {
//     color: "white",
//     fontFamily: FONT.bold,
//     fontSize: 28,
//     display:'flex',
//     justifyContent:'center',
//     alignItems: 'baseline',
//     marginStart: 10,
    
//   },
//   titleDescription: {
//     color: "white",
//     fontFamily: FONT.regular,
//     fontSize: 16,
//     display:'flex',
//     justifyContent:'center',
//     alignItems: 'baseline',
//     marginStart: 10,
//     opacity:0.5
   
//   },
//   subtitle: {
//     color: "white",
//     fontFamily: FONT.regular,
//     fontSize: 14,
//     display:'flex',
//     justifyContent:'flex-start',
//     alignItems: 'baseline',
//     marginStart: 10,
//     marginTop: 20
//   },
//   userNameInput: {
//     width:"95%",
//     lineHeight: 20,
//     color: "white",
//     fontFamily: FONT.regular,
//     padding: 10,
//     fontSize: 14,
//     backgroundColor:COLORS.purpleDark,
//     borderWidth: 1,         
//     borderColor: COLORS.purple,   
//     borderRadius: 5,    
//     margin: 5,
//     marginEnd: 10,   
//     opacity:0.5
    

//   },
//   inputContainer: {
//     width: "100%",
//     flexDirection: 'column',
//     alignItems:'flex-start',
//     padding: 20,
   
   
//   },
//   bottonContainer: {
//     position: 'absolute',
//     width: "100%",
//     flexDirection: 'column',
//     alignItems:'flex-end',
//     padding: 20,
//     margin: 10,
//     bottom: 20

    

//   },
//   next: {
//     color: "white",
//     width: "100%",
//     fontFamily: FONT.bold,
//     backgroundColor: COLORS.green,
//     borderBottomColor:COLORS.green,
//     fontSize:14,
//     padding: 12,
//     borderRadius: 5,
//     textAlign:'center'
//   },
//   accountAndForgotContainer:{
//     width: "100%",
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
    
//     marginTop: 10,
//     marginEnd: 10
    
//   },
//   account: {
//     color: "white",
//     fontFamily: FONT.regular,
//     fontSize: 14,
//     display:'flex',
//     justifyContent:'center',
//     alignItems: 'baseline',
//     marginStart: 10,
//     marginTop: 20
//   },
//   forgot: {
//     color: "white",
//     fontFamily: FONT.regular,
//     fontSize: 14,
//     display:'flex',
//     justifyContent:'flex-start',
//     alignItems: 'baseline',
//     marginStart: 10,
//     marginTop: 20
//   },
//   googleAuthContainer: {
//     width:"100%",
//     lineHeight: 20,
//     color: "white",
//     flexDirection:'row',
//     fontFamily: FONT.semibold,
//     padding: 10,
//     fontSize: 14,
//     backgroundColor:COLORS.purpleDark,
//     borderWidth: 1,         
//     borderColor: COLORS.white,   
//     borderRadius: 5,    
//     justifyContent:'center',
    
//     marginBottom: 20    
    
//   },
//   googleAuth: {
//     color: "white",
//     fontFamily: FONT.semibold,
//     fontSize: 14,
//     display:'flex',
//     justifyContent:'flex-start',
//     alignItems: 'baseline',
//     marginStart: 10,
    
    
//   },
//   googleImage:{
    
//     width: 25,
//     height: 25,
//     resizeMode: "cover", 
   
//   }

// });
