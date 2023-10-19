import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, storeData} from './AsyncLocalStorage';

// getting data

const getUser = async () => {
  try {
    const userData = await AsyncStorage.getItem('currentTheme');
    console.log('ASYNC currentTheme : ' + userData);
    return userData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    data: 'LIGHT',
  },
  reducers: {
    changeTheme(state, action) {
      state.data = action.payload;
      // storeData(action.payload);
    },
  },
});

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
