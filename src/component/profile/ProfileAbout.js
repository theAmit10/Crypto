import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileAbout = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerLeft}>
           
            <Image 
            source={require("../../../assets/image/person.jpeg")}
            className="rounded-full"
            style={styles.profileImage}
                />
            <Image 
            source={require("../../../assets/image/round_bg.png")}
            style={styles.profileImageEdit}
                />
            <Image 
            source={require("../../../assets/image/bitcoin.png")}
            style={styles.centerImage}
                />
        </View>
        
        <View style={styles.containerRight}> 
            <Text style={styles.name}>Wasu</Text>
            <Text style={styles.email}>wasu@gmail.com</Text>   
            <Text style={styles.number}>9897562429</Text> 
        </View>
        


        
      
    </SafeAreaView>
  )
}

export default ProfileAbout

const styles = StyleSheet.create({

  container: {
    display:'flex',
    backgroundColor: COLORS.skyBlue,
    width:"100%",
    height:180,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop: 25,
    marginBottom: 25
    
  },
  email: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 16,
    opacity:0.5
    
    
    
  },
  name: {
    color: "white",
    fontFamily: FONT.bold,
    fontSize: 24,
   
    
  },
  number: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 16,
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
    width: 150,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  containerRight: {
    flexDirection:'column',
    flex:1,
    justifyContent:'center'
  },
  profileImage:{
    width: 100,
    height: 100,
    marginStart:10,
    resizeMode: "cover",  
    alignSelf:'center'

  },
  profileImageEdit:{
    position:'absolute',
    width: 50,
    height: 50,
    resizeMode: "cover",  
    tintColor: COLORS.green ,
    alignSelf:'center',
    right:15,
    top:90
   
  }
  
  

})