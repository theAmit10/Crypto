import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ExchangeFee = ({from, value}) => {
  return (
    <SafeAreaView style={styles.container}>
    
        <View style={styles.containerLeft}>
            <Text style={styles.title}>Exchange Fees :</Text>  
            <Text style={styles.titleDescription}>Read term and conditions</Text>   
        </View>

            
        <Text style={styles.tradeValue}>$75.89</Text>     
       
        


        
      
    </SafeAreaView>
  )
}

export default ExchangeFee

const styles = StyleSheet.create({

  container: {
    display:'flex',
    backgroundColor: COLORS.skyBlue,
    
    height:60,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 15,
    marginBottom: 25,
    marginStart:10,
    marginEnd:10,
    borderWidth: 1,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 5,
    paddingEnd:10
    
    
    
  },
  titleDescription: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 12,  
    
  },
  title: {
    color: "white",
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center'
   
    
  },
  
  containerLeft: {
    
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