import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const AvailableBalance = ({from, value}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.name}>Available Balance :</Text>
    
    <Text style={styles.tradeValue}>$765,678 BTC</Text>   
      
    </SafeAreaView>
  )
}

export default AvailableBalance

const styles = StyleSheet.create({

  container: {
    display:'flex',
    backgroundColor: COLORS.skyBlue,
    height:60,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    marginStart:10,
    marginEnd:10,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,
    padding:10
    
    
    
  },
  email: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: 16,  
    
  },
  name: {
    color: "white",
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center'
   
    
  },
  
  
  containerLeft: {
    width: 150,
    flexDirection:'column',
    justifyContent:'center',
    padding:10
  },
  containerRight: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-end'
  },
  profileImage:{
    width: 50,
    height: 50,
    resizeMode: "cover",  
    tintColor: "white" ,
    alignSelf:'center'
    

  },
  tradeValue:{
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center'
  }

  
  

})