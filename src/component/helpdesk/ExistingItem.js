import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import Octicons from 'react-native-vector-icons/Octicons';

const ExistingItem = () => {
  return (
    <View style={styles.contentContainer}>
      {/** left container */}
      <View style={styles.leftContainer}>
        <View
          style={{
            padding: heightPercentageToDP(2),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.green,
            opacity: 0.5,
          }}
          className=" rounded-full ">
          <Octicons
            name="comment-discussion"
            size={heightPercentageToDP(4)}
            color={COLORS.white}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>

      {/** right container */}
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Ticket #101</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          Hey, something went wrong in my account please solve my issue
        </Text>
      </View>
    </View>
  );
};

export default ExistingItem;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
    backgroundColor: COLORS.purpleDark,
  },
  contentContainer: {
    height: heightPercentageToDP(10),

    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    flexDirection: 'row',
    borderRadius: heightPercentageToDP(2),
    gap: heightPercentageToDP(1),
    borderWidth: 1,
    borderColor: COLORS.purple,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 4,
    margin: heightPercentageToDP(1),
  },

  title: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
  },
  subtitle: {
    color: COLORS.gray2,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subSubTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(2),
  },
});
