import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const HeaderTop = ({value}) => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  console.log('THEME HEADER TOP : ' + THEME.data);

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.container,
      }}>
      <View style={styles.containerLeft}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/image/back_arrow.png')}
            style={styles.centerImage}
            tintColor={THEME.data === 'DARK' ? COLORS.lightGray : COLORS.purpleDark}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.title,
          }}>
          {value}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    height: heightPercentageToDP(7),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(2.5),
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  centerImage: {
    width: heightPercentageToDP(3),
    height: heightPercentageToDP(3),
    resizeMode: 'cover',
    tintColor: COLORS.white,
  },
  containerLeft: {
    flexDirection: 'row',
    margin: heightPercentageToDP(2),
  },
});
