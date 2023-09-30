import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'

const NotificationContent = (props) => {
  

  const {
    title, name,time,amount

} = props;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerLeft}>
           
            <Image 
            source={require("../../../assets/image/user_placeholder.png")}
            style={styles.profileImage}
                />
           
            
        </View>
        
        <View style={styles.containerMiddle}> 
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.email}>{name}</Text>   
            <Text style={styles.number}>{time}</Text> 
        </View>

        <View style={styles.containerRight}> 
            <Text style={styles.amout}>{amount}</Text>
            
        </View>
        


        
      
    </SafeAreaView>
  )
}

export default NotificationContent

const styles = StyleSheet.create({

  container: {
    display:'flex',
    backgroundColor: COLORS.skyBlue,
    height:100,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop: 25,
    marginStart:10,
    marginEnd:10,
    borderWidth:2,
    borderRadius:10

    
  },
  email: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 14,
    opacity:0.5
    
    
    
  },
  name: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  number: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 14,
    opacity:0.5
       
  },

  centerImage:{
    position: "absolute",
    width: 150,
    height: "100%",
    resizeMode: "cover", 
    opacity:0.1,
    tintColor: "green",
    left:-20 
  },
  containerLeft: {
    flexDirection:'row',
    justifyContent:'flex-start',
    padding:10,
  },
  containerRight: {
    flexDirection:'column',
    flex:1,
    justifyContent:'flex-start',
    marginTop:10
  },
  profileImage:{
    width: 60,
    height: 80,
    resizeMode: "contain",  
    
    alignSelf:'center'

  },
  profileImageEdit:{
    position:'absolute',
    width: 50,
    height: 50,
    resizeMode: "cover",  
    tintColor: "green" ,
    alignSelf:'center',
    right:15,
    top:90
   
  },
  containerMiddle:{
    flexDirection:'column',
    flex:2,
    justifyContent:'center'

  }
  ,
  amout:{
    color: "white",
    fontFamily: FONT.medium,
    fontSize: 16,
    textAlign:'center',
    
  }
  
  

})