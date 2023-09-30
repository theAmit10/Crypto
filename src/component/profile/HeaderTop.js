import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const HeaderTop = ({value}) => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.containerLeft}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Image 
                      source={require("../../../assets/image/back_arrow.png")}
                      style={styles.centerImage}
                  />
        </TouchableOpacity>
        <Text style={styles.title}>{value}</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default HeaderTop

const styles = StyleSheet.create({

  container: {
    display:'flex',
    position:'relative',
    height: 50,
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:COLORS.skyBlue,
    alignItems:'center',
    lineHeight: 50
  },
  title: {
    color: "white",
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
    marginStart:-15,
    flex: 1,
    textAlign:'center',
    textAlignVertical:'center'     

  },
  centerImage:{
    width:30,
    height: 30,
    resizeMode: "cover",   
    tintColor:COLORS.white,
    
     
  },
  containerLeft: {
    flexDirection:'row',
    
    margin: 10,
    
  },


})