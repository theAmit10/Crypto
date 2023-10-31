import {Alert, StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONT} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';
import ProfileAbout from '../component/profile/ProfileAbout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
        ...styles.container,
      }}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Profile'} />
      <ScrollView>
        <View>
          <ProfileAbout />
        </View>

        {/** verification */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('Verification')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="Safety"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Verification
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** About Us */}

        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('KnowYourCrypto')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="question"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Know Your Crypto
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** Setting */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('Setting')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="setting"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Settings
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** History */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('History')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="clockcircleo"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                History
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** Rewards */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('Rewards')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="tago"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Rewards
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** Payment */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('Payment')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="carryout"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Payment
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** Helpdesk */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('HelpDesk')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="infocirlceo"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Helpdesk
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** About */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => navigation.navigate('KnowYourCrypto')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="questioncircleo"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                About
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>

        {/** verification */}
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.contentContainer,
            }}
            onPress={() => Alert.alert('Logging Off')}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[
                  THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                  THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                ]}
                className="rounded-full p-3">
                <AntDesign
                  name="logout"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </LinearGradient>

              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.title,
                }}>
                Logout
              </Text>
            </View>

            <Text style={{textAlignVertical: 'center'}}>
              <AntDesign
                name="right"
                size={heightPercentageToDP(2)}
                color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
                style={styles.centerImage}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'stretch',

    paddingBottom: heightPercentageToDP(10),
  },
  contentContainer: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: heightPercentageToDP(1),
  },
  title: {
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(2),
    textAlignVertical: 'center',
    marginStart: heightPercentageToDP(2),
  },
});
