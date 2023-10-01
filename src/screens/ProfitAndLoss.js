import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import Graph from '../component/home/Graph';
import PLTopContainer from '../component/profitAndLoss/PLTopContainer';
import PLMiddleGraph from '../component/profitAndLoss/PLMiddleGraph';
import PLAssetAllocation from '../component/profitAndLoss/PLAssetAllocation';

const ProfitAndLoss = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <HeaderTop value={'Profit & Loss'} />
        {/** Top container */}
        <PLTopContainer />

        {/** Middle container */}
        <PLMiddleGraph />

        {/** Third container */}
        <PLAssetAllocation/>

        <Text>ProfitAndLoss</Text>
      </ScrollView>
    </View>
  );
};

export default ProfitAndLoss;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.purpleDark,
  },
});
