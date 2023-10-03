import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import HeaderTop from '../component/profile/HeaderTop';
import Graph from '../component/home/Graph';
import PLTopContainer from '../component/profitAndLoss/PLTopContainer';
import PLMiddleGraph from '../component/profitAndLoss/PLMiddleGraph';
import PLAssetAllocation from '../component/profitAndLoss/PLAssetAllocation';
import {connect} from 'react-redux';
import {getHoldings, getCoinMarket} from '../../stores/market/MarketAction';
import { useFocusEffect  } from "@react-navigation/native"
import {dummyData} from '../constrants/constrants'

const ProfitAndLoss = ({getHoldings, getCoinMarket, myHoldings, coins}) => {
  
  useFocusEffect(
    React.useCallback(() => {
      getCoinMarket();
      // getHoldings(holdings = dummyData)
    }, [])
  )
  
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

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page,
        )
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page,
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfitAndLoss);
