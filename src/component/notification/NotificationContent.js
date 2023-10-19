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
import {useSelector} from 'react-redux';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const NotificationContent = props => {
  const THEME = useSelector(state => state.theme);

  const {title, name, time, amount} = props;
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        borderColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.container,
      }}>
      <View style={styles.containerLeft}>
        <Image
          source={require('../../../assets/image/user_placeholder.png')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.containerMiddle}>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.name,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.email,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.number,
          }}>
          {time}
        </Text>
      </View>

      <View style={styles.containerRight}>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.amout,
          }}>
          {amount}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationContent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: heightPercentageToDP(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: heightPercentageToDP(2),
    marginHorizontal: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
  },
  email: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.8),
    opacity: 0.5,
  },
  name: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  number: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.8),
    opacity: 0.5,
  },

  centerImage: {
    position: 'absolute',
    width: 150,
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
    tintColor: 'green',
    left: -20,
  },
  containerLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  containerRight: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  profileImage: {
    width: 60,
    height: 80,
    resizeMode: 'contain',

    alignSelf: 'center',
  },
  profileImageEdit: {
    position: 'absolute',
    width: 50,
    height: 50,
    resizeMode: 'cover',
    tintColor: 'green',
    alignSelf: 'center',
    right: 15,
    top: 90,
  },
  containerMiddle: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    padding: heightPercentageToDP(1),
  },
  amout: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
