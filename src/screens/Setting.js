import {StatusBar, Switch} from 'react-native';
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
  ScrollView,
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {useState} from 'react';
import CoinItem from '../component/Coinitems';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../stores/ThemeSlice';
import {storeData, getData} from '../../stores/AsyncLocalStorage';
import LinearGradient from 'react-native-linear-gradient';

const Setting = () => {
  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME.data);
  const dispatch = useDispatch();

  const [isDark, setIsDark] = useState(THEME.data);

  const toggleTheme = () => {
    const newTheme = THEME.data === 'DARK' ? 'LIGHT' : 'DARK';
    dispatch(changeTheme(newTheme));
    setIsDark(newTheme);
    storeData('currentTheme', newTheme);

    console.log('COOL : ' + newTheme);
  };

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
        ...styles.container,
      }}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Setting'} />
      <ScrollView>
        <View style={styles.settingContent}>
          {/** Personal Information */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}
              onPress={() => setVisible(true)}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <AntDesign
                    name="user"
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
                  Account ID
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Email id */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}
              onPress={() => setEmailVisible(true)}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <Fontisto
                    name="email"
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
                  Change Email ID
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Change Password */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}
              onPress={() => setPasswordVisible(true)}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <AntDesign
                    name="lock"
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
                  Change Password
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** My Wallets */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}
              onPress={() => navigation.navigate('Wallet')}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <AntDesign
                    name="wallet"
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
                  My Wallets
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Notification */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}
              onPress={() => navigation.navigate('NotificationTab')}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <AntDesign
                    name="bells"
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
                  Notification
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
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
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
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
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Rate Us */}

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
                    name="gift"
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
                  Rate Us
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Refer & Earn */}

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
                    name="addusergroup"
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
                  Refer & Earn
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
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
                  About Us
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
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
                  Helpdesk
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(2)}
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Dark Mode */}

          <View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                ...styles.contentContainer,
              }}>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                    THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                  ]}
                  className="rounded-full p-3">
                  <MaterialIcons
                    name="dark-mode"
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
                  Dark Mode
                </Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <Switch
                  value={THEME.data === 'DARK'}
                  onValueChange={toggleTheme}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Logout */}

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
                  color={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Models  */}

          {/**  Account ID Models  */}

          <Modal
            animationIn={'slideInUp'}
            style={{width: '100%', marginLeft: 0, marginBottom: 0}}
            isVisible={visible}
            onTouchCancel={() => {
              setVisible(false);
            }}
            onBackdropPress={() => {
              setVisible(false);
            }}
            onBackButtonPress={() => {
              setVisible(false);
            }}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                width: '100%',
                borderTopRightRadius: heightPercentageToDP(6),
                borderTopLeftRadius: heightPercentageToDP(6),
              }}>
              <View style={styles.topView}></View>
              <View style={styles.modelContent}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelParentTitle,
                  }}>
                  Account ID
                </Text>

                <Text style={styles.modeltitle}>Account ID</Text>
                <Text
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}>
                  19876121249
                </Text>

                <Text style={styles.copybtn}>Copy</Text>
              </View>
            </View>
          </Modal>

          {/**  Email Models  */}

          <Modal
            animationIn={'slideInUp'}
            style={{width: '100%', marginLeft: 0, marginBottom: 0}}
            isVisible={emailVisible}
            onTouchCancel={() => {
              setEmailVisible(false);
            }}
            onBackdropPress={() => {
              setEmailVisible(false);
            }}
            onBackButtonPress={() => {
              setEmailVisible(false);
            }}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                width: '100%',
                borderTopRightRadius: heightPercentageToDP(6),
                borderTopLeftRadius: heightPercentageToDP(6),
              }}>
              <View style={styles.topView}></View>
              <View style={styles.modelContent}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelParentTitle,
                  }}>
                  New Email Address
                </Text>

                <Text style={styles.modeltitle}>Current Email</Text>
                <Text
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}>
                  wasu@gmail.com
                </Text>

                <Text style={styles.modeltitle}>Enter New Email</Text>
                <TextInput
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}
                  inputMode="email"
                  placeholder="wasu@gmail.com"
                  placeholderTextColor={
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark
                  }></TextInput>

                <Text style={styles.copybtn}>Continue</Text>
              </View>
            </View>
          </Modal>

          {/**  Change Password Models  */}

          <Modal
            animationIn={'slideInUp'}
            style={{width: '100%', marginLeft: 0, marginBottom: 0}}
            isVisible={passwordVisible}
            onTouchCancel={() => {
              setPasswordVisible(false);
            }}
            onBackdropPress={() => {
              setPasswordVisible(false);
            }}
            onBackButtonPress={() => {
              setPasswordVisible(false);
            }}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                width: '100%',
                borderTopRightRadius: heightPercentageToDP(6),
                borderTopLeftRadius: heightPercentageToDP(6),
              }}>
              <View style={styles.topView}></View>
              <View style={styles.modelContent}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelParentTitle,
                  }}>
                  Change Password
                </Text>

                <TextInput
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}
                  placeholder="Current Password"
                  placeholderTextColor={COLORS.gray}></TextInput>

                <TextInput
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}
                  placeholder="New Password"
                  placeholderTextColor={COLORS.gray}></TextInput>

                <TextInput
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purple,
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    ...styles.modelSubtitle,
                  }}
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.gray}></TextInput>

                <Text style={styles.copybtn}>Continue</Text>
              </View>
            </View>
          </Modal>

          {/** End Model */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'stretch',
  },
  settingContent: {
    marginTop: 25,
  },
  contentContainer: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontFamily: FONT.extrabold,
    fontSize: 15,
    textAlignVertical: 'center',
    margin: 10,
  },
  topView: {
    height: heightPercentageToDP(0.8),
    width: widthPercentageToDP(25),
    backgroundColor: COLORS.white,
    margin: heightPercentageToDP(2),
    alignSelf: 'center',
    borderRadius: heightPercentageToDP(2),
  },
  modelContent: {
    margin: heightPercentageToDP(2),
  },
  modelParentTitle: {
    fontFamily: FONT.extrabold,
    fontSize: 15,
    textAlignVertical: 'center',
    margin: heightPercentageToDP(2),
  },
  modeltitle: {
    color: COLORS.green,
    fontFamily: FONT.regular,
    marginTop: heightPercentageToDP(2),
    marginHorizontal: heightPercentageToDP(2),
  },
  modelSubtitle: {
    marginHorizontal: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(2),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1),
  },
  copybtn: {
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
