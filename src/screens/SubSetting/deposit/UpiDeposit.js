import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../component/profile/HeaderTop';
import {COLORS, FONT} from '../../../../constants';

const UpiDeposit = () => {
  const THEME = useSelector(state => state.theme);
  const navigation = useNavigation();

  const [accountIdVal, setAccountId] = useState('');
  const [amountVal, setAmount] = useState('');
  const [transactionVal, setTransactionAmount] = useState('');
  const [receiptVal, setReceipt] = useState('');
  const [remarkVal, setRemark] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <HeaderTop value={'UPI Deposit'} />

      {/** Input Container */}

      <ScrollView>
        <View style={styles.inputContainer}>
          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Exchanger Account
            </Text>
            <TextInput
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                ...styles.userNameInput,
              }}
              placeholderTextColor={
                THEME.data === 'DARK' ? COLORS.gray2 : COLORS.gray2
              }
              onChangeText={setAccountId}
              value={accountIdVal}></TextInput>
          </View>

          {/** BANK ACCOUNT DETAILS */}
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              ...styles.paymentContainer,
            }}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
                fontSize: heightPercentageToDP(2),
              }}>
              UPI Details
            </Text>

            {/** account name */}

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  UPI Holder Name :
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,

                    width: widthPercentageToDP(50),
                  }}>
                  Wasu Dev
                </Text>
              </View>
            </View>

            {/** bank name */}

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  UPI ID :
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                    width: widthPercentageToDP(50),
                  }}>
                  9876543210@ybl
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Amount
            </Text>
            <TextInput
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                ...styles.userNameInput,
              }}
              placeholderTextColor={
                THEME.data === 'DARK' ? COLORS.gray2 : COLORS.gray2
              }
              inputMode="decimal"
              onChangeText={setAmount}
              value={amountVal}></TextInput>
          </View>

          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Transaction number
            </Text>
            <TextInput
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                ...styles.userNameInput,
              }}
              placeholderTextColor={
                THEME.data === 'DARK' ? COLORS.gray2 : COLORS.gray2
              }
              onChangeText={setTransactionAmount}
              value={transactionVal}
            />
          </View>

          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Receipt
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                ...styles.userNameInput,
                padding: heightPercentageToDP(1.5),
              }}>
              Choose a file
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.subtitle,
              }}>
              Remark
            </Text>
            <TextInput
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                borderColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                backgroundColor:
                  THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                ...styles.userNameInput,
              }}
              placeholderTextColor={
                THEME.data === 'DARK' ? COLORS.gray2 : COLORS.gray2
              }
              onChangeText={setRemark}
              value={remarkVal}
              inputMode="text"
            />
          </View>
        </View>

        {/** Invest button */}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              backgroundColor: COLORS.green,
              padding: heightPercentageToDP(2),
              borderRadius: heightPercentageToDP(2),
              margin: heightPercentageToDP(2),
              width: widthPercentageToDP(92),
              textAlign: 'center',
              color: COLORS.white,
              fontFamily: FONT.medium,
              fontSize: heightPercentageToDP(2),
            }}>
            Deposit
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpiDeposit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
  },

  title: {
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(3),
  },
  titleDescription: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(1.5),
    margin: 5,
  },
  userNameInput: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 10,
  },
  paymentContainer: {
    borderRadius: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
  },
});
