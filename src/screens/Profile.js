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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationContainer from '../component/home/NavigationContainer';
import HeaderTop from '../component/profile/HeaderTop';
import ProfileAbout from '../component/profile/ProfileAbout';
import ProfileContent from '../component/profile/ProfileContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'Profile'} />
      <ScrollView>
        <View style={styles.container}>
          <ProfileAbout />
        </View>

       


        {/** verification */}
        <View>
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
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

              <Text style={styles.title}>Verification</Text>
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
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{textAlignVertical: 'center'}}
                className="rounded-full bg-white p-2">
                <AntDesign
                  name="question"
                  size={heightPercentageToDP(3)}
                  color={'black'}
                  style={styles.centerImage}
                />
              </Text>

              <Text style={styles.title}>Know Your Crypto</Text>
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


        {/** Setting */}
        <View>
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Setting')}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{textAlignVertical: 'center'}}
                className="rounded-full bg-white p-2">
                <AntDesign
                  name="setting"
                  size={heightPercentageToDP(3)}
                  color={'black'}
                  style={styles.centerImage}
                />
              </Text>

              <Text style={styles.title}>Settings</Text>
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
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('History')}>
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

      

       
        


        {/** verification */}
        <View>
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{textAlignVertical: 'center'}}
                className="rounded-full bg-white p-2">
                <AntDesign
                  name="tago"
                  size={heightPercentageToDP(3)}
                  color={'black'}
                  style={styles.centerImage}
                />
              </Text>

              <Text style={styles.title}>Rewards</Text>
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
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
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

        
       


        {/** verification */}
        <View>
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
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


        {/** verification */}
        <View>
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
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

              <Text style={styles.title}>About</Text>
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
          <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Payment')}>
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

       
       
        
      </ScrollView>

      <NavigationContainer />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.purpleDark,
    alignItems: 'stretch',
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
