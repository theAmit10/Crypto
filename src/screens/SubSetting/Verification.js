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

const Verification = () => {
  return (
    <SafeAreaView style={styles.mainCointer}>
      <ScrollView>
        <HeaderTop value={'Verification'} />

        {/** Content Parent Container */}

        <View style={styles.contentParentConatainer}>
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
                <Text style={styles.title}>Your Details</Text>
                <Text style={styles.subtitle}>
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
                <Text style={styles.title}>Scan QR code</Text>
                <Text style={styles.subtitle}>
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
                <Text style={styles.title}>Choose a password</Text>
                <Text style={styles.subtitle}>
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
                <Text style={styles.title}>Invite your team</Text>
                <Text style={styles.subtitle}>
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
                <Text style={styles.title}>Add your social</Text>
                <Text style={styles.subtitle}>
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
                <Text style={styles.title}>Your Details</Text>
                <Text style={styles.subtitle}>
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
    backgroundColor: COLORS.purpleDark,
  },
  contentParentConatainer: {
    height: heightPercentageToDP(50),
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    backgroundColor: COLORS.purple,
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
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
  },
  subtitle: {
    color: COLORS.gray2,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  verify:{
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    backgroundColor: COLORS.green,
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    borderRadius:heightPercentageToDP(2),
    textAlign:'center'

  }
});
