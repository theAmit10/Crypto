import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONT} from '../../../../constants';
import CoinItem from '../../Coinitems';

const WithdrawReferalItem = () => {
  const [isHiddenBottomView, setIsHiddenBottomView] = useState(false);

  const hideView = () => {
    if(isHiddenBottomView) {
        setIsHiddenBottomView(false);
    }else{
        setIsHiddenBottomView(true);
    }
    
  };

  return (
    <TouchableOpacity onPress={hideView}>
      <View style={styles.container}>
        {/** left container */}

        <View style={styles.containerLeft}>
          {/** withdraw or deposit icon  */}

          <View style={styles.middleContentTopIcon} className="rounded-full ">
            <MaterialCommunityIcons
              name="bitcoin"
              size={25}
              color="white"
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </View>

          <View style={styles.middleContent}>
            <View style={styles.middleContentTop}>
              <Text style={styles.title}>0.0115</Text>

              <Text style={styles.title}>BTC</Text>
            </View>

            <Text style={styles.subtitle}>Jan 8, 2023 - 8:20am</Text>
          </View>
        </View>

        {/** Right container */}
        <View style={styles.containerRight}>
          <View style={styles.rightStatusContainerLeft}>
            <View style={styles.rightStatusContainerIconLeft}>
              <Ionicons
                name={isHiddenBottomView ? 'remove-outline' : 'add'}
                size={20}
                color={COLORS.green}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
          </View>
        </View>
      </View>

      {/** bottom View */}

      {isHiddenBottomView && (
        <View style={styles.bottmContainer}>
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 2, alignItems: 'flex-start'}}>
              <Text style={styles.bottomTitle}>Accounts ID</Text>
              <Text style={styles.subtitle}>#13173917937917</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.bottomTitle}>Tier</Text>
              <Text style={styles.subtitle}>1</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.bottomTitle}>Total Value</Text>
              <Text style={styles.subtitle}>$78.89</Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default WithdrawReferalItem;

const styles = StyleSheet.create({
  
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: heightPercentageToDP(10),
    backgroundColor: COLORS.skyBlue,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    lineHeight: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },

  title: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  subtitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
    opacity: 0.5,
  },
  containerLeft: {
    width: widthPercentageToDP(80),
    flexDirection: 'row',
  },
  containerRight: {
    flexDirection: 'row',
  },
  iconStatus: {
    backgroundColor: COLORS.green,
    padding: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: 10,
    marginEnd: 10,
    borderColor: COLORS.green,
    alignSelf: 'center',
  },
  middleContent: {
    justifyContent: 'center',
  },
  middleContentTop: {
    flexDirection: 'row',
    gap: 3,
  },
  middleContentTopIcon: {
    backgroundColor: 'orange',
    padding: heightPercentageToDP(0.5),
    alignSelf: 'center',
    marginEnd: 10,
  },

  rightStatusContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  rightStatusContainerLeft: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rightStatusContainerIconLeft: {
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 5,
  },
  rightStatusContainerIcon: {
    padding: heightPercentageToDP(0.5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rightStatusContainerIconTitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
    color: COLORS.green,
  },
  bottomTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  bottmContainer: {
    height: heightPercentageToDP(10),
    backgroundColor: COLORS.skyBlue,
    marginStart: 10,
    marginEnd: 10,
    padding: 10,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: -5,
    borderWidth: 2,
  },
});
