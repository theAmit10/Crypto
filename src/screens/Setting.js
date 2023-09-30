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
  ScrollView,
} from 'react-native';
import {COLORS, SIZES, FONT, images} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../component/profile/HeaderTop';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Setting'} />
      <ScrollView>
        <View style={styles.settingContent}>
          {/** Personal Information */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="user"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Personal Information</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** My Wallets */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="wallet"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>My Wallets</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Notification */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="bells"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Notification</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** History */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="clockcircleo"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>History</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Dark Mode */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="Safety"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Dark Mode</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Payment */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="carryout"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Payment</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Rate Us */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="gift"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Rate Us</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Refer & Earn */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="addusergroup"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Refer & Earn</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** About Us */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="questioncircleo"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>About Us</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** verification */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="infocirlceo"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Helpdesk</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/** Logout */}
          <View>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => navigation.navigate('Payment')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{textAlignVertical: 'center'}}
                  className="rounded-full bg-white p-2">
                  <AntDesign
                    name="logout"
                    size={heightPercentageToDP(3)}
                    color={'black'}
                    style={styles.centerImage}
                  />
                </Text>

                <Text style={styles.title}>Logout</Text>
              </View>

              <Text style={{textAlignVertical: 'center'}}>
                <AntDesign
                  name="right"
                  size={heightPercentageToDP(3)}
                  color={'white'}
                  style={styles.centerImage}
                />
              </Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: COLORS.purpleDark,
    alignItems: 'stretch',
  },
  settingContent: {
    marginTop: 25,
  },
  contentContainer: {
    display: 'flex',
    backgroundColor: COLORS.skyBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: 'white',
    fontFamily: FONT.extrabold,
    fontSize: 15,
    textAlignVertical: 'center',
    marginStart: 10,
  },
});
