
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS,FONT } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import Graph from '../component/home/Graph'
import CenterGraph from '../component/home/CenterGraph'
import BottomCard from '../component/home/BottomCard'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import CoinItem from '../component/Coinitems'
import cryptocurrencies from '../../assets/data/cryptocurrencies.json'


 // flatlist data
const dailyStatus = ["Top Gainers","Top Losers"];

const HomeScreen = () => {

  const navigation = useNavigation();

 

  const [activeDayStatus, setActiveDayStatus ] = useState('Top Gainers');
 

  

  return (
    <SafeAreaView style={{backgroundColor: COLORS.purpleDark}} className="flex-1" >
      {/** Header */}
      <View style={styles.containerHeader}>
        <View style={styles.containerLeft}>
          <Image 
              source={require("../../assets/image/logo.png")}
              style={styles.centerImage}
            />
          <Text style={styles.title}>VRK Invest</Text>
        </View>



        <View style={styles.containerRight}>
          <TouchableOpacity style={styles.imageContainer} onPress={() =>  {navigation.navigate('Search')}}>
            <Image 
                  source={require("../../assets/image/round_bg.png")}
                  style={styles.centerImage}
                  />
            <Image 
                  source={require("../../assets/image/search_white.png")}
                  style={styles.centerImageIcon}
                  />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer} onPress={() =>  {navigation.navigate('NotificationTab')}} >
            <Image 
                  source={require("../../assets/image/round_bg.png")}
                  style={styles.centerImage}
                  />
            <Image 
                  source={require("../../assets/image/notification_white.png")}
                  style={styles.centerImageIcon}
                  />
            

          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer} onPress={() =>  {navigation.navigate('Setting')}} >
            <Image 
                  source={require("../../assets/image/round_bg.png")}
                  style={styles.centerImage}
                  />
            <Image 
                  source={require("../../assets/image/menu_white.png")}
                  style={styles.centerImageIcon}
                  />
            

          </TouchableOpacity>
          
          
        </View>
      
      </View>  

      {/** Main Content */}


      <ScrollView
      style={{ flex: 1, marginBottom: 70 }} 
      contentContainerStyle={{ flexGrow: 1 }}
      >

        {/** Graph */}

        <Graph/>

        {/** CenterGraph  */}

        <ScrollView horizontal={true}>
          <CenterGraph 
            image={'wallet'}
            title={'Total Balance'}
            amount={'$8,060.34'}
            itemColor={'red'}
            
          />
          <CenterGraph
            image={'barschart'}
            title={'Profit & Loss'}
            amount={'$6,640.34'}
            itemColor={'orange'}

          />
          <CenterGraph
            image={'gift'}
            title={'Rewards'}
            amount={'$1,050.14'}
            itemColor={'green'}
            
          />
          <CenterGraph
            image={'wallet'}
            title={'Total Balance'}
            amount={'$8,060.34'}
            itemColor={'red'}
          />
        </ScrollView>

        {/** Active Status Gainer OR Looser */}

        <View style={styles.containerTodayStatus}>
        <FlatList
          data={dailyStatus}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeDayStatus, item)}
              onPress={() => {
                
                setActiveDayStatus(item);
            
              }}
            >
            <Text style={styles.tabText(activeDayStatus,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: 10}}
          width={widthPercentageToDP(100)}
          horizontal
          
          
          />


           
        </View>


        

        <FlatList
          data={cryptocurrencies}
          renderItem={({item}) => <CoinItem marketCoin={item}/>}
        />
       
       
      
      
      </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({

  containerHeader: {
    display:'flex',
    backgroundColor: COLORS.skyBlue,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    lineHeight: 50
  },
  title: {
    color: "white",
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
    textAlignVertical:'center',
    alignItems: 'baseline',
    marginStart:-5,
    margin: 10,
    
  },
  centerImage:{
    width:40,
    height: 60,
    resizeMode: "cover",     
  },
  containerLeft: {
    flexDirection:'row',
  },
  containerRight: {
    flexDirection:'row',
  },
  imageContainer: {
    position: 'relative'
  },
  centerImageIcon:{
    width:20,
    height: 20,
    resizeMode: "cover",  
    position: 'absolute',
    top: 20,
    left: 10
  },
  containerTodayStatus: {
    
    backgroundColor: COLORS.skyBlue,
    
    marginTop: 10,
    marginStart:10,
    marginEnd:10,
    padding:10,
    borderWidth: 2,         
    borderRadius: 10,
    
    
    
  },
  gainer: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    paddingBottom:5,
    paddingTop:5,
    paddingStart: 30,
    paddingEnd:30,
    backgroundColor:"green",
    borderWidth: 2,         
    borderColor: COLORS.white,   
    borderRadius: 10, 
    textAlignVertical:'center',
    textAlign:'center' ,
    opacity: 0.8
      
  },
  loser: {
    color: "white",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    paddingBottom:5,
    paddingTop:5,
    paddingStart: 30,
    paddingEnd:30,
    backgroundColor:"red",
    borderWidth: 2,         
    borderColor: "red",   
    borderRadius: 10, 
    textAlignVertical:'center',
    textAlign:'center'    ,
    opacity: 0.8
  },

  tab: (activeJobType, item) => ({
  
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeJobType === item ? "green" : 'gray',
    width: widthPercentageToDP(40)
    
    
    
  }),
  tabText: (activeJobType, item) => ({
    
    color: activeJobType === item ? 'green' : "gray",
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center'
    
  }),
})

