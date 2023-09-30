import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function OnboardingScreenThree() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
      <ImageBackground 
        source={require("../../assets/image/onboarding.png")}
        style={styles.image}
      />
      <View style={styles.contentContainer}  >
        <View >
          <Image 
              source={require("../../assets/image/shield.png")}
              style={styles.centerImage}
            />
        </View>

        <View className="flex justify-center items-center"> 
          <Text style={styles.title} >Your Safety is Our Top Priority</Text>
          <Text style={styles.titleDescription} >Our top-notch security features will keep</Text>
          <Text style={styles.titleDescription} >you completely safe </Text>
        </View>
        
       
      </View>

      <TouchableOpacity style={styles.bottonContainer}>
          <Text style={styles.next} onPress={() => navigation.navigate("Login")} >Let's Get Started</Text>
        </TouchableOpacity>
  
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems:'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  title: {
    color: "white",
    fontFamily: FONT.extrabold,
    fontSize: hp(3),
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
   

  },
  titleDescription : {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: 14,
    
    opacity:0.5
    
  },
  bottonContainer: {
    position: 'absolute',
    display: 'flex',
    width: "100%",
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 20,
    bottom: hp(5),
  },
  next: {
    color: "white",
    width: "100%",
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    fontSize: 14
  },
  
  
  contentContainer: {
    height: hp(100),
    width: wp(100),
    display: 'flex',
    position: 'absolute',
    
    alignItems:'center',
    justifyContent:'center',
  
  },
  centerImage:{
    width: wp(25),
    height: hp(15),
    marginTop: hp(-14),
    marginBottom:hp(10),
    resizeMode: "center",   
  },
  
});

