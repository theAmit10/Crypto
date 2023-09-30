import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import HeaderTop from '../component/profile/HeaderTop'
import Graph from '../component/home/Graph'
import PLTopContainer from '../component/profitAndLoss/PLTopContainer'

const ProfitAndLoss = () => {
  return (
    <View style={styles.mainContainer}>
    <HeaderTop value={"Profit & Loss"}/> 
    <PLTopContainer/>
      <Text>ProfitAndLoss</Text>
    </View>
  )
}

export default ProfitAndLoss

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: COLORS.purpleDark
    }
})