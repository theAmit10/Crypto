import AsyncStorage from '@react-native-async-storage/async-storage';

// storing data
export const storeData = async (key , value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('FROM THEME SLICE');
  } catch (error) {
    console.log(error);
    
  }
};

// export const getData = async (value) => {
//   try {
//     const userData =  JSON.parse(await AsyncStorage.getItem(value));
//     console.log('ASYNC : ' + userData);

//     return userData != null ? userData : null;

//   } catch (error) {
//     console.log(error);
//   }
// };

export const getData = async (value) => {
  try {
    const userData = await AsyncStorage.getItem(value);
    console.log('ASYNC: ' + userData);

    return userData !== null ? userData : null;
  } catch (error) {
    console.log(error);
  }
};



