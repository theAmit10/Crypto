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
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';





const Trade = () => {

  const navigation = useNavigation();

  // <TopContainer/>
                    //     <Image 
                    // source={require("../../assets/image/round_bg.png")}
                    // style={styles.profileImage}
                    //     />
                // <TopContainer/>
                // <AvailableBalance/>
                // <ExchangeFee/>

  

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="light" hidden={false}  />
    <HeaderTop value={"Trade"}/>
    <ScrollView >    
        <View style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(100)}}>  
            <View style={styles.sendContainer}>
              <View style={styles.sendContainerLeft}>  
                <Text style={styles.send}>Send</Text>
                <Text style={styles.amount}>2,856,34</Text>
                    <Image 
                    source={require("../../assets/image/bitcoin.png")}
                    style={styles.centerImage}
                        />
              </View>
            
              <View style={styles.sendContainerRight}>                   
                  <FontAwesome name={'bitcoin'} size={heightPercentageToDP(4)} color={'white'}   />   
                  <Text style={styles.tradeValue}>BTC</Text> 
                  <AntDesign name={'down'} size={heightPercentageToDP(3)} color={'white'}   />
              </View>
            </View>

           


                <View style={{ alignSelf:'center', justifyContent: 'center', flexDirection: 'row',alignItems:'center', marginTop: -20, zIndex: 2 , backgroundColor:COLORS.green }}  className="rounded-full  w-20 h-20 p-1">
                    <AntDesign name={'arrowdown'} size={heightPercentageToDP(4)} color={'white'} style={{alignItems:'center', marginEnd: -8}}  />
                    <AntDesign name={'arrowup'} size={heightPercentageToDP(4)} color={'white'} style={{alignItems:'center'}}  />
                </View>


              
          {/** Receive */}

          
                
          <View style={styles.receiveContainer}>
              <View style={styles.sendContainerLeft}>  
                <Text style={styles.send}>Receive</Text>
                <Text style={styles.amount}>18,599,43</Text>
                    <Image 
                    source={require("../../assets/image/bitcoin.png")}
                    style={styles.centerImage}
                        />
              </View>
            
              <View style={styles.sendContainerRight}>                   
                <FontAwesome5Brands name={'ethereum'} size={heightPercentageToDP(4)} color={'white'}   />   
                <Text style={styles.tradeValue}>ETH</Text> 
                <AntDesign name={'down'} size={heightPercentageToDP(3)} color={'white'}   />
              </View>
            </View>



            
            <AvailableBalance/>
            <ExchangeFee/>


            

                


              

              
              
            
                
                
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Trade


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    alignItems: 'stretch',
    
   
  },

  sendContainer: {
    
    backgroundColor: COLORS.skyBlue,
    height:heightPercentageToDP(15),
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop: 15,
    marginStart:10,
    marginEnd:10,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,
  
  },
  receiveContainer: {
    backgroundColor: COLORS.skyBlue,
    height:heightPercentageToDP(15),
    marginTop:-20,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginStart:10,
    marginEnd:10,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,
  },
  send: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),  
    
  },
  amount: {
    color: "white",
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center'
   
    
  },
  centerImage:{
    position: "absolute",
    width: 100,
    height: "100%",
    resizeMode: "cover", 
    opacity:0.1,
    tintColor: "green",
    
    
  },
  sendContainerLeft: {
    width: 150,
    flexDirection:'column',
    justifyContent:'center',
    padding:10
  },
  sendContainerRight: {
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    
    alignItems:'center',
    gap:10,
    
  },
  profileImage:{
    width: 50,
    height: 50,
    
  },
  tradeValue:{
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
    
  },

  circularImage:{
    width: 150,
    height: 150,
    
    resizeMode: "contain",  
    tintColor: "lightgreen",
    alignSelf: 'center', 

  },

  

});
