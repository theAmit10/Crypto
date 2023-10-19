import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {COLORS} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import Graph from '../component/home/Graph';
import PLTopContainer from '../component/profitAndLoss/PLTopContainer';
import PLMiddleGraph from '../component/profitAndLoss/PLMiddleGraph';
import PLAssetAllocation from '../component/profitAndLoss/PLAssetAllocation';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getHoldings, getCoinMarket} from '../../stores/market/MarketAction';
import { useFocusEffect  } from "@react-navigation/native"
import {fetchCoinMarket} from '../../stores/coinMarketSlice';
import {fetchHoldings} from '../../stores/holdingsSlice';

const ProfitAndLoss = () => {
  

  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME.data);

  const dispatch = useDispatch();
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);
  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch your holdings and coin market data
    // dispatch(fetchHoldings(/* Pass your parameters here */));
    dispatch(fetchCoinMarket());
    console.log('Hey from EFFECt');

    coins.map(c => {
      console.log('DATA : ' + c.name);
    });
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getCoinMarket();
  //     // getHoldings(holdings = dummyData)
  //   }, [])
  // )
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <HeaderTop value={'Profit & Loss'} />
        {/** Top container */}
        <PLTopContainer />

        {/** Middle container */}
        <PLMiddleGraph />

        {/** Third container */}
        <PLAssetAllocation />

        <Text>ProfitAndLoss</Text>
      </ScrollView>
    </View>
  );
};

// export default ProfitAndLoss;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.purpleDark,
  },
});



export default ProfitAndLoss;
