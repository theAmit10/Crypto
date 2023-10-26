import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, storeData} from './AsyncLocalStorage';
import {useEffect, useState} from 'react';

// let userData = null; // Declare a global variable

// const getUser = async () => {
//   try {
//     userData = await AsyncStorage.getItem('currentTheme');

//     console.log('ASYNC currentTheme: ' + userData);
//     return userData;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };



// const yo = getUser();
// console.log('HEYY -> ' + yo);

// Call getUser to fetch userData
// getUser().then(() => {
//   console.log('ABC -> ' + userData); // Access userData globally
// });

// getting data

// const getUser = async () => {
//   try {
//     const userData = await AsyncStorage.getItem('currentTheme');
//     console.log('ASYNC currentTheme : ' + userData);
//     return userData;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// // Function to fetch the userData value from AsyncStorage
// const getUser = async () => {
//   try {
//     const userData = await AsyncStorage.getItem('currentTheme');
//     console.log('ASYNC currentTheme : ' + userData);
//     return userData || 'LIGHT'; // Use 'LIGHT' as a default if nothing is stored
//   } catch (error) {
//     console.log(error);
//     return 'LIGHT'; // Use 'LIGHT' as a default in case of an error
//   }
// };

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
