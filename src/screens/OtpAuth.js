import { Alert, StatusBar, TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,

} from 'react-native';
import { COLORS, FONT } from '../../constants';
import { useNavigation } from '@react-navigation/native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import URLHelper from '../api/URLhelper/URLHelper';
import { useRef, useState } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import * as Progress from 'react-native-progress';

const OtpAuth = ({ route }) => {
  const navigation = useNavigation();
  const { itemEmail } = route.params;
  // const itemEmail = ""

  const inputs = Array(6).fill(0).map((_, index) => useRef(null));
  const [otp, setOtp] = useState('');

  console.log("Email ::" + itemEmail)
  const THEME = useSelector(state => state.theme);

  // // for Password
  // const [val_one, setOne] = useState('');
  // const [val_two, setTwo] = useState('');
  // const [val_three, setThree] = useState('');
  // const [val_four, setFour] = useState('');
  // const [val_five, setFive] = useState('');
  // const [val_six, setSix] = useState('');

  // const settingOne = () => { };

  const [emailVal, setEmail] = useState(itemEmail);
  // const [otpVal, setOtp] = useState('');
  const [showProgressBar, setProgressBar] = useState(false);

  const handleChangeText = (text, index) => {
    const newOtp = otp.slice(0, index) + text + otp.slice(index + 1);
    setOtp(newOtp);
    if (text.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleCheckOtp = () => {
    if (otp.length === 6) {
      otpVerification();
      // Alert.alert('Success', 'OTP Entered Successfully :: ' + otp);

    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter all six digits of the OTP'
      });

    }
  };

  // const verify_otp = () => {
  //   console.log('Processing...');
  //   if (val_one && val_two && val_three && val_four && val_five && val_six) {
  //     const one_time_password =
  //       val_one + val_two + val_three + val_four + val_five + val_six;
  //     setOtp(one_time_password);
  //     // setEmail(itemEmail)
  //     console.log("OTP ::: " + one_time_password)
  //     otpVerification();
  //   } else {
  //     console.log('Missing field Data');
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Enter valid OTP'
  //     });
  //   }
  // };

  const otpVerification = async () => {
    if (!emailVal) {
      Toast.show({
        type: 'error',
        text1: 'Enter email address'
      });
    } else {
      console.log('Else : ' + emailVal + ' | ' + otp + ' | ');
      setProgressBar(true);
      const apiUrl = URLHelper.OTP_VERIFY;
      const headers = {
        userapisecret: URLHelper.USER_SECRET_KEY,
        'Content-Type': 'multipart/form-data',
      };
      const formData = new FormData();
      formData.append('verify_code', otp);
      formData.append('email', emailVal);

      try {
        const response = await axios.post(apiUrl, formData, { headers });
        console.log('REGISTERING STARTED');
        console.log('Response:', response.data.message);

        if (response.data.message == 'Verify successful,you can login now') {
          Toast.show({
            type: 'success',
            text1: 'Verify successful,you can login now'
          });

          navigation.navigate('Login');
        }


        setProgressBar(false);
      } catch (error) {
        setProgressBar(false);
        if (error.response) {
          console.log('Error:', error.response.data);
          console.log('ERROR : ' + error.response.data.errors.email);
          console.log('ERROR e : ' + error.response.data.message);

          if (
            error.response.data.message == 'The given data was invalid.'
          ) {

            Toast.show({
              type: 'error',
              text1: 'Invalid verification code.'
            });
          }
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

        {inputs.map((input, index) => (
          <TextInput
            key={index}
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              borderColor: THEME.data === 'DARK' ? COLORS.white : COLORS.gray2,
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
              ...styles.userOtpInput,
            }}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText(text, index)}
            ref={input}
            autoFocus={index === 0}
          />
        ))}

        {/**
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
          onChangeText={setOne}>
          {val_one}
        </TextInput>

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
          onChangeText={setTwo}>
          {val_two}
        </TextInput>

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
          onChangeText={setThree}>
          {val_three}
        </TextInput>

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
          onChangeText={setFour}>
          {val_four}
        </TextInput>

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
          onChangeText={setFive}>
          {val_five}
        </TextInput>

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
          onChangeText={setSix}>
          {val_six}
        </TextInput>
      
      
      */}


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

      {showProgressBar ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: heightPercentageToDP(3),
          }}>
          <Progress.Circle size={30} indeterminate={true} />
        </View>
      ) : (
        <TouchableOpacity onPress={handleCheckOtp} style={styles.bottonContainer}>
          <Text style={styles.next}>
            Submit
          </Text>
        </TouchableOpacity>
      )}


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
