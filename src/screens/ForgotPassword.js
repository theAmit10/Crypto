import {ScrollView, StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import axios from 'axios';
import URLHelper from '../api/URLhelper/URLHelper';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  const [emailVal, setEmail] = useState('');

  // to activate forgot password
  const forgotPassword = async () => {
    if (!emailVal) {
      console.error('Enter email address');
    } else {
      console.log('Else : ' + emailVal + ' | ');

      const apiUrl = URLHelper.BASE_URL + URLHelper.FORGOT_PASSWORD;
      const headers = {
        userapisecret: URLHelper.USER_SECRET_KEY,
      };
      const formData = new FormData();
      formData.append('email', emailVal);

      try {
        const response = await axios.post(apiUrl, formData, {headers});
        console.log('FORGOT PASSWORD STARTED');
        console.log('Response:', response.data);
        console.log('FORGOT PASSWORD STOP');
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
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.contentContainer}>
          {/** Round Image */}

          <LinearGradient
            colors={[
              THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ]}
            className="rounded-full p-10 mb-10">
            <Image
              source={require('../../assets/image/add-user.png')}
              style={styles.centerImage}
            />
          </LinearGradient>

          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.title,
            }}>
            Forgot Password
          </Text>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.titleDescription,
            }}>
            Enter your Email address to recovert your password
          </Text>

          <View style={styles.inputContainer}>
            <View>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}>
                Email address
              </Text>
              <TextInput
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ...styles.userNameInput,
                }}
                placeholder="example@gmail.com"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.gray2 : COLORS.gray2
                }
                onChangeText={setEmail}
                value={emailVal}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.accountAndForgotContainer}>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.resendCodeText,
              }}
              onPress={() => navigation.navigate('Register')}>
              I didn’t receive code.
            </Text>
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.resendCode,
              }}
              onPress={() => navigation.navigate('ForgotPassword')}>
              {' '}
              Resend Code
            </Text>
          </View>

          <Text
            style={styles.continue}
            onPress={forgotPassword}>
            Continue
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    height: heightPercentageToDP(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(2),
  },

  centerImage: {
    height: heightPercentageToDP(8),
    width: heightPercentageToDP(8),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: heightPercentageToDP(3),
  },
  titleDescription: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    width: widthPercentageToDP(70),
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    margin: heightPercentageToDP(1),
  },
  userNameInput: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 10,
  },
  inputContainer: {
    width: widthPercentageToDP(100),
    padding: heightPercentageToDP(2),
    alignItems: 'stretch',
  },

  continue: {
    color: 'white',
    fontFamily: FONT.bold,
    backgroundColor: COLORS.green,
    borderBottomColor: COLORS.green,
    fontSize: heightPercentageToDP(2.5),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(1),
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(10),
  },

  accountAndForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginEnd: 10,
    marginStart: 20,
  },
  resendCodeText: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: heightPercentageToDP(2),
  },
  resendCode: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: heightPercentageToDP(2),
  },
});
