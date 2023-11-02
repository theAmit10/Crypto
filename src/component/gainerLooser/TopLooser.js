import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {fetchCoinMarket} from '../../../stores/coinMarketSlice';
import {COLORS, FONT} from '../../../constants';
import axios from 'axios';
import {fetchTopLooserMarket} from '../../../stores/topLooserSlice';

const TopLooser = () => {
  const navigation = useNavigation();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const THEME = useSelector(state => state.theme);

  const dispatch = useDispatch();
  const coins = useSelector(state => state.coinMarket.coins);
  const topLooser = useSelector(state => state.topLooserMarket.topLooser);

  useEffect(() => {
    dispatch(fetchCoinMarket());
    dispatch(fetchTopLooserMarket());
  }, []);


  console.log("FOR TOP lOOSER")
  if(topLooser){
    console.log("FOR TOP lOOSER : "+topLooser[1]?.name )
    console.log("FOR TOP lOOSER datas : "+topLooser.length)
  }
  


  return (
    <View
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.container,
      }}>
      <FlatList
        data={topLooser}
        keyExtractor={item => item.id}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          let priceColor =
            item.minimum_buy_amount == 0
              ? COLORS.gray
              : item.minimum_buy_amount > 0
              ? COLORS.green
              : COLORS.red;

          return (
            <TouchableOpacity
              style={{
                height: heightPercentageToDP(10),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
                marginVertical: heightPercentageToDP(1),
                borderRadius: heightPercentageToDP(1),
                padding: heightPercentageToDP(1),
                marginHorizontal: heightPercentageToDP(1),
              }}
              // on press
              // onPress={() => setSelectedCoin(item)}
              onPress={() => {
                console.log(item.id);
                navigation.navigate('AssetDetails', {
                  itemId: item,
                  itemIndex: index,
                });
              }}>
              {/** LOGO */}
              <View
                style={{
                  width: widthPercentageToDP(15),
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
                    padding: heightPercentageToDP(1),
                  }}
                  className="rounded-full ">
                  <Image
                    source={{uri: item.icon}}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>

              {/** NAME */}

              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.bold,
                    fontSize: heightPercentageToDP(2),
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.regular,
                    fontSize: heightPercentageToDP(2),
                  }}>
                  {item.coin_type.toUpperCase()}
                </Text>
              </View>

              {/** FIGURES */}

              <View>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: heightPercentageToDP(2),
                    color:
                      THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                    fontFamily: FONT.medium,
                  }}>
                  $ {""+item.coin_price}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  {item.minimum_buy_amount != 0 && (
                    <AntDesign
                      name={
                        item.minimum_buy_amount < 0
                          ? 'caretdown'
                          : 'caretup'
                      }
                      size={heightPercentageToDP(1.5)}
                      color={priceColor}
                      style={{alignSelf: 'center', marginRight: 5}}
                    />
                  )}

                  <Text
                    style={{
                      marginLeft: 5,
                      color: priceColor,
                      fontFamily: FONT.regular,
                      lineHeight: 15,
                      padding: 2,
                      fontSize: heightPercentageToDP(1.5),
                      textAlignVertical: 'center',
                      textAlign: 'center',
                    }}>
                    {item.minimum_buy_amount}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 10,
              paddingBottom: heightPercentageToDP(10),
            }}></View>
        }
      />
    </View>
  );
};

export default TopLooser;

const styles = StyleSheet.create({});


// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
// import {useState} from 'react';
// import {useEffect} from 'react';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';

// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {fetchCoinMarket} from '../../../stores/coinMarketSlice';
// import {COLORS, FONT} from '../../../constants';
// import axios from 'axios';
// import {fetchTopLooserMarket} from '../../../stores/topLooserSlice';

// const TopLooser = () => {
//   const navigation = useNavigation();
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const THEME = useSelector(state => state.theme);

//   const dispatch = useDispatch();
//   const coins = useSelector(state => state.coinMarket.coins);
//   const topLooser = useSelector(state => state.topLooserMarket.topLooser);

//   useEffect(() => {
//     dispatch(fetchCoinMarket());
//     dispatch(fetchTopLooserMarket());
//   }, []);


//   console.log("FOR TOP lOOSER")
//   if(topLooser){
//     console.log("FOR TOP lOOSER : "+topLooser[1]?.name )
//     console.log("FOR TOP lOOSER datas : "+topLooser.length)
//   }
  


//   return (
//     <View
//       style={{
//         backgroundColor:
//           THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
//         ...styles.container,
//       }}>
//       <FlatList
//         data={coins}
//         keyExtractor={item => item.id}
//         contentContainerStyle={{}}
//         renderItem={({item, index}) => {
//           let priceColor =
//             item.price_change_percentage_7d_in_currency == 0
//               ? COLORS.gray
//               : item.price_change_percentage_7d_in_currency > 0
//               ? COLORS.green
//               : COLORS.red;

//           return (
//             <TouchableOpacity
//               style={{
//                 height: heightPercentageToDP(10),
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor:
//                   THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
//                 marginVertical: heightPercentageToDP(1),
//                 borderRadius: heightPercentageToDP(1),
//                 padding: heightPercentageToDP(1),
//                 marginHorizontal: heightPercentageToDP(1),
//               }}
//               // on press
//               // onPress={() => setSelectedCoin(item)}
//               onPress={() => {
//                 console.log(item.id);
//                 navigation.navigate('AssetDetails', {
//                   itemId: item,
//                   itemIndex: index,
//                 });
//               }}>
//               {/** LOGO */}
//               <View
//                 style={{
//                   width: widthPercentageToDP(15),
//                   alignItems: 'center',
//                 }}>
//                 <View
//                   style={{
//                     backgroundColor:
//                       THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
//                     padding: heightPercentageToDP(1),
//                   }}
//                   className="rounded-full ">
//                   <Image
//                     source={{uri: item.image}}
//                     style={{
//                       height: 20,
//                       width: 20,
//                       resizeMode: 'cover',
//                     }}
//                   />
//                 </View>
//               </View>

//               {/** NAME */}

//               <View
//                 style={{
//                   flex: 1,
//                 }}>
//                 <Text
//                   style={{
//                     color:
//                       THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
//                     fontFamily: FONT.bold,
//                     fontSize: heightPercentageToDP(2),
//                   }}>
//                   {item.name}
//                 </Text>
//                 <Text
//                   style={{
//                     color:
//                       THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
//                     fontFamily: FONT.regular,
//                     fontSize: heightPercentageToDP(2),
//                   }}>
//                   {item.symbol.toUpperCase()}
//                 </Text>
//               </View>

//               {/** FIGURES */}

//               <View>
//                 <Text
//                   style={{
//                     textAlign: 'right',
//                     fontSize: heightPercentageToDP(2),
//                     color:
//                       THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
//                     fontFamily: FONT.medium,
//                   }}>
//                   $ {item.current_price.toFixed(2)}
//                 </Text>

//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'flex-end',
//                   }}>
//                   {item.price_change_percentage_7d_in_currency != 0 && (
//                     <AntDesign
//                       name={
//                         item.price_change_percentage_7d_in_currency < 0
//                           ? 'caretdown'
//                           : 'caretup'
//                       }
//                       size={heightPercentageToDP(1.5)}
//                       color={priceColor}
//                       style={{alignSelf: 'center', marginRight: 5}}
//                     />
//                   )}

//                   <Text
//                     style={{
//                       marginLeft: 5,
//                       color: priceColor,
//                       fontFamily: FONT.regular,
//                       lineHeight: 15,
//                       padding: 2,
//                       fontSize: heightPercentageToDP(1.5),
//                       textAlignVertical: 'center',
//                       textAlign: 'center',
//                     }}>
//                     {item.price_change_percentage_7d_in_currency.toFixed(2)}%
//                   </Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           );
//         }}
//         ListFooterComponent={
//           <View
//             style={{
//               marginBottom: 10,
//               paddingBottom: heightPercentageToDP(10),
//             }}></View>
//         }
//       />
//     </View>
//   );
// };

// export default TopLooser;

// const styles = StyleSheet.create({});
