import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tabs from '../navigation/Tabs';
import {COLORS} from '../../constants';
import {useSelector} from 'react-redux';

const Hcontainer = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        hidden={false}
        backgroundColor={
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray
        }
        barStyle={THEME.data === 'DARK' ? 'light-content' : 'dark-content'}
      />
      <Tabs />
    </SafeAreaView>
  );
};

export default Hcontainer;

const styles = StyleSheet.create({});
