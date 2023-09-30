import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONT } from '../../../constants'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Icon from 'react-native-vector-icons/AntDesign';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts"



// <Image 
// source={require("../../../assets/image/menu_white.png")}
// style={styles.centerImageIcon}
// />

const lineData = [
  { value: 0, dataPointText: "0" },
  { value: 20, dataPointText: "20" },
  { value: 18, dataPointText: "18" },
  { value: 200, dataPointText: "40" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 100, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 8, dataPointText: "85" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },

];

const CenterGraph = (props) => {

  const { image, title,amount,itemColor  } = props;

  return (
    <SafeAreaView style={styles.container}>

        <TouchableOpacity style={styles.imageContainer}>
            <Image 
                source={require("../../../assets/image/round_bg.png")}
                style={styles.centerImage}
                />
           
                <Icon name={image} style={styles.centerImageIcon} size={16} color={itemColor} />
        </TouchableOpacity>

        

        <Text style={styles.totalBal}>{title}</Text>
        <Text style={styles.totalBalAmount}>{amount}</Text>

        <View style={styles.chart}>

            <LineChart
            data={lineData}
            curved={true}
            isAnimated={true}
            // animateTogether
            pressEnabled={false}
            showStripOnPress={true}
            showTextOnPress={true}
            disableScroll={true}
            
          
            hideDataPoints
            height={heightPercentageToDP(2)}
            // showVerticalLines
            // spacing={44}
            initialSpacing={0}
            color1={itemColor}
            color2="orange"
            textColor1="green"
            dataPointsHeight={6}
            dataPointsWidth={6}
            dataPointsHeight2={6}
            dataPointsWidth2={6}
            dataPointsColor1="blue"
            dataPointsColor2="red"
            textShiftY={-2}
            textShiftX={-2}
            textFontSize={10}
            hideRules
            spacing={4}
            
            hideAxesAndRules
          />
        
        </View>

        
      
        
       
    

        
    </SafeAreaView>
  )
}

export default CenterGraph

const styles = StyleSheet.create({

  container: {
    display:'flex',
    position: 'relative',
    backgroundColor: COLORS.skyBlue,
    width:widthPercentageToDP(35),
    margin:10,
    paddingTop:15,
    height:heightPercentageToDP(28),
    flexDirection:'column',
    justifyContent:'flex-start',
    marginTop: heightPercentageToDP(3),
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 20, 

    
  },
  totalBal: {
    color: "white",
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    margin: 5,
    marginTop: 5,
    opacity:0.5
    
  },
  totalBalAmount: {
    color: "white",
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    margin: 5,
    marginTop:-5
    
   
    
  },
  totalVal: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: 12,
    paddingStart: 30,
    paddingBottom:10,
    paddingTop:10,
    paddingStart: 20,
    paddingEnd:20,
    backgroundColor:COLORS.purpleDark,
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 20,     
  },
  imageContainer:{
    position:'relative'
  },

  centerImage:{
    width:widthPercentageToDP(8),
    height: heightPercentageToDP(8),
    resizeMode: "cover",  

    
  },
  centerImageIcon:{
    width:widthPercentageToDP(6),
    height: heightPercentageToDP(4),
    position: 'absolute',
    top: 16,
    left: 7
    
  },
  containerBottom: {
    flexDirection:'row',
    position: 'absolute',
    alignItems: 'center',
    bottom:10,
    justifyContent:'space-evenly',
    gap:5

    
    
  },
  bottomContainerContent: {
    color: "white",
    fontFamily: FONT.medium,
    fontSize: 12,
    paddingStart: 20,
    paddingBottom:10,
    paddingTop:10,
    paddingStart: 20,
    paddingEnd:20,
    backgroundColor:COLORS.purpleDark,
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 10,     
  },
  
  containerTop: {
    
  }

  ,
  chartIndicatorStatus:{
    position:'absolute',
    width: widthPercentageToDP(30),
    color: COLORS.purpleDark,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    zIndex: 99,
    
    paddingBottom:10,
    paddingTop:10,
    paddingStart: 20,
    
    backgroundColor:COLORS.white,
    borderWidth: 2,         
    borderColor: COLORS.skyBlue,   
    borderRadius: 20, 
  },
  chart:{
     
     verticalAlign:'bottom',
     paddingStart:-13,
     padding: 10
    
    
  }
  
  

})