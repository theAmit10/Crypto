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

const ProfileAbout = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Image
          source={require('../../../assets/image/bitcoin_image.jpg')}
          style={styles.centerImage}
        />
      <View style={styles.containerLeft}>
        <Image
          source={require('../../../assets/image/person.jpeg')}
          className="rounded-full"
          style={styles.profileImage}
          
        />

        <View style={styles.profileImageEdit} className="rounded-full p-1">
          <AntDesign
            name="edit"
            size={heightPercentageToDP(3)}
            color={'white'}
          />
        </View>
        
      </View>

      <View style={styles.containerRight}>
        <Text style={styles.name}>Wasu</Text>
        <Text style={styles.email}>wasu@gmail.com</Text>
        <Text style={styles.number}>9897562429</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileAbout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.skyBlue,
    width: '100%',
    height: heightPercentageToDP(30),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(2),
  },
  email: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
    opacity: 0.5,
  },
  name: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(3),
  },
  number: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2.5),
    opacity: 0.5,
  },

  centerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.1,
    
  },
  containerLeft: {
    width: heightPercentageToDP(25),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerRight: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(17),
    marginStart: heightPercentageToDP(2),
    resizeMode: 'cover',
    alignSelf: 'center',
    zIndex: 1,
  },
  profileImageEdit: {
    position: 'absolute',
    backgroundColor: COLORS.green,
    alignSelf: 'center',
    left: heightPercentageToDP(16),
    top: heightPercentageToDP(16),
    zIndex: 2,
  },
});
