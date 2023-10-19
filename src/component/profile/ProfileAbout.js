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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const ProfileAbout = () => {
  const THEME = useSelector(state => state.theme);
  console.log('THEME HEADER TOP : ' + THEME.data);
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.container,
      }}>
      <Image
        source={require('../../../assets/image/bitcoin_image.jpg')}
        style={styles.centerImage}
      />
      <View style={styles.containerLeft}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Image
            source={require('../../../assets/image/person.jpeg')}
            className="rounded-full"
            style={styles.profileImage}
          />

          <View style={styles.profileImageEdit} className="rounded-full p-2">
            <AntDesign
              name="edit"
              size={heightPercentageToDP(2)}
              color={'white'}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerRight}>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.name,
          }}>
          Wasu
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.email,
          }}>
          wasu@gmail.com
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.number,
          }}>
          9897562429
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileAbout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    width: '100%',
    height: heightPercentageToDP(30),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(2),
  },
  email: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
  },
  name: {
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(3),
  },
  number: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },

  centerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
  },
  containerLeft: {
    width: heightPercentageToDP(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerRight: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: heightPercentageToDP(15),
    height: heightPercentageToDP(15),
    marginStart: heightPercentageToDP(2),
    resizeMode: 'cover',
    alignSelf: 'center',
    zIndex: 1,
  },
  profileImageEdit: {
    position: 'absolute',
    backgroundColor: COLORS.green,
    alignSelf: 'center',
    left: heightPercentageToDP(15),
    top: heightPercentageToDP(16),
    zIndex: 2,
  },
});
