import {ScrollView, StatusBar} from 'react-native';
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

const Register = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME);

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.contentContainer}>
          {/** Round Image */}

          <LinearGradient
            colors={[
              THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ]}
            className="rounded-full p-10">
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
            Create an Account
          </Text>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.titleDescription,
            }}>
            Welcome, Please Enter Your Details
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
                  THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                }></TextInput>
            </View>

            <View>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}>
                Password
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
                placeholder="@12345678"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                }></TextInput>
            </View>

            <View>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}>
                Confirm Password
              </Text>
              <TextInput
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
                  ...styles.userNameInput,
                }}
                placeholder="@12345678"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                }></TextInput>
            </View>
          </View>

          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
              borderColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
              ...styles.googleAuthContainer,
            }}>
            <Image
              source={require('../../assets/image/google.png')}
              style={styles.googleImage}
            />
            <Text
              style={{
                color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                ...styles.googleAuth,
              }}>
              Sign up with Google
            </Text>
          </View>

          <Text
            style={styles.continue}
            onPress={() => navigation.navigate('OtpAuth')}>
            Continue
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightPercentageToDP(10),
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    opacity: 0.5,
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(1.5),
    margin: 5,
  },
  userNameInput: {
    color: 'white',
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
    gap: heightPercentageToDP(1),
  },

  continue: {
    color: 'white',
    fontFamily: FONT.bold,
    backgroundColor: COLORS.green,
    borderBottomColor: COLORS.green,
    fontSize: heightPercentageToDP(2),
    padding: heightPercentageToDP(1.5),
    borderRadius: heightPercentageToDP(1),
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: heightPercentageToDP(2),
  },

  googleAuthContainer: {
    color: 'white',
    flexDirection: 'row',
    fontFamily: FONT.semibold,
    padding: heightPercentageToDP(1.5),
    borderWidth: 1,
    borderRadius: heightPercentageToDP(1),
    justifyContent: 'center',
    marginBottom: heightPercentageToDP(3),
    alignSelf: 'stretch',
    marginHorizontal: heightPercentageToDP(2),
  },
  googleAuth: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginStart: heightPercentageToDP(1),
  },
  googleImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
});
