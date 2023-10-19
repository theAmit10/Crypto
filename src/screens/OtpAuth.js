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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const OtpAuth = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME.data);

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <StatusBar style="light" />

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
        OTP Authentication{' '}
      </Text>
      <Text
        style={{
          color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
          ...styles.subtitle,
        }}>
        An authentication code has been,
      </Text>
      <Text
        style={{
          color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
          ...styles.subtitleBelow,
        }}>
        sent to registered email
      </Text>

      <View style={styles.otpContainer}>
        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />

        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />

        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />

        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />

        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />

        <TextInput
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
            backgroundColor:
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ...styles.userOtpInput,
          }}
          placeholderTextColor={
            THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
          }
          inputMode="numeric"
          maxLength={1}
        />
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

      <View style={styles.bottonContainer}>
        <Text style={styles.next} onPress={() => navigation.navigate('Login')}>
          Submit
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OtpAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: heightPercentageToDP(2),
  },
  subtitleBelow: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  userOtpInput: {
    fontFamily: FONT.extrabold,
    padding: heightPercentageToDP(1),
    fontSize: heightPercentageToDP(2),

    borderWidth: 2,

    borderRadius: heightPercentageToDP(1),
    margin: heightPercentageToDP(1),
    marginHorizontal: heightPercentageToDP(1),
    textAlign: 'center',
  },
  bottonContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
    bottom: heightPercentageToDP(2),
  },
  next: {
    color: 'white',
    width: '100%',
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor: COLORS.green,
    fontSize: heightPercentageToDP(2.5),
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentageToDP(1),
    marginHorizontal: heightPercentageToDP(2),
  },
  accountAndForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentageToDP(1),
    marginHorizontal: heightPercentageToDP(2),
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
