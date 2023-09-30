import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONT, images } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function OnboardingScreenTwo() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
      <ImageBackground 
        source={require("../../assets/image/onboarding.png")}
        style={styles.image}
      />
      <View style={styles.contentContainer} >
      <View >
        <Image 
            source={require("../../assets/image/wallet_two.png")}
            style={styles.centerImage}
          />
      </View>
        
        <Text style={styles.title}>Receive and Send Money</Text>
        <Text style={styles.titleTwo}> to frends!</Text>
        <Text style={styles.titleDescription}>Keep BTC ETC,XRP and many other ERC-20 based tokens, </Text>
        <View style={styles.bottonContainer}>
          <Text style={styles.skip} >Skip</Text>
          <Text style={styles.next} onPress={() => navigation.navigate("OnboardingScreenThree")} >Next</Text>
        </View>
      </View>
  
      
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
    alignItems: 'baseline',
   

  },
  titleDescription : {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: 14,
    opacity:0.5,
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
    opacity:0.5
    
  },
  bottonContainer: {
    position: 'absolute',
    display: 'flex',
    width: "100%",
    flexDirection: 'row',
    gap:  30,
    justifyContent: 'space-evenly',
   
    margin: 10,
    padding: 20,
    bottom: hp(5),

    
    

  },
  next: {
    color: "white",
    width: "50%",
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor:COLORS.green,
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    fontSize: 14
  },
  skip: {
    color: "white",
    width: "50%",
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.red,
    borderColor: COLORS.green,
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    fontSize: 14,
  },

  

  nextContainer: {
    color: "white",
    width: "50%",
    fontFamily: FONT.extrabold,
    backgroundColor: COLORS.green,
    borderBottomColor:COLORS.green,
    borderRadius: 5,
    textAlign:'center'
  },
  skipContainer: {
    color: "white",
    width: "50%",
    
    backgroundColor: COLORS.red,
    borderColor: COLORS.green,
    padding: 10,
    borderRadius: 5,
    
    
  },
  contentContainer: {
    height: hp(100),
    width: wp(100),
    display: 'flex',
    position: 'absolute',
    margin: 40,
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
  titleTwo:{
    color: "white",
    fontFamily: FONT.extrabold,
    display:'flex',
    justifyContent:'center',
    alignItems: 'baseline',
   
    fontSize: 20
  },
});

