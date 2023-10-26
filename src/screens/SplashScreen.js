import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {getData, storeData} from '../../stores/AsyncLocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../constrants/constrants';
import {changeTheme} from '../../stores/ThemeSlice';
import {current} from '@reduxjs/toolkit';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    fetStoredTheme();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const THEME = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const updateTheme = (newTheme) => {
    const [theme, setTheme] = useState(THEME.data);

    console.log("SS update : "+newTheme)

    let mode;
    if (!newTheme) {
      mode = THEME.data === 'DARK' ? 'DARK' : 'LIGHT';
    }

    setTheme(newTheme);
    storeData('currentTheme', newTheme);
  };

  const fetStoredTheme = async () => {
    try {
      console.log('THEME SS started: ');
      const themeData = await getData('currentTheme');
      console.log('THEME SS themeData : ' + themeData);
      dispatch(changeTheme(themeData));

      if (themeData) {
        updateTheme(themeData);
        console.log('THEME SS themeData if : ' + themeData);
      }
    } catch (error) {
      console.log(error);
    }finally {
      navigation.navigate('SplashScreen')
    }
  };


  const abc = getData('currentTheme');
  console.log(abc)

  

  console.log('THEME SS THEME.data : ' + THEME.data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
      }}>
      <StatusBar hidden />

      <View
        style={{
          backgroundColor: THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
          position: 'absolute',
          zIndex: 1,
          top: heightPercentageToDP(65),
          right: widthPercentageToDP(20),
        }}
        className="rounded-full p-10"></View>

      <Image
        source={require('../../assets/image/logo.png')}
        style={{
          width: widthPercentageToDP(50),
          height: heightPercentageToDP(50),
        }}
        tintColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
      />

      <LinearGradient
        colors={[
          THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
        ]}
        className="rounded-full p-5">
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: heightPercentageToDP(65),
            right: widthPercentageToDP(20),
          }}
          className="rounded-full p-10"></View>
      </LinearGradient>

      <LinearGradient
        colors={[
          THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
        ]}
        className="rounded-full p-20"
        style={{
          position: 'absolute',
          zIndex: 1,
          top: heightPercentageToDP(65),
          left: widthPercentageToDP(-5),
        }}></LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image's resizeMode as needed
  },
});
