import {StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import URLHelper from '../api/URLhelper/URLHelper';
import axios from 'axios';
import {useState} from 'react';

const Login = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);

  const [emailVal, setEmail] = useState('');
  const [passwordVal, setPassword] = useState('');

  const signIn = async () => {
    if (!emailVal) {
      console.error('Enter email address');
    } else if (passwordVal.length <= 8) {
      console.error('Password must contains 8 character');
    } else {
      console.log('Else : ' + emailVal + ' | ' + passwordVal + ' | ');

      const apiUrl = URLHelper.BASE_URL + URLHelper.SIGN_IN;
      const headers = {
        userapisecret: URLHelper.USER_SECRET_KEY,
      };
      const formData = new FormData();
      formData.append('email', emailVal);
      formData.append('password', passwordVal);

      try {
        const response = await axios.post(apiUrl, formData, {headers});
        console.log('REGISTERING STARTED');
        console.log('Response:', response.data);
        console.log('REGISTERING STOP');
        
      } catch (error) {
        if (error.response) {
          console.error('Error:', error.response.data); 
          console.log('ERROR : ' + error.response.data.errors.email);
        } else {
          console.error('Error:', error.message);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        source={require('../../assets/image/back_one.png')}
        style={styles.image}
        tintColor={THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark}
      />

      <View
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(100),
          justifyContent: 'center',
        }}>
        <LinearGradient
          colors={[
            THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
            THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
          ]}
          className="rounded-full p-6"
          style={{
            position: 'absolute',
            zIndex: 1,
            top: heightPercentageToDP(15),
            left: widthPercentageToDP(50),
          }}
        />
        <LinearGradient
          colors={[
            THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
            THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
          ]}
          className="rounded-full p-20"
          style={{
            position: 'absolute',
            zIndex: 1,
            top: heightPercentageToDP(-5),
            right: widthPercentageToDP(-5),
          }}
        />
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.title,
          }}>
          Sign In
        </Text>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.subtitle,
          }}>
          Email
        </Text>
        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor: THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
            ...styles.userNameInput,
          }}
          placeholder="Type email here"
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          onChangeText={setEmail}
          value={emailVal}
          keyboardType="email-address"></TextInput>
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.subtitle,
          }}>
          Password
        </Text>
        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            borderColor: THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
            ...styles.userNameInput,
          }}
          placeholder="Type Password here"
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          onChangeText={setPassword}
          value={passwordVal}
          secureTextEntry={true}></TextInput>
        <View style={styles.accountAndForgotContainer}>
          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,

                ...styles.account,
              }}
              onPress={() => navigation.navigate('Register')}>
              Create An Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.forgot,
              }}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Account
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bottonContainer} onPress={() => navigation.navigate('Hcontainer')}>
          <Text style={styles.next}>Continue</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={[
            THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
          ]}
          className="rounded-full p-20"
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: heightPercentageToDP(-5),
            left: widthPercentageToDP(-5),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    position: 'absolute',
  },

  title: {
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: heightPercentageToDP(1),
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(2),
  },
  userNameInput: {
    width: '95%',
    fontFamily: FONT.regular,
    padding: heightPercentageToDP(1),
    fontSize: heightPercentageToDP(2),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
    margin: heightPercentageToDP(1),
  },
  bottonContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
    bottom: heightPercentageToDP(2),
    zIndex: 9,
  },
  next: {
    color: 'white',
    width: '100%',
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor: COLORS.green,
    fontSize: heightPercentageToDP(2),
    padding: heightPercentageToDP(1.5),
    borderRadius: heightPercentageToDP(1),
    textAlign: 'center',
  },
  accountAndForgotContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: heightPercentageToDP(10),
    marginEnd: heightPercentageToDP(10),
  },
  account: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(1.8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',

    marginTop: heightPercentageToDP(2),
  },
  forgot: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(1.8),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',

    marginTop: heightPercentageToDP(2),
  },
});
