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
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import HeaderTop from '../../component/profile/HeaderTop';
import {COLORS, FONT} from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';

const UpdateProfile = () => {
  const THEME = useSelector(state => state.theme);
  const navigation = useNavigation();
  const source = require('../../../assets/image/user_placeholder.png');
  const [imageSource, setImageSource] = useState(source);

  const [firstNameVal, setFirstName] = useState('');
  const [secondNameVal, setSecondName] = useState('');

  const updateProfile = async () => {
    const url = 'https://www.hostmansa.com/crypto/public/api/update-profile';

    const bearerToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGE5ZTY1YTM2ZWQ2NDNlOWYzZDRhOGNlZTAwMDQ3Y2U1ZTE1ZDQyYWRjNzVmZTQ0NjBjMTBjNjFjOTVhOWY3NzA4NmRmYTYyOWQ3N2JlZTciLCJpYXQiOjE2OTgwNjIzMTkuNzQ2OTcxLCJuYmYiOjE2OTgwNjIzMTkuNzQ2OTc1LCJleHAiOjE3Mjk2ODQ3MTkuNzQ2MTAzLCJzdWIiOiIxMCIsInNjb3BlcyI6W119.TkRGB7JiajYr_zVD30uiT30Xe1XOKFdTR5Tdhp9w8V7gsXS1nVPWDhKzg5g4H0aZwgAs_ROmrrk32PcsQXQF4mkdAZDzxJAZJOjhsAUpzHXnmF_o4ls-YejbqV1P1cvpLIJNYm5TUV2c4H2huC4QKqD3B6Cb_p8t49G0UdB8Hl7xd39A4TqWxsbTBi_GqrX6Hm33Tmf7VvRwYEiOMpKN91lVwSRWJISMMV9q0ndKvbMerw5DtHKdAa4DWlalBOmkvRY5qJzAmYBV9-5bczKFJ1IfKtHV7072q08Ie1J7IVcXoLwSmjxtodd55PN0YCE8mCbY65qLCtD0MVTYHhQMODVpIkFz9av37veldCqcaATSzh_bkD4M1TyzVfzQ9y5f-9GW4n1DFOQ9UTGIe0NQxL33qbEyJVvsDbt4Zm_moF_MrxFPS6ZpRcuy7DYTWIgF1rMDBsAKnmHdySClsXFQFnueiVwZ3ceAf9kNCf9u1mkNR1-FTqcvm6ZQwELe5P4Nz9Y8oRMvvIDA6egK7wZi5w2iiycoTkK8m_H7yNZ5I585_a1ebL9Qx46FHd3ujNi1nIELocn7u89Y0MN_RwgyGWJ4JuP2IZatB7wrU9Be6K3mCdNmbLbZlbnN4lC2FqSFflg94jhh7VGUrFqcggMxkYr-BaY0NR8PzULK_3wHta4';

    const formData = new FormData();
    formData.append('first_name', firstNameVal);
    formData.append('last_name', secondNameVal);
    formData.append('phone', '7677777787');
    formData.append('country', 'India');
    formData.append('gender', 'Male');
    
    formData.append('photo', {
      uri: source,
      name: 'user_placeholder.png',
      type: 'image/jpeg',
      
    });

    try {
      const response = await axios.post(url, formData, {
        headers: {
          userapisecret: 'h0vWu6MkInNlWHJVfIXmHbIbC66cQvlbSUQI09Whbp',
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error if:', error.response);
      } else {
        console.error('Error else:', error.message);
        console.error('Error else:', error);
      }
    }
  };

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
      });
      // const doc = await DocumentPicker.pickSingle()
      // const doc = await DocumentPicker.pickMultiple({
      //   type: [ DocumentPicker.types.images]
      // })
      console.log(doc);
      console.log(doc[0].uri);
      setImageSource({uri: doc[0].uri});
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <StatusBar style="light" hidden={false} />
      <HeaderTop value={'UpdateProfile'} />
      <ScrollView>
        <View
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
          }}>
          {/** Update Profile Content */}
          <View
            style={{
              backgroundColor:
                THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              ...styles.profileTopContainer,
            }}>
            {/** For Profile */}

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={imageSource}
                className="rounded-full"
                style={styles.profileImage}
              />

              <TouchableOpacity
                style={styles.profileImageEdit}
                className="rounded-full p-2"
                onPress={selectDoc}>
                <Feather
                  name="upload"
                  size={heightPercentageToDP(2.5)}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/** Input Zone */}

          <View style={styles.inputContainer}>
            <View>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}>
                First name
              </Text>
              <TextInput
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                  ...styles.userNameInput,
                }}
                placeholder="Enter your first name"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.white : COLORS.gray2
                }
                onChangeText={setFirstName}
                value={firstNameVal}></TextInput>
            </View>

            <View>
              <Text
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  ...styles.subtitle,
                }}>
                Last name
              </Text>
              <TextInput
                style={{
                  color:
                    THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  borderColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                  backgroundColor:
                    THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.lightGray,
                  ...styles.userNameInput,
                }}
                placeholder="Enter your last name"
                placeholderTextColor={
                  THEME.data === 'DARK' ? COLORS.white : COLORS.gray2
                }
                onChangeText={setSecondName}
                value={secondNameVal}></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={{margin: heightPercentageToDP(2)}}
            onPress={updateProfile}>
            <Text
              style={{
                fontFamily: FONT.bold,
                backgroundColor: COLORS.green,
                textAlign: 'center',
                padding: heightPercentageToDP(2),
                borderRadius: heightPercentageToDP(1),
                color: COLORS.white,
              }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'stretch',
  },

  profileTopContainer: {
    height: heightPercentageToDP(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(2),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    borderWidth: 1,
    borderRadius: 5,
  },

  profileImage: {
    width: heightPercentageToDP(15),
    height: heightPercentageToDP(15),
    marginStart: heightPercentageToDP(2),
    resizeMode: 'cover',
    alignSelf: 'center',
    zIndex: 1,
  },
  profileImageEdit: {
    position: 'absolute',
    backgroundColor: COLORS.green,
    alignSelf: 'center',
    left: heightPercentageToDP(15),
    top: heightPercentageToDP(6),
    zIndex: 2,
  },
  userNameInput: {
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
    fontSize: heightPercentageToDP(2),
    margin: 5,
  },
});

// import React, {useState} from 'react';
// import {View, Text, Button, Image, Platform} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import { err } from 'react-native-svg/lib/typescript/xml';

// const ProfilePictureSelector = () => {
//   const [imageSource, setImageSource] = useState(null);

//   const pickImage = async () => {
//     const options = {
//       title: 'Select Image',
//       customButtons: [
//         {name: 'customOptionKey', title: 'Choose file from Custom Option'},
//       ],
//       storageOptions: {skipBackup: true, path: 'images'},
//     };

//     try {
//       const response = await ImagePicker.showImagePicker(options);

//       if (response.didCancel) {
//         // User cancelled image picker
//         console.log('response.didCancel')
//       } else if (response.error) {
//         // ImagePicker Error
//         console.log('response.error')
//       } else if (response.customButton) {
//         // User tapped custom button
//         console.log('response.custombutton')
//       } else {
//         // User picked an image
//         // Update your profile picture with the picked image
//         console.log('pure else')
//       }
//     } catch (error) {
//       // ImagePicker error
//       console.log('error')
//       console.log('error' +error)
//     }
//   };

//   return (
//     <View>
//       {imageSource && (
//         <Image source={imageSource} style={{width: 200, height: 200}} />
//       )}
//       <Button title="Select Profile Picture" onPress={pickImage} />
//     </View>
//   );
// };

// export default ProfilePictureSelector;
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import * as Progress from 'react-native-progress';

// const UploadScreen = () => {
//   const [uploadProgress, setUploadProgress] = useState(0);

//   // Mock upload function for demonstration purposes
//   const uploadFile = async () => {
//     // Simulate a delay for demonstration
//     const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//     // Upload process simulation
//     for (let i = 0; i <= 100; i += 10) {
//       setUploadProgress(i / 100);
//       await delay(1000); // Simulate a 1-second delay per 10% progress
//     }

//     // Reset the progress bar
//     setUploadProgress(0);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Upload Progress</Text>
//       <Progress.Bar
//         progress={uploadProgress}
//         width={200}
//         height={20}
//         borderRadius={5}
//         borderColor="black"
//         color="blue"
//       />
//       <Progress.Pie progress={uploadProgress} size={50} />
//       <Progress.Circle size={30} indeterminate={true} />
//       <Progress.CircleSnail color={['red', 'green', 'blue']} />
//       <Text>{Math.round(uploadProgress * 100)}%</Text>
//       <TouchableOpacity onPress={uploadFile}>
//         <Text>Start Upload</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default UploadScreen;
