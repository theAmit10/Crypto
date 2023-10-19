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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const CreateTicket = () => {
  const THEME = useSelector(state => state.theme);
  return (
    <View
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.mainCointer,
      }}>
      <ScrollView>
        {/** Content Parent Container */}

        <View
          style={{
            backgroundColor:
              THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
            ...styles.contentTopConatainer,
          }}>
          {/** Content Container */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: heightPercentageToDP(3),
              backgroundColor: COLORS.green,
            }}
            className=" rounded-full ">
            <AntDesign
              name="customerservice"
              size={heightPercentageToDP(4)}
              color={COLORS.white}
              style={{alignSelf: 'center'}}
            />
          </View>

          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.title,
            }}>
            Welcome to crypto Money HelpDesk
          </Text>
          <Text
            style={{
              color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              ...styles.subtitle,
            }}>
            If you have any issue, open a ticket
          </Text>
        </View>

        <View
          style={{
            margin: heightPercentageToDP(2),
          }}>
          <Text style={styles.subSubTitle}>Subject</Text>
          <TextInput
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.lightGray,
              color:
                THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
              borderColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.lightGray,
              ...styles.inputContainer,
            }}
            placeholderTextColor="white"
          />

          <Text style={styles.subSubTitle}>Message</Text>
          <TextInput
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.lightGray,
              color:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.lightGray,
              borderColor:
                THEME.data === 'DARK' ? COLORS.lightGray : COLORS.lightGray,
              ...styles.messageInputContainer,
            }}
            placeholderTextColor="white"
          />
        </View>

        <Text style={styles.addTicket}>Add Ticket</Text>
      </ScrollView>
    </View>
  );
};

export default CreateTicket;

const styles = StyleSheet.create({
  mainCointer: {
    flex: 1,
  },
  contentTopConatainer: {
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(1),
  },

  title: {
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2.5),
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
  },
  subSubTitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    fontSize: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(2),
  },
  addTicket: {
    color: COLORS.white,
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    backgroundColor: COLORS.green,
    margin: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    textAlign: 'center',
  },
  inputContainer: {
    width: '95%',
    lineHeight: 20,
    color: 'white',
    fontFamily: FONT.regular,
    padding: 10,
    fontSize: 14,

    borderWidth: 2,

    borderRadius: 5,
    margin: 5,
    marginEnd: 10,
  },
  messageInputContainer: {
    height: heightPercentageToDP(20),
    lineHeight: 20,

    fontFamily: FONT.regular,
    padding: 10,
    fontSize: 14,

    borderWidth: 2,

    borderRadius: 5,
    margin: 5,
    marginEnd: 10,
  },
});
