import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONT} from '../../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import BottomCard from '../home/BottomCard';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import DateTimePicker from '@react-native-community/datetimepicker';
import WithdrawReferalItem from './withdraw/WithdrawReferalItem';
import {useSelector} from 'react-redux';

const HistoryRefarrel = () => {
  const THEME = useSelector(state => state.theme);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    // Define options for formatting the date
    const options = {year: 'numeric', month: 'long', day: '2-digit'};

    // Format the date using toLocaleDateString
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    // setShow(Platform.OS === 'ios');
    setShowFrom(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    setShowTo(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  const showMode = currentMode => {
    // setMode(currentMode);
  };

  const showModeFrom = currentMode => {
    setShowFrom(true);
    // setMode(currentMode);
  };

  const showModeTo = currentMode => {
    setShowTo(true);
    // setMode(currentMode);
  };

  const showDatepickerFrom = () => {
    showModeFrom('date');
  };

  const showDatepickerTo = () => {
    showModeTo('date');
  };

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
      }}>
      <View style={styles.dateContainer}>
        {/** Calender container */}
        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            borderColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.dateContainerLeft,
          }}>
          <Feather name="calendar" size={20} color={COLORS.green} />
          {/** From Calender  */}
          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                textAlignVertical: 'center',
                opacity: 0.5,
                fontFamily: FONT.regular,
              }}>
              From
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                textAlignVertical: 'center',
                fontFamily: FONT.regular,
              }}
              onPress={showDatepickerFrom}>
              {fromDate.getDate() + ' '} {fromDate.getMonth() + 1 + ' '}{' '}
              {fromDate.getFullYear() + ' '}
            </Text>
          </View>

          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              textAlignVertical: 'center',
            }}>
            -
          </Text>
          {/** To Calender  */}
          <View>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                textAlignVertical: 'center',
                opacity: 0.5,
                fontFamily: FONT.regular,
              }}>
              To
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                textAlignVertical: 'center',
                fontFamily: FONT.regular,
              }}
              onPress={showDatepickerTo}>
              {toDate.getDate() + ' '} {toDate.getMonth() + 1 + ' '}{' '}
              {toDate.getFullYear() + ' '}
            </Text>
          </View>

          {showFrom && (
            <DateTimePicker
              testID="dateTimePicker"
              value={fromDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeFrom}
            />
          )}

          {showTo && (
            <DateTimePicker
              testID="dateTimePicker"
              value={toDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeTo}
            />
          )}
        </View>

        <View
          style={{
            borderColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.dateContainerRight,
          }}>
          <Feather
            name="download"
            size={25}
            color="white"
            style={{alignSelf: 'center', opacity: 0.9}}
          />
        </View>
      </View>

      {/**  Container content */}

      <GestureHandlerRootView className="flex-1 mt-2">
        <ScrollView>
          <WithdrawReferalItem />
          <WithdrawReferalItem />
          <WithdrawReferalItem />
          <WithdrawReferalItem />
          <WithdrawReferalItem />
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default HistoryRefarrel;

const styles = StyleSheet.create({
  dateContainer: {
    height: heightPercentageToDP(10),
    marginTop: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  dateContainerRight: {
    flex: 1,
    backgroundColor: COLORS.green,
    padding: heightPercentageToDP(2),
    borderWidth: 2,
    borderRadius: 10,
    marginEnd: 10,
    alignSelf: 'center',
  },
  dateContainerLeft: {
    width: widthPercentageToDP(75),
    padding: heightPercentageToDP(3),
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },
});
