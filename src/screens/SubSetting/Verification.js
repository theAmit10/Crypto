import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../../../constants';
import HeaderTop from '../../component/profile/HeaderTop';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const Verification = () => {
  const THEME = useSelector(state => state.theme);
  console.log('THEME VERIFICATION : ' + THEME.data);
  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
        ...styles.mainCointer,
      }}>
      <ScrollView>
        <HeaderTop value={'Verification'} />

        {/** Content Parent Container */}

        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
            ...styles.contentParentConatainer,
          }}>
          {/** Content Container */}

          {/** your details Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.green}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Your Details
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  Please provide your name and email
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/** scan Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.green}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Scan QR code
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  Verified at least one device with 2FA
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/** payment Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.green}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Choose a password
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  must be atleast 8 characters
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/** team Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.gray}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Invite your team
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  Start collaborating with your team
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/** social Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.gray}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Add your social
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  share post to your social account
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/** Content Container */}
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.leftContainer}>
                <AntDesign
                  name="checkcircleo"
                  size={heightPercentageToDP(3)}
                  color={COLORS.green}
                  style={{alignSelf: 'center', opacity: 0.9}}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.title,
                  }}>
                  Your Details
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.subtitle,
                  }}>
                  Please provide your name and email
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text style={styles.verify}>Verify Now</Text>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
  },
  contentParentConatainer: {
    height: heightPercentageToDP(50),
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),

    borderRadius: heightPercentageToDP(2),
  },
  contentContainer: {
    height: heightPercentageToDP(10),

    flexDirection: 'row',
  },
  leftContainer: {
    width: widthPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  verify: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    backgroundColor: COLORS.green,
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    textAlign: 'center',
  },
});
