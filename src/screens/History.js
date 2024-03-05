import {View} from 'react-native';
import React from 'react';
import HeaderTop from '../component/profile/HeaderTop';
import TobBarHistory from '../navigation/TopBarHistory';

const History = () => {
  return (
    <View className="flex-1">
      <HeaderTop value={'History'} />
      <TobBarHistory />
    </View>
  );
};

export default History;
