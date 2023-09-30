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
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        source={require('../../assets/image/back_one.png')}
        style={styles.image}
      />

      <View
        style={{
          
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(100),
          
          
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Username</Text>
        <TextInput
          style={styles.userNameInput}
          placeholder="Type Username here"
          placeholderTextColor="white"></TextInput>
        <Text style={styles.subtitle}>Password</Text>
        <TextInput
          style={styles.userNameInput}
          placeholder="Type Password here"
          placeholderTextColor="white"></TextInput>
        <View style={styles.accountAndForgotContainer}>
          <TouchableOpacity>
            <Text
              style={styles.account}
              onPress={() => navigation.navigate('Register')}>
              Create An Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={styles.forgot}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Account
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.bottonContainer}
          onPress={() => navigation.navigate('Hcontainer')}>
          <Text style={styles.next}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purple,
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
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
  },
  subtitle: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
  },
  userNameInput: {
    width: '95%',
    lineHeight: 20,
    color: 'white',
    fontFamily: FONT.regular,
    padding: 10,
    fontSize: 14,
    backgroundColor: COLORS.purpleDark,
    borderWidth: 2,
    borderColor: COLORS.skyBlue,
    borderRadius: 5,
    margin: 5,
    marginEnd: 10,
    opacity: 0.5,
  },
  bottonContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 20,
    marginTop: 10,
    bottom: 20,
  },
  next: {
    color: 'white',
    width: '100%',
    fontFamily: FONT.semibold,
    backgroundColor: COLORS.green,
    borderBottomColor: COLORS.green,
    fontSize: 14,
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
  },
  accountAndForgotContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginEnd: 10,
  },
  account: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
  },
  forgot: {
    color: 'white',
    fontFamily: FONT.semibold,
    fontSize: 14,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginStart: 10,
    marginTop: 20,
  },
});
