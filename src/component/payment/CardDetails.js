import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const CardDetails = () => {
  return (
    <View className="flex-1" style={{backgroundColor: COLORS.purpleDark}}>
      <ScrollView>
        {/** Top container */}
        <View style={styles.accountDetailsTopContainer}>
          <View style={styles.topContainerLeft}>
            <Text style={styles.title}>Card Details</Text>
          </View>

          <View style={styles.topContainerRight}>
            <Text style={styles.topRightDefault}>Default</Text>
            <Text style={styles.topRightVerified}>Verified</Text>
          </View>
        </View>

        {/** secondTop container */}
        <View style={styles.thirdTopContainer}>
          {/** holder details */}

          <Text style={styles.titleGreen}>Card Holder Name</Text>
          <View>
            <TextInput
              style={styles.userInput}
              placeholderTextColor="gray"
              inputMode="text"
            />
          </View>

          <Text style={styles.titleGreen}>Card Type</Text>
          <View>
            <TextInput
              style={styles.userInput}
              placeholderTextColor="gray"
              inputMode="text"
            />
          </View>

          <Text style={styles.titleGreen}>Card Number</Text>
          <View>
            <TextInput
              style={styles.userInput}
              placeholderTextColor="gray"
              inputMode="numeric"
            />
          </View>

          <Text style={styles.titleGreen}>Expiration</Text>
          <View>
            <TextInput
              style={styles.userInput}
              placeholderTextColor="gray"
              inputMode="text"
            />
          </View>
        </View>

        {/** Third container */}
        <View style={styles.cardContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.cardTopIcon}>
              <MaterialCommunityIcons
                name="check"
                size={20}
                color={COLORS.green}
                style={{alignSelf: 'center', opacity: 0.9}}
              />
            </View>
            
            <FontAwesome
              name="cc-mastercard"
              size={heightPercentageToDP(3)}
              color={COLORS.green}
              style={{alignSelf: 'center', opacity: 0.9, marginStart: 2}}
            />
          </View>
          <Text style={styles.subtitle}>**** **** 5262</Text>
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 3,
            }}>
            <View style={{flex: 2, alignItems: 'flex-start'}}>
              <Text style={styles.subSubTitle}>Holder Name</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                Wasu Dev
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.subSubTitle}>Expiry</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                08/22
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.subSubTitle}>CVV</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                ***
              </Text>
            </View>
          </View>


         

        </View>
        

        {/** bottom Buttons */}

        <View style={styles.bottmContainer}>
          <Text style={styles.addNewAccount}>Add New Card</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  accountDetailsTopContainer: {
    height: heightPercentageToDP(10),
    padding: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  topContainerRight: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  topContainerLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(2.5),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  subtitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  subSubTitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
    opacity: 0.5,
  },
  topRightDefault: {
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 2,
    padding: heightPercentageToDP(1),
    color: COLORS.gray,
    fontFamily: FONT.regular,
  },
  topRightVerified: {
    borderRadius: 10,
    borderColor: COLORS.green,
    borderWidth: 2,
    padding: heightPercentageToDP(1),
    color: COLORS.green,
    fontFamily: FONT.regular,
  },
  cardContainer: {
    position: 'relative',
    backgroundColor: COLORS.purple,
    height: heightPercentageToDP(20),
    borderRadius: 10,
    borderColor: COLORS.purple,
    borderWidth: 2,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
  },
  thirdTopContainer: {
    padding: 10,
  },
  semiTitle: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  userInput: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
    backgroundColor: COLORS.purple,
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 5,
    paddingStart: 10,
  },
  titleGreen: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
    marginTop: 10,
  },
  
  addNewAccount: {
    backgroundColor: COLORS.green,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: FONT.semibold,
    color: COLORS.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.green,
  },
  removeAccount: {
    backgroundColor: COLORS.red,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: FONT.semibold,
    color: COLORS.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.red,
  },
  cardTopIcon: {
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 5,
    backgroundColor: COLORS.skyBlue,

    padding: 3,
  },
  bottomTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    alignItems: 'baseline',
  },
  bottmContainer: {
    flexDirection:'row',
    alignItems:'stretch',
    height: heightPercentageToDP(10),
    padding: 10,
    marginBottom: heightPercentageToDP(5),
    gap: 10
  },
});
