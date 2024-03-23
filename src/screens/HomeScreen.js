import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useCallback, useEffect, useState,useMemo} from 'react';
import {COLORS, FONT} from '../../constants';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import Chart from '../component/home/Chart';
import LinearGradient from 'react-native-linear-gradient';
import TabGainerLooser from '../navigation/TabGainerLooser';
import {setTickerData} from '../../stores/websocketSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateAccessToken} from '../../stores/userAccessTokenSlice';
import {fetchDataFromWorkerTa} from '../../stores/websocketDataSlice';
import {useNetInfoInstance} from '@react-native-community/netinfo';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import {getMyReferralProfit, getMyProfit} from '../../stores/actions/profitaction';
import {LineChart} from 'react-native-chart-kit';
import Loading from '../component/Loading';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {

  const THEME = useSelector(state => state.theme);
  const ACCESS_TOKEN = useSelector(state => state.userAccessToken);
  const {refferalwallet,allprofit} = useSelector(state => state.profitData);
  const [loadAllData,setLoadAllData] = useState(false)
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const {netInfo} = useNetInfoInstance();
  const [internetStatus, setInternetStatus] = useState(netInfo.isConnected);

  const dispatch = useDispatch();
  const isFocused = useIsFocused()

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to exit?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     // BackHandler.exitApp(); 
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);



  const [currentScreen, setCurrentScreen] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'HomeScreen') {

        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);

        // BackHandler.exitApp();
        return true;
      } else {
        navigation.goBack();
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [currentScreen, navigation]);

  useFocusEffect(
    React.useCallback(() => {
      setCurrentScreen('HomeScreen'); // Set the current screen to 'HomeScreen' when this screen is focused
      return () => setCurrentScreen(''); // Reset the current screen when the screen is blurred
    }, [])
  );







  const memoizedData = useMemo(() => {
    // Perform any memoization logic here if needed
    // This will recompute only when refferalwallet or allprofit changes
    return {
      refferalwallet,
      allprofit,
    };
  }, [refferalwallet, allprofit]);


  // console.log("ACCESSTOKEN :: "+ACCESS_TOKEN.data)
  // console.log("MEMO DATA :: "+memoizedData.allprofit.inr_wallet_balance)

  

  const temp =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTNjMzQyZWVkYjUxMDRlZmNmNDRjOWE1OTYyODQ5ZDM4MDc0OTQ5MDEzMmM5NTQzYWI4NWM1YmEzY2M0OTMwMjcxNzg1ZDJkOTgyZDk0YTIiLCJpYXQiOjE2OTc5OTc5NDQuMTk4ODk1LCJuYmYiOjE2OTc5OTc5NDQuMTk4ODk4LCJleHAiOjE3Mjk2MjAzNDQuMTk4MjA0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M9y8sRYqKoDIXSJoWHfNra8FaSBaiKHmymZTTFpWLIQVjUsyQrIXMItLpt9Zb9SpdqHUpjzru50ZsAI16LKJAlgAQbI_5J2LG3pEZL6-GdaCgGm1PsbjpynTXaYGMPxM4bVtGfpfb_e699sM2xmEZ3RnVM930FwiSC2P1zbF0aulEg0DtSWRIEOOdMNeFL1SW-z0U85JJbPK0ROJaDFqeLHtdCnFAd3_XP5CGq3H89BIKiAsgpYWcaRGj2tb6DY5e43gIDomUJIDhw_4Hj4wgG6Oi7VurzaubXodmbqHMWyAZKQ188GYRvsswQSFwD4qPxE8FaNhlBpjcOimASSQUBcHHrFGhZQpGO5f1jeNLNTA_v_-TzfqMi7pKF2mFk4vVKrcEwQcbm06Mniw06o--i3wlWgBmuK7MK7juS4zp-fIWU1bA4FnzMZC5RySRZd_u3xwwvVRUswjpgrVkwTAGmw8KTBUdinRdzs6QeY4kh3t6wf5E6omOAdF4U50FLKP0Cm5BHVSdWvNoGbZGQRe6uybERwWdfqbkEcchq0hZoeTLS8mDMauQBkdkeBt1HvCYTPtfOnmAE9WzXMmv4achdknqB6e3gT2bpKIJeqkKGQNH2GdYFwfGcwwRXZkOLBhCVLVY0TYdDv6x5QatwsbxODw15KO1EY2niHNhwkkQ_w';
  
    useEffect(() => {
      console.log("Running UseEffect of Home Screen");
      if(ACCESS_TOKEN){
        console.log("ACCESS TOKEN")
        dispatch(getMyProfit(ACCESS_TOKEN.data))
        dispatch(getMyReferralProfit(ACCESS_TOKEN.data))
      }else{
        console.log("NO ACCESS TOKEN")
      }
      },[dispatch,ACCESS_TOKEN,isFocused])

  // const getDataProfit = ( ) => {
  // }
  


  const gotoSearch = () => {
    navigation.navigate('Search');
  };

  const gotoNotification = () => {
    navigation.navigate('NotificationTab');
  };
  const gotoSetting = () => {
    navigation.navigate('Setting');
  };

  const getUserAccessToken = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('accessToken');
      // console.log('Encrypted CODE is :: ' + jsonValue);
      dispatch(updateAccessToken(jsonValue));

      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log('error' + error);
    }
  };

  // if(allprofit){
    // console.log("We have all profit")

    // const dataWallet = {
      // datasets: [
      //   {
      //     data: allprofit?.inr_wallet_history.map(item =>
      //       parseFloat(item?.amount),
      //     ),
      //   },
      // ],
    // };
  

    // const barGraphDailyProfitData = allprofit?.daily_invested_plan_profit.map(
    //   dataPoint => dataPoint.total,
    // )

    // const AveragetTotalProfit = barGraphDailyProfitData?.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   0,
    // );


  // const refferalProfitDataSam = refferalwallet?.map((dataPoint, index) => index);
  
  

  // }


  // Total USDT balance
  // const dataWallet = {
  //   datasets: [
  //     {
  //       data: allprofit?.inr_wallet_history.map(item =>
  //         parseFloat(item?.amount),
  //       ),
  //     },
  //   ],
  // };

  const walletDataChart = () => {
    const val = allprofit?.inr_wallet_history?.length === 1 ? [0, allprofit?.inr_wallet_history[0].amount] : allprofit?.inr_wallet_history?.map(item => parseFloat(item?.amount))
  
    return val
  
  }


  const dataWallet = () => {

    // const myval = allprofit?.inr_wallet_history?.length === 1 ? [0, allprofit?.inr_wallet_history[0].amount] : allprofit?.inr_wallet_history?.map(item => parseFloat(item?.amount))

    const dataWallets = {
      datasets: [
        {
          // memoizedFilteredData.length === 1 ? [0, memoizedFilteredData[0].amount] : memoizedFilteredData?.map(item => parseFloat(item?.amount))
          // data: allprofit?.inr_wallet_history?.map(item =>
          //   parseFloat(item?.amount),
          // ),
          data: walletDataChart()
        },
      ],
    };
    return dataWallets;

  }


  const barGraphDailyProfitChart = () => {
    const val = allprofit?.daily_invested_plan_profit?.length === 1 ? [0, allprofit?.daily_invested_plan_profit[0].total] : allprofit?.daily_invested_plan_profit?.map(
      dataPoint => dataPoint.total,
    )
  
    return val
  
  }


  const barGraphDailyProfitData = () => {

    // const barGraphDailyProfitDataSam = allprofit?.daily_invested_plan_profit?.map(
    //   dataPoint => dataPoint.total,
    // )
    const barGraphDailyProfitDataSam = barGraphDailyProfitChart()

  return barGraphDailyProfitDataSam;

  }


  const AveragetTotalProfit = () => {
    const AveragetTotalProfitSam = barGraphDailyProfitData()?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return AveragetTotalProfitSam;

  }


  const refferalProfitChart = () => {
    const val = refferalwallet?.length === 1 ? [0, 1] : refferalwallet?.map((dataPoint, index) => index);
    return val
  }
  

  const refferalProfitData = () => {
    // const refferalProfitDataSAM = refferalwallet?.map((dataPoint, index) => index);
    const refferalProfitDataSAM = refferalProfitChart()


    return refferalProfitDataSAM;

  }

  const dataa = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        data: [], // Pass an empty array here to display a straight line
      },
    ],
  };


  

 
  // useEffect(() => {   
  //   if (netInfo.isConnected) {
  //     getUserAccessToken();
  //   }

  // }, [internetStatus, dispatch]);

  useEffect(() => {
    if (!internetStatus) {
      const interval = setInterval(() => {
        checkInternet();
      }, 2000); // 1000 milliseconds = 1 second

      // Clear the interval on component unmount to avoid memory leaks
      return () => clearInterval(interval);
    }
  }, [internetStatus]);

  const checkInternet = () => {
    NetInfo.refresh().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        setInternetStatus(state.isConnected);
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchDataFromWorkerTa()
        .then(marketdata => {
          console.log('Received marketdata:');
          setData(marketdata)
          dispatch(setTickerData(marketdata));
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    }, []),
  );

  function topCryptoCurrencySection() {
    return <View></View>;
  }

  

  // const getUserAccessToken = async () => {
  //   try {
  //     let jsonValue = await AsyncStorage.getItem('accessToken');
  //     // console.log('Encrypted CODE is :: ' + jsonValue);
  //     dispatch(updateAccessToken(jsonValue));

  //     return jsonValue !== null ? JSON.parse(jsonValue) : null;
  //   } catch (error) {
  //     console.log('error' + error);
  //   }
  // };

  const checkingload = () => {
    if(allprofit && refferalwallet && data && ACCESS_TOKEN){
      setLoadAllData(true)
      console.log("PROFIT -> "+allprofit.inr_wallet_history.length)
    }else{
      setLoadAllData(true)
    }

  }

  useEffect(() => {
    checkingload()
  },[loadAllData])
 

  return (
    
    <SafeAreaView
    style={{
      backgroundColor:
        THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
    }}
    className="flex-1">
    {/** Header */}

    <View
      style={{
        backgroundColor:
          THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        ...styles.containerHeader,
      }}>
      <View style={styles.containerLeft}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={styles.centerImage}
          tintColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
        />
        <Text
          style={{
            color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
            ...styles.title,
          }}>
          VRK Invest
        </Text>
      </View>

      {/** CONTAINER RIGHT */}

      <View style={styles.containerRight}>
        <TouchableOpacity
          style={styles.imageContainer}
          className="rounded-full"
          onPress={gotoSearch}>
          <LinearGradient
            colors={[
              THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ]}
            className="rounded-full p-2"
            style={styles.middleContentTopIcon}>
            <Icon
              name="search1"
              size={20}
              color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          className="rounded-full"
          onPress={gotoNotification}>
          <LinearGradient
            colors={[
              THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ]}
            className="rounded-full p-2"
            style={styles.middleContentTopIcon}>
            <Icon
              name="bells"
              size={20}
              color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          className="rounded-full"
          onPress={gotoSetting}>
          <LinearGradient
            colors={[
              THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
              THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
            ]}
            className="rounded-full p-2"
            style={styles.middleContentTopIcon}>
            <Icon
              name="setting"
              size={20}
              color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
              style={{alignSelf: 'center', opacity: 0.9}}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>

    {/** FOR TOP CRYPTO DATA */}
    {
      loadAllData ? (<ScrollView
        style={{height: heightPercentageToDP(100)}}
        showsVerticalScrollIndicator={false}>
        <View>
          {/**Top Chart Coponent */}
  
  
          {memoizedData?.allprofit ? (
            <View>
              <Chart
                containerStyles={{
                  marginTop: heightPercentageToDP(2),
                }}
                chartData={memoizedData.allprofit}
              />
            </View>
          ) : (
            <LinearGradient
        colors={[
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightWhite,
        ]}
        style={{
          height: heightPercentageToDP(30),
          margin: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(2),
        }}>
        <Loading />
      </LinearGradient>
          )}
  
          {/**Middle Chart Coponent ->  memoizedData?.allprofit */}
  
          { memoizedData?.allprofit ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              
              <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                <View
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT'
                        ? COLORS.lightGray
                        : COLORS.skyBlue,
                    borderColor:
                      THEME.data === 'LIGHT'
                        ? COLORS.lightGray
                        : COLORS.skyBlue,
                    padding: 20,
                    borderRadius: heightPercentageToDP(2),
                    marginTop: heightPercentageToDP(2),
                    marginStart: heightPercentageToDP(2),
                    width: widthPercentageToDP(34),
                   
                  }}>
                  <LinearGradient
                    colors={[
                      THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                      THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                    ]}
                    className="rounded-full p-2"
                    style={styles.CGmiddleContentTopIcon}>
                    <Icon
                      name={'wallet'}
                      size={25}
                      color={'red'}
                      style={{alignSelf: 'center', opacity: 0.9}}
                      className="rounded-full"
                    />
                  </LinearGradient>
  
                  <Text
                    style={{
                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      ...styles.CGcontentTitle,
                    }}>
                    Total Balance
                  </Text>
                  <Text
                    style={{
                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      ...styles.CGtotalBalAmount,
                    }}
                    numberOfLines={1}>
                    {Number.parseFloat(allprofit?.inr_wallet_balance).toFixed(
                      2
                    )}
                  </Text>
  
                  <View style={styles.CGchart}>
                  {
                    walletDataChart().length !== 0 ? (<LineChart
                      data={dataWallet()}
                      width={widthPercentageToDP(20)}
                      height={heightPercentageToDP(10)}
                      yAxisLabel="$"
                      yAxisSuffix="k"
                      yAxisInterval={1}
                      chartConfig={{
                        backgroundGradientFrom:
                          THEME.data === 'LIGHT'
                            ? COLORS.lightGray
                            : COLORS.skyBlue,
                        backgroundGradientTo:
                          THEME.data === 'LIGHT'
                            ? COLORS.lightGray
                            : COLORS.skyBlue,
                        decimalPlaces: 1,
  
                        color: (opacity = 1) => 'red',
                        labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
                        barRadius: 10,
  
                        style: {
                          borderRadius: 2,
                        },
                      }}
                      bezier
                      style={{
                        borderRadius: 1,
                        alignItems: 'center',
                        paddingRight: 0,
                      }}
                      withShadow
                      withHorizontalLines={false}
                      withDots={false}
                      withInnerLines={false}
                      withOuterLines={false}
                      withVerticalLabels={false}
                      withHorizontalLabels={false}
                    />) : (<View
                      style={{
                        width: widthPercentageToDP(20), height: heightPercentageToDP(10),
                        borderRadius: heightPercentageToDP(2),
                        justifyContent: 'center', alignItems: 'center',
      
                      }}>
                      <Text style={{ fontFamily: FONT.regular }}>No Graph Available</Text>
                      <Fontisto
                        name="heartbeat-alt"
                        size={heightPercentageToDP(4)}
                        color={COLORS.green}
                        style={{ alignSelf: 'center' }}
                      />
                    </View>)
                  }
                    
                  </View>
                </View>
              </TouchableOpacity>
  
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfitAndLoss')}>
                <View
                  style={{
                    backgroundColor:
                      THEME.data === 'LIGHT'
                        ? COLORS.lightGray
                        : COLORS.skyBlue,
                    borderColor:
                      THEME.data === 'LIGHT'
                        ? COLORS.lightGray
                        : COLORS.skyBlue,
                    padding: 20,
                    borderRadius: heightPercentageToDP(2),
                    margin: heightPercentageToDP(2),
                   
                    width: widthPercentageToDP(34),
                  }}>
                  <LinearGradient
                    colors={[
                      THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                      THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                    ]}
                    className="rounded-full p-2"
                    style={styles.CGmiddleContentTopIcon}>
                    <Icon
                      name={'barschart'}
                      size={25}
                      color={'orange'}
                      style={{alignSelf: 'center', opacity: 0.9}}
                      className="rounded-full"
                    />
                  </LinearGradient>
  
                  <Text
                    style={{
                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      ...styles.CGcontentTitle,
                    }}>
                    Profit & Loss
                  </Text>
                  <Text
                    style={{
                      color:
                        THEME.data === 'DARK'
                          ? COLORS.white
                          : COLORS.purpleDark,
                      ...styles.CGtotalBalAmount,
                    }}>
                    {AveragetTotalProfit() }
                  </Text>
  
                  <View style={styles.CGchart}>

                  {
                    barGraphDailyProfitData().length !== 0 ? (<LineChart
                      data={{
                        datasets: [
                          {
                            data: barGraphDailyProfitData(),
                          },
                        ],
                      }}
                      width={widthPercentageToDP(20)}
                      height={heightPercentageToDP(10)}
                      yAxisLabel="$"
                      yAxisSuffix="k"
                      yAxisInterval={1}
                      chartConfig={{
                        backgroundGradientFrom:
                          THEME.data === 'LIGHT'
                            ? COLORS.lightGray
                            : COLORS.skyBlue,
                        backgroundGradientTo:
                          THEME.data === 'LIGHT'
                            ? COLORS.lightGray
                            : COLORS.skyBlue,
                        decimalPlaces: 1,
  
                        color: (opacity = 1) => `rgba(255, 165, 0, 1)`,
                        labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
                        barRadius: 10,
  
                        style: {
                          borderRadius: 2,
                        },
                      }}
                      bezier
                      style={{
                        borderRadius: 1,
                        alignItems: 'center',
                        paddingRight: 0,
                      }}
                      withShadow
                      withHorizontalLines={false}
                      withDots={false}
                      withInnerLines={false}
                      withOuterLines={false}
                      withVerticalLabels={false}
                      withHorizontalLabels={false}
                    />) : ((<View
                      style={{
                        width: widthPercentageToDP(20), height: heightPercentageToDP(10),
                        borderRadius: heightPercentageToDP(2),
                        justifyContent: 'center', alignItems: 'center',
      
                      }}>
                      <Text style={{ fontFamily: FONT.regular }}>No Graph Available</Text>
                      <Fontisto
                        name="heartbeat-alt"
                        size={heightPercentageToDP(4)}
                        color={COLORS.green}
                        style={{ alignSelf: 'center' }}
                      />
                    </View>))
                  }

                    
                  </View>
                </View>
              </TouchableOpacity>

              {
                memoizedData?.refferalwallet && (
                  <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
                  <View
                    style={{
                      backgroundColor:
                        THEME.data === 'LIGHT'
                          ? COLORS.lightGray
                          : COLORS.skyBlue,
                      borderColor:
                        THEME.data === 'LIGHT'
                          ? COLORS.lightGray
                          : COLORS.skyBlue,
                      padding: 20,
                      borderRadius: heightPercentageToDP(2),
                      marginVertical: heightPercentageToDP(2),
                     
                      marginEnd: heightPercentageToDP(2),
                      width: widthPercentageToDP(34),
                    }}>
                    <LinearGradient
                      colors={[
                        THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
                        THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
                      ]}
                      className="rounded-full p-2"
                      style={styles.CGmiddleContentTopIcon}>
                      <Icon
                        name={'gift'}
                        size={25}
                        color={'rgba(0,255, 0, 1)'}
                        style={{alignSelf: 'center', opacity: 0.9}}
                        className="rounded-full"
                      />
                    </LinearGradient>
    
                    <Text
                      style={{
                        color:
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        ...styles.CGcontentTitle,
                      }}>
                      Rewards      
                    </Text>
                    <Text
                      style={{
                        color:
                          THEME.data === 'DARK'
                            ? COLORS.white
                            : COLORS.purpleDark,
                        ...styles.CGtotalBalAmount,
                      }}>
                      {refferalwallet?.length}
                    </Text>
    
                    <View style={styles.CGchart}>
                    {
                      refferalProfitData().length != 0 ? (<LineChart
                        data={{
                          datasets: [
                            {
                              data: refferalProfitData(),
                            },
                          ],
                        }}
                        width={widthPercentageToDP(20)}
                        height={heightPercentageToDP(10)}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1}
                        chartConfig={{
                          backgroundGradientFrom:
                            THEME.data === 'LIGHT'
                              ? COLORS.lightGray
                              : COLORS.skyBlue,
                          backgroundGradientTo:
                            THEME.data === 'LIGHT'
                              ? COLORS.lightGray
                              : COLORS.skyBlue,
                          decimalPlaces: 1,
    
                          color: (opacity = 1) => `rgba(0, 255, 0, 1)`,
                          labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
                          barRadius: 10,
    
                          style: {
                            borderRadius: 2,
                          },
                        }}
                        bezier
                        style={{
                          borderRadius: 1,
                          alignItems: 'center',
                          paddingRight: 0,
                        }}
                        withShadow
                        withHorizontalLines={false}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withVerticalLabels={false}
                        withHorizontalLabels={false}
                      />) : (<View
                        style={{
                          width: widthPercentageToDP(20), height: heightPercentageToDP(10),
                          borderRadius: heightPercentageToDP(2),
                          justifyContent: 'center', alignItems: 'center',
        
                        }}>
                        <Text style={{ fontFamily: FONT.regular }}>No Graph Available</Text>
                        <Fontisto
                          name="heartbeat-alt"
                          size={heightPercentageToDP(4)}
                          color={COLORS.green}
                          style={{ alignSelf: 'center' }}
                        />
                      </View>)
                    }
                      
                    </View>
                  </View>
                </TouchableOpacity>

                )
              }      
              
            </ScrollView>
          ) : (
            <LinearGradient
        colors={[
          THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
          THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightWhite,
        ]}
        style={{
          height: heightPercentageToDP(30),
          margin: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(2),
        }}>
        <Loading />
      </LinearGradient>
          )
        }
  
          {/** Active Status Gainer OR Looser 
          <View style={{height: heightPercentageToDP(100)}}>
          <TabGainerLooser />
        </View>
        
        */}
  
          <View style={{height: heightPercentageToDP(100)}}>
            <TabGainerLooser />
          </View>
  
          <View
            style={{
              backgroundColor:
                THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
              borderColor:
                THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
              ...styles.containerTodayStatus,
            }}></View>
        </View>
      </ScrollView>) : (<Loading/>)
    }

    

  </SafeAreaView>
  
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    lineHeight: 50,
  },
  title: {
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
    textAlignVertical: 'center',
    alignItems: 'baseline',
    marginStart: -5,
    margin: 10,
  },
  centerImage: {
    width: 40,
    height: 60,
    resizeMode: 'cover',
  },
  containerLeft: {
    flexDirection: 'row',
  },
  containerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: heightPercentageToDP(0.5),
    marginEnd: heightPercentageToDP(1),
  },
  imageContainer: {
    position: 'relative',
  },
  centerImageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 20,
    left: 10,
  },
  containerTodayStatus: {
    marginTop: heightPercentageToDP(1),
    marginStart: heightPercentageToDP(1),
    marginEnd: heightPercentageToDP(1),
    padding: heightPercentageToDP(1),
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1),
  },

  tab: (activeJobType, item) => ({
    paddingVertical: heightPercentageToDP(2) / 2,
    paddingHorizontal: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(2),
    width: widthPercentageToDP(40),
    borderWidth: 1,
    borderColor: activeJobType === item ? 'green' : 'gray',
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? 'green' : 'gray',
    fontFamily: FONT.semibold,
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
  }),
  middleContentTopIcon: {
    padding: heightPercentageToDP(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  CGcontainerGraph: {
    width: widthPercentageToDP(35),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: heightPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(2),
    padding: heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(2),
  },
  CGcontainer: {
    width: widthPercentageToDP(35),
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: heightPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(2),
    padding: heightPercentageToDP(1),
  },
  CGcontentTitle: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(1),
  },
  CGtotalBalAmount: {
    fontFamily: FONT.medium,
    fontSize: heightPercentageToDP(2),
  },
  CGmiddleContentTopIcon: {
    padding: heightPercentageToDP(1),
    alignSelf: 'flex-start',
  },
  CGchart: {},
});


// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React, {useCallback, useEffect, useState} from 'react';
// import {COLORS, FONT} from '../../constants';
// import {useFocusEffect, useNavigation} from '@react-navigation/native';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {useDispatch, useSelector} from 'react-redux';
// import Chart from '../component/home/Chart';
// import LinearGradient from 'react-native-linear-gradient';
// import TabGainerLooser from '../navigation/TabGainerLooser';
// import {setTickerData} from '../../stores/websocketSlice';
// import {fetchCoinMarket} from '../../stores/coinMarketSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {updateAccessToken} from '../../stores/userAccessTokenSlice';
// import {fetchDataFromWorkerTa} from '../../stores/websocketDataSlice';
// import {useNetInfoInstance} from '@react-native-community/netinfo';
// import NetInfo from '@react-native-community/netinfo';
// import Toast from 'react-native-toast-message';
// import {getAllMarketData} from '../../stores/actions/allmarketaction';
// import {getMyReferralProfit, getMyProfit} from '../../stores/actions/profitaction';
// import {LineChart} from 'react-native-chart-kit';
// import URLHelper from '../api/URLhelper/URLHelper';
// import axios from 'axios';
// import Loading from '../component/Loading';

// const HomeScreen = () => {
  // const navigation = useNavigation();
  // const ACCESS_TOKEN = useSelector(state => state.userAccessToken);
  // const THEME = useSelector(state => state.theme);

  // // console.log('ACCESS TOKEN :: '+ACCESS_TOKEN.data)
  // const {refferalwallet,allprofit} = useSelector(state => state.profitData);

  // // const [allprofit, setbalanceData] = useState(null);
  // // const [refferalwallet, setrefferalwallet] = useState(null);
  // const [loadingBal, setLoading] = useState(false);

  // const dispatch = useDispatch();

  // const [data, setData] = useState(null);

  // const {netInfo} = useNetInfoInstance();
  // const [internetStatus, setInternetStatus] = useState(netInfo.isConnected);

  // //  const gettingMyProfit = async () => {
  // //   const apiUrl = URLHelper.API_PROFIT;

  // //   const temp =
  // //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTNjMzQyZWVkYjUxMDRlZmNmNDRjOWE1OTYyODQ5ZDM4MDc0OTQ5MDEzMmM5NTQzYWI4NWM1YmEzY2M0OTMwMjcxNzg1ZDJkOTgyZDk0YTIiLCJpYXQiOjE2OTc5OTc5NDQuMTk4ODk1LCJuYmYiOjE2OTc5OTc5NDQuMTk4ODk4LCJleHAiOjE3Mjk2MjAzNDQuMTk4MjA0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M9y8sRYqKoDIXSJoWHfNra8FaSBaiKHmymZTTFpWLIQVjUsyQrIXMItLpt9Zb9SpdqHUpjzru50ZsAI16LKJAlgAQbI_5J2LG3pEZL6-GdaCgGm1PsbjpynTXaYGMPxM4bVtGfpfb_e699sM2xmEZ3RnVM930FwiSC2P1zbF0aulEg0DtSWRIEOOdMNeFL1SW-z0U85JJbPK0ROJaDFqeLHtdCnFAd3_XP5CGq3H89BIKiAsgpYWcaRGj2tb6DY5e43gIDomUJIDhw_4Hj4wgG6Oi7VurzaubXodmbqHMWyAZKQ188GYRvsswQSFwD4qPxE8FaNhlBpjcOimASSQUBcHHrFGhZQpGO5f1jeNLNTA_v_-TzfqMi7pKF2mFk4vVKrcEwQcbm06Mniw06o--i3wlWgBmuK7MK7juS4zp-fIWU1bA4FnzMZC5RySRZd_u3xwwvVRUswjpgrVkwTAGmw8KTBUdinRdzs6QeY4kh3t6wf5E6omOAdF4U50FLKP0Cm5BHVSdWvNoGbZGQRe6uybERwWdfqbkEcchq0hZoeTLS8mDMauQBkdkeBt1HvCYTPtfOnmAE9WzXMmv4achdknqB6e3gT2bpKIJeqkKGQNH2GdYFwfGcwwRXZkOLBhCVLVY0TYdDv6x5QatwsbxODw15KO1EY2niHNhwkkQ_w';
  // //   const headers = {
  // //     userapisecret: 'h0vWu6MkInNlWHJVfIXmHbIbC66cQvlbSUQI09Whbp',
  // //     'Content-Type': 'multipart/form-data',
  // //     Authorization: `Bearer ${temp}`,
  // //   };

  // //   try {
  // //     setLoading(true);
  // //     const response = await axios.get(apiUrl, {
  // //       headers: headers,
  // //     });

  // //     console.log(
  // //       'Profit Data :: ' + response.data.data.inr_wallet_balance,
  // //     );
  // //     setbalanceData(response.data.data);
  // //     setLoading(false);
  // //   } catch (error) {
  // //     setLoading(false);
  // //     console.log('Error:', error);
     
  // //   }
  // //  };

  // // const getMyReferralProfit = async () => {
    
  // //   const apiUrl = URLHelper.REFERREL_DETAILS;
  // //   const bearerToken =
  // //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTNjMzQyZWVkYjUxMDRlZmNmNDRjOWE1OTYyODQ5ZDM4MDc0OTQ5MDEzMmM5NTQzYWI4NWM1YmEzY2M0OTMwMjcxNzg1ZDJkOTgyZDk0YTIiLCJpYXQiOjE2OTc5OTc5NDQuMTk4ODk1LCJuYmYiOjE2OTc5OTc5NDQuMTk4ODk4LCJleHAiOjE3Mjk2MjAzNDQuMTk4MjA0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M9y8sRYqKoDIXSJoWHfNra8FaSBaiKHmymZTTFpWLIQVjUsyQrIXMItLpt9Zb9SpdqHUpjzru50ZsAI16LKJAlgAQbI_5J2LG3pEZL6-GdaCgGm1PsbjpynTXaYGMPxM4bVtGfpfb_e699sM2xmEZ3RnVM930FwiSC2P1zbF0aulEg0DtSWRIEOOdMNeFL1SW-z0U85JJbPK0ROJaDFqeLHtdCnFAd3_XP5CGq3H89BIKiAsgpYWcaRGj2tb6DY5e43gIDomUJIDhw_4Hj4wgG6Oi7VurzaubXodmbqHMWyAZKQ188GYRvsswQSFwD4qPxE8FaNhlBpjcOimASSQUBcHHrFGhZQpGO5f1jeNLNTA_v_-TzfqMi7pKF2mFk4vVKrcEwQcbm06Mniw06o--i3wlWgBmuK7MK7juS4zp-fIWU1bA4FnzMZC5RySRZd_u3xwwvVRUswjpgrVkwTAGmw8KTBUdinRdzs6QeY4kh3t6wf5E6omOAdF4U50FLKP0Cm5BHVSdWvNoGbZGQRe6uybERwWdfqbkEcchq0hZoeTLS8mDMauQBkdkeBt1HvCYTPtfOnmAE9WzXMmv4achdknqB6e3gT2bpKIJeqkKGQNH2GdYFwfGcwwRXZkOLBhCVLVY0TYdDv6x5QatwsbxODw15KO1EY2niHNhwkkQ_w';
  
  // //   const headers = {
  // //     userapisecret: 'h0vWu6MkInNlWHJVfIXmHbIbC66cQvlbSUQI09Whbp',
  // //     Authorization: `Bearer ${bearerToken}`,
  // //   };
  
  // //   try {
    
  // //     const response = await axios.get(apiUrl, {
  // //       headers: headers,
  // //     });
  
  // //     console.log('Referral Profit Data API :: ' + response.data.data.referrals);
  // //     setrefferalwallet(response.data.data.referrals)

     
  // //   } catch (error) {
  // //     console.log(error);
      
  // //   }
  // // };
  
  // // useEffect(() => {
  // //   gettingMyProfit()
  // //   getMyReferralProfit()
  // // },[])



 
  



  // console.log("loaded PROFIT :: "+allprofit?.inr_wallet_balance)


  
 

  // useEffect(() => {
  //   // dispatch(getAllMarketData());
  //   dispatch(getMyProfit(ACCESS_TOKEN.data));
  //   //  dispatch(getMyReferralProfit(ACCESS_TOKEN.data));
    
  //   if (netInfo.isConnected) {
  //     // dispatch(fetchCoinMarket());
  //     getUserAccessToken();
  //   }


  //   if(allprofit){
  //    setbalanceData(allprofit) 
  //   }


  // }, [internetStatus, dispatch]);

  // useEffect(() => {
  //   if (!internetStatus) {
  //     const interval = setInterval(() => {
  //       checkInternet();
  //     }, 2000); // 1000 milliseconds = 1 second

  //     // Clear the interval on component unmount to avoid memory leaks
  //     return () => clearInterval(interval);
  //   }
  // }, [internetStatus]);

  // const checkInternet = () => {
  //   NetInfo.refresh().then(state => {
  //     console.log('Connection type', state.type);
  //     console.log('Is connected?', state.isConnected);
  //     if (state.isConnected) {
  //       setInternetStatus(state.isConnected);
  //     }
  //   });
  // };

  // useFocusEffect(
    
  //   useCallback(() => {
  //     fetchDataFromWorkerTa()
  //       .then(marketdata => {
  //         console.log('Received marketdata:');

  //         setData(marketdata)

  //         dispatch(setTickerData(marketdata));
  //       })
  //       .catch(error => {
  //         console.log('Error fetching data:', error);
  //       });
  //   }, []),
  // );

  // function topCryptoCurrencySection() {
  //   return <View></View>;
  // }

  // const gotoSearch = () => {
  //   navigation.navigate('Search');
  // };

  // const gotoNotification = () => {
  //   navigation.navigate('NotificationTab');
  // };
  // const gotoSetting = () => {
  //   navigation.navigate('Setting');
  // };

  // const getUserAccessToken = async () => {
  //   try {
  //     let jsonValue = await AsyncStorage.getItem('accessToken');
  //     // console.log('Encrypted CODE is :: ' + jsonValue);
  //     dispatch(updateAccessToken(jsonValue));

  //     return jsonValue !== null ? JSON.parse(jsonValue) : null;
  //   } catch (error) {
  //     console.log('error' + error);
  //   }
  // };

  // // Total USDT balance
  // const dataWallet = {
  //   datasets: [
  //     {
  //       data: allprofit?.inr_wallet_history.map(item =>
  //         parseFloat(item?.amount),
  //       ),
  //     },
  //   ],
  // };

  // // For Profit

  // // For Daily Profit Data
  // const barGraphDailyProfitData = allprofit?.daily_invested_plan_profit.map(
  //   dataPoint => dataPoint.total,
  // );

  // // Using reduce to add all numbers in the list
  // const AveragetTotalProfit = barGraphDailyProfitData?.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0,
  // );

//   // // For Referral Details
//   // useEffect(() => {
//   //   dispatch(getMyReferralProfit(ACCESS_TOKEN.data));
//   //   dispatch(getMyProfit(ACCESS_TOKEN.data));
//   // }, [dispatch]);




//   // For Referral Details
//   // useEffect(() => {
//   //   getMyProfit();
//   //   // dispatch(getMyProfit(ACCESS_TOKEN.data));
//   // }, []);

//   // For Referral Profit Data
//   const refferalProfitData = refferalwallet?.map((dataPoint, index) => index);



//   //   const apiUrl = URLHelper.REFERREL_DETAILS;

//   //   const bearerToken =
//   //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTNjMzQyZWVkYjUxMDRlZmNmNDRjOWE1OTYyODQ5ZDM4MDc0OTQ5MDEzMmM5NTQzYWI4NWM1YmEzY2M0OTMwMjcxNzg1ZDJkOTgyZDk0YTIiLCJpYXQiOjE2OTc5OTc5NDQuMTk4ODk1LCJuYmYiOjE2OTc5OTc5NDQuMTk4ODk4LCJleHAiOjE3Mjk2MjAzNDQuMTk4MjA0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M9y8sRYqKoDIXSJoWHfNra8FaSBaiKHmymZTTFpWLIQVjUsyQrIXMItLpt9Zb9SpdqHUpjzru50ZsAI16LKJAlgAQbI_5J2LG3pEZL6-GdaCgGm1PsbjpynTXaYGMPxM4bVtGfpfb_e699sM2xmEZ3RnVM930FwiSC2P1zbF0aulEg0DtSWRIEOOdMNeFL1SW-z0U85JJbPK0ROJaDFqeLHtdCnFAd3_XP5CGq3H89BIKiAsgpYWcaRGj2tb6DY5e43gIDomUJIDhw_4Hj4wgG6Oi7VurzaubXodmbqHMWyAZKQ188GYRvsswQSFwD4qPxE8FaNhlBpjcOimASSQUBcHHrFGhZQpGO5f1jeNLNTA_v_-TzfqMi7pKF2mFk4vVKrcEwQcbm06Mniw06o--i3wlWgBmuK7MK7juS4zp-fIWU1bA4FnzMZC5RySRZd_u3xwwvVRUswjpgrVkwTAGmw8KTBUdinRdzs6QeY4kh3t6wf5E6omOAdF4U50FLKP0Cm5BHVSdWvNoGbZGQRe6uybERwWdfqbkEcchq0hZoeTLS8mDMauQBkdkeBt1HvCYTPtfOnmAE9WzXMmv4achdknqB6e3gT2bpKIJeqkKGQNH2GdYFwfGcwwRXZkOLBhCVLVY0TYdDv6x5QatwsbxODw15KO1EY2niHNhwkkQ_w';

//   //   const headers = {
//   //     userapisecret: 'h0vWu6MkInNlWHJVfIXmHbIbC66cQvlbSUQI09Whbp',
//   //     Authorization: `Bearer ${ACCESS_TOKEN.data}`,
//   //   };

//   //   try {
//   //     const response = await axios.get(apiUrl, {headers});
//   //     console.log('REQUEST STARTED');
//   //     console.log('Response:', response.data.data);

//   //     setReferralData(response.data.data);
//   //     setProgressBar(false);

//   //     console.log('REQUEST STOPPED');
//   //   } catch (error) {
//   //     setProgressBar(false);
//   //     if (error.response) {
//   //       console.error('Error:', error.response);
//   //     } else {
//   //       console.error('Error:', error.message);
//   //     }
//   //   }
//   // };

//   return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor:
    //       THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
    //   }}
    //   className="flex-1">
    //   {/** Header */}

    //   <View
    //     style={{
    //       backgroundColor:
    //         THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
    //       ...styles.containerHeader,
    //     }}>
    //     <View style={styles.containerLeft}>
    //       <Image
    //         source={require('../../assets/image/logo.png')}
    //         style={styles.centerImage}
    //         tintColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
    //       />
    //       <Text
    //         style={{
    //           color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
    //           ...styles.title,
    //         }}>
    //         VRK Invest
    //       </Text>
    //     </View>

    //     {/** CONTAINER RIGHT */}

    //     <View style={styles.containerRight}>
    //       <TouchableOpacity
    //         style={styles.imageContainer}
    //         className="rounded-full"
    //         onPress={gotoSearch}>
    //         <LinearGradient
    //           colors={[
    //             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //           ]}
    //           className="rounded-full p-2"
    //           style={styles.middleContentTopIcon}>
    //           <Icon
    //             name="search1"
    //             size={20}
    //             color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
    //             style={{alignSelf: 'center', opacity: 0.9}}
    //           />
    //         </LinearGradient>
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         style={styles.imageContainer}
    //         className="rounded-full"
    //         onPress={gotoNotification}>
    //         <LinearGradient
    //           colors={[
    //             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //           ]}
    //           className="rounded-full p-2"
    //           style={styles.middleContentTopIcon}>
    //           <Icon
    //             name="bells"
    //             size={20}
    //             color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
    //             style={{alignSelf: 'center', opacity: 0.9}}
    //           />
    //         </LinearGradient>
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         style={styles.imageContainer}
    //         className="rounded-full"
    //         onPress={gotoSetting}>
    //         <LinearGradient
    //           colors={[
    //             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //           ]}
    //           className="rounded-full p-2"
    //           style={styles.middleContentTopIcon}>
    //           <Icon
    //             name="setting"
    //             size={20}
    //             color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
    //             style={{alignSelf: 'center', opacity: 0.9}}
    //           />
    //         </LinearGradient>
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    //   {/** FOR TOP CRYPTO DATA */}

    //   {topCryptoCurrencySection()}

    //   <ScrollView
    //     style={{height: heightPercentageToDP(100)}}
    //     showsVerticalScrollIndicator={false}>
    //     <View>
    //       {/**Top Chart Coponent */}


    //       {false && (
    //         <View>
    //           <Chart
    //             containerStyles={{
    //               marginTop: heightPercentageToDP(2),
    //             }}
    //             chartData={allprofit}
    //           />
    //         </View>
    //       )}

    //       {/**Middle Chart Coponent */}

    //       {allprofit && (
    //         <ScrollView
    //           horizontal={true}
    //           showsHorizontalScrollIndicator={false}>
    //           <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
    //             <View
    //               style={{
    //                 backgroundColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 borderColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 padding: 20,
    //                 borderRadius: heightPercentageToDP(2),
    //                 marginTop: heightPercentageToDP(2),
    //                 marginStart: heightPercentageToDP(2),
    //                 width: widthPercentageToDP(34),
    //               }}>
    //               <LinearGradient
    //                 colors={[
    //                   THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //                   THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //                 ]}
    //                 className="rounded-full p-2"
    //                 style={styles.CGmiddleContentTopIcon}>
    //                 <Icon
    //                   name={'wallet'}
    //                   size={25}
    //                   color={'red'}
    //                   style={{alignSelf: 'center', opacity: 0.9}}
    //                   className="rounded-full"
    //                 />
    //               </LinearGradient>

    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGcontentTitle,
    //                 }}>
    //                 Total Balance
    //               </Text>
    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGtotalBalAmount,
    //                 }}
    //                 numberOfLines={1}>
    //                 {Number.parseFloat(allprofit?.usdt_wallet_balance).toFixed(
    //                   2,
    //                 )}
    //               </Text>

    //               <View style={styles.CGchart}>
    //                 <LineChart
    //                   data={dataWallet}
    //                   width={widthPercentageToDP(20)}
    //                   height={heightPercentageToDP(10)}
    //                   yAxisLabel="$"
    //                   yAxisSuffix="k"
    //                   yAxisInterval={1}
    //                   chartConfig={{
    //                     backgroundGradientFrom:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     backgroundGradientTo:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     decimalPlaces: 1,

    //                     color: (opacity = 1) => 'red',
    //                     labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
    //                     barRadius: 10,

    //                     style: {
    //                       borderRadius: 2,
    //                     },
    //                   }}
    //                   bezier
    //                   style={{
    //                     borderRadius: 1,
    //                     alignItems: 'center',
    //                     paddingRight: 0,
    //                   }}
    //                   withShadow
    //                   withHorizontalLines={false}
    //                   withDots={false}
    //                   withInnerLines={false}
    //                   withOuterLines={false}
    //                   withVerticalLabels={false}
    //                   withHorizontalLabels={false}
    //                 />
    //               </View>
    //             </View>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('ProfitAndLoss')}>
    //             <View
    //               style={{
    //                 backgroundColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 borderColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 padding: 20,
    //                 borderRadius: heightPercentageToDP(2),
    //                 margin: heightPercentageToDP(2),
    //                 width: widthPercentageToDP(34),
    //               }}>
    //               <LinearGradient
    //                 colors={[
    //                   THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //                   THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //                 ]}
    //                 className="rounded-full p-2"
    //                 style={styles.CGmiddleContentTopIcon}>
    //                 <Icon
    //                   name={'barschart'}
    //                   size={25}
    //                   color={'orange'}
    //                   style={{alignSelf: 'center', opacity: 0.9}}
    //                   className="rounded-full"
    //                 />
    //               </LinearGradient>

    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGcontentTitle,
    //                 }}>
    //                 Profit & Loss
    //               </Text>
    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGtotalBalAmount,
    //                 }}>
    //                 {AveragetTotalProfit}
    //               </Text>

    //               <View style={styles.CGchart}>
    //                 <LineChart
    //                   data={{
    //                     datasets: [
    //                       {
    //                         data: barGraphDailyProfitData,
    //                       },
    //                     ],
    //                   }}
    //                   width={widthPercentageToDP(20)}
    //                   height={heightPercentageToDP(10)}
    //                   yAxisLabel="$"
    //                   yAxisSuffix="k"
    //                   yAxisInterval={1}
    //                   chartConfig={{
    //                     backgroundGradientFrom:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     backgroundGradientTo:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     decimalPlaces: 1,

    //                     color: (opacity = 1) => `rgba(255, 165, 0, 1)`,
    //                     labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
    //                     barRadius: 10,

    //                     style: {
    //                       borderRadius: 2,
    //                     },
    //                   }}
    //                   bezier
    //                   style={{
    //                     borderRadius: 1,
    //                     alignItems: 'center',
    //                     paddingRight: 0,
    //                   }}
    //                   withShadow
    //                   withHorizontalLines={false}
    //                   withDots={false}
    //                   withInnerLines={false}
    //                   withOuterLines={false}
    //                   withVerticalLabels={false}
    //                   withHorizontalLabels={false}
    //                 />
    //               </View>
    //             </View>
    //           </TouchableOpacity>

    //          <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
    //             <View
    //               style={{
    //                 backgroundColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 borderColor:
    //                   THEME.data === 'LIGHT'
    //                     ? COLORS.lightGray
    //                     : COLORS.skyBlue,
    //                 padding: 20,
    //                 borderRadius: heightPercentageToDP(2),
    //                 marginVertical: heightPercentageToDP(2),

    //                 marginEnd: heightPercentageToDP(2),
    //                 width: widthPercentageToDP(34),
    //               }}>
    //               <LinearGradient
    //                 colors={[
    //                   THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
    //                   THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
    //                 ]}
    //                 className="rounded-full p-2"
    //                 style={styles.CGmiddleContentTopIcon}>
    //                 <Icon
    //                   name={'gift'}
    //                   size={25}
    //                   color={'rgba(0,255, 0, 1)'}
    //                   style={{alignSelf: 'center', opacity: 0.9}}
    //                   className="rounded-full"
    //                 />
    //               </LinearGradient>

    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGcontentTitle,
    //                 }}>
    //                 Rewards
    //               </Text>
    //               <Text
    //                 style={{
    //                   color:
    //                     THEME.data === 'DARK'
    //                       ? COLORS.white
    //                       : COLORS.purpleDark,
    //                   ...styles.CGtotalBalAmount,
    //                 }}>
    //                 {refferalwallet?.length}
    //               </Text>

    //               <View style={styles.CGchart}>
    //                 <LineChart
    //                   data={{
    //                     datasets: [
    //                       {
    //                         data: refferalProfitData,
    //                       },
    //                     ],
    //                   }}
    //                   width={widthPercentageToDP(20)}
    //                   height={heightPercentageToDP(10)}
    //                   yAxisLabel="$"
    //                   yAxisSuffix="k"
    //                   yAxisInterval={1}
    //                   chartConfig={{
    //                     backgroundGradientFrom:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     backgroundGradientTo:
    //                       THEME.data === 'LIGHT'
    //                         ? COLORS.lightGray
    //                         : COLORS.skyBlue,
    //                     decimalPlaces: 1,

    //                     color: (opacity = 1) => `rgba(0, 255, 0, 1)`,
    //                     labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
    //                     barRadius: 10,

    //                     style: {
    //                       borderRadius: 2,
    //                     },
    //                   }}
    //                   bezier
    //                   style={{
    //                     borderRadius: 1,
    //                     alignItems: 'center',
    //                     paddingRight: 0,
    //                   }}
    //                   withShadow
    //                   withHorizontalLines={false}
    //                   withDots={false}
    //                   withInnerLines={false}
    //                   withOuterLines={false}
    //                   withVerticalLabels={false}
    //                   withHorizontalLabels={false}
    //                 />
    //               </View>
    //             </View>
    //           </TouchableOpacity>
            
            
            

             
    //         </ScrollView>
    //       )}

    //       {/** Active Status Gainer OR Looser 
    //       <View style={{height: heightPercentageToDP(100)}}>
    //       <TabGainerLooser />
    //     </View>
        
    //     */}

    //       <View style={{height: heightPercentageToDP(100)}}>
    //         <TabGainerLooser />
    //       </View>

    //       <View
    //         style={{
    //           backgroundColor:
    //             THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
    //           borderColor:
    //             THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
    //           ...styles.containerTodayStatus,
    //         }}></View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
//   );
// };

// // export default HomeScreen

// const styles = StyleSheet.create({
//   containerHeader: {
//     display: 'flex',
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     lineHeight: 50,
//   },
//   title: {
//     fontFamily: FONT.extrabold,
//     fontSize: heightPercentageToDP(3),
//     textAlignVertical: 'center',
//     alignItems: 'baseline',
//     marginStart: -5,
//     margin: 10,
//   },
//   centerImage: {
//     width: 40,
//     height: 60,
//     resizeMode: 'cover',
//   },
//   containerLeft: {
//     flexDirection: 'row',
//   },
//   containerRight: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: heightPercentageToDP(0.5),
//     marginEnd: heightPercentageToDP(1),
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   centerImageIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'cover',
//     position: 'absolute',
//     top: 20,
//     left: 10,
//   },
//   containerTodayStatus: {
//     marginTop: heightPercentageToDP(1),
//     marginStart: heightPercentageToDP(1),
//     marginEnd: heightPercentageToDP(1),
//     padding: heightPercentageToDP(1),
//     borderWidth: 2,
//     borderRadius: heightPercentageToDP(1),
//   },

//   tab: (activeJobType, item) => ({
//     paddingVertical: heightPercentageToDP(2) / 2,
//     paddingHorizontal: heightPercentageToDP(2),
//     borderRadius: heightPercentageToDP(2),
//     width: widthPercentageToDP(40),
//     borderWidth: 1,
//     borderColor: activeJobType === item ? 'green' : 'gray',
//   }),
//   tabText: (activeJobType, item) => ({
//     color: activeJobType === item ? 'green' : 'gray',
//     fontFamily: FONT.semibold,
//     fontSize: heightPercentageToDP(2),
//     textAlign: 'center',
//   }),
//   middleContentTopIcon: {
//     padding: heightPercentageToDP(1),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   CGcontainerGraph: {
//     width: widthPercentageToDP(35),
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginVertical: heightPercentageToDP(2),
//     marginHorizontal: widthPercentageToDP(2),
//     padding: heightPercentageToDP(1),
//     borderRadius: heightPercentageToDP(2),
//   },
//   CGcontainer: {
//     width: widthPercentageToDP(35),
//     borderRadius: heightPercentageToDP(2),
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginVertical: heightPercentageToDP(2),
//     marginHorizontal: widthPercentageToDP(2),
//     padding: heightPercentageToDP(1),
//   },
//   CGcontentTitle: {
//     fontFamily: FONT.medium,
//     fontSize: heightPercentageToDP(2),
//     marginVertical: heightPercentageToDP(1),
//   },
//   CGtotalBalAmount: {
//     fontFamily: FONT.medium,
//     fontSize: heightPercentageToDP(2),
//   },
//   CGmiddleContentTopIcon: {
//     padding: heightPercentageToDP(1),
//     alignSelf: 'flex-start',
//   },
//   CGchart: {},
// });

// export default HomeScreen;

// // useEffect(() => {

// //   if (isFetching) {
// //     console.log('Start Data Fetching');

// //     dispatch(fetchCoinMarket());
// //     startBackgroundTask();
// //   } else {
// //     console.log('STOP Data Fetching');
// //     BackgroundService.stop();
// //     if (ws) {
// //       console.log('Closing WebSocket connection');
// //       ws.close();
// //     }
// //   }

// //   return () => {
// //     console.log('Stopping background task on component unmount');
// //     BackgroundService.stop();
// //     if (ws) {
// //       console.log('Closing WebSocket connection on component unmount');
// //       ws.close();
// //     }
// //   };
// // }, [isFetching]);

// // const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

// // You can do anything in your task such as network requests, timers and so on,
// // as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// // React Native will go into "paused" mode (unless there are other tasks running,
// // or there is a foreground app).
// // const veryIntensiveTask = async (taskDataArguments) => {
// //     // Example of an infinite loop task
// //     const { delay } = taskDataArguments;
// //     await new Promise( async (resolve) => {

// //         for (let i = 0; BackgroundService.isRunning(); i++) {
// //             console.log(i);
// //             fetchData();
// //             await sleep(delay);
// //         }
// //     });
// // };

// // const options = {
// //     taskName: 'Example',
// //     taskTitle: 'ExampleTask title',
// //     taskDesc: 'ExampleTask description',
// //     taskIcon: {
// //         name: 'ic_launcher',
// //         type: 'mipmap',
// //     },
// //     color: '#ff00ff',
// //     linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
// //     parameters: {
// //         delay: 100,
// //     },
// //     enableHeadless: true,

// // };

// // const startBackgroundTask = async () => {
// //   try {
// //     await BackgroundService.start(veryIntensiveTask, options);
// //     console.log('Background Task Running ::');
// //   } catch (error) {
// //     console.log('Error starting background task:', error);
// //   }
// // };

// // useEffect(() => {
// //   if (isFetching) {
// //     console.log('Start Data Fetching');
// //     fetchData();
// //     // dispatch(fetchCoinMarket());
// //     console.log('Hey from EFFECt');
// //   } else {
// //     console.log('STOP Data Fetching');
// //     if (ws) {
// //       console.log('Closing WebSocket connection');
// //       ws.close();
// //     }
// //   }

// //   // Cleanup function to close the WebSocket when the component unmounts
// //   return () => {
// //     if (ws) {
// //       console.log('Closing WebSocket connection on component unmount');
// //       ws.close();
// //     }
// //   };
// // }, [isFetching]);

// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// // } from 'react-native';
// // import React, {useCallback, useEffect, useState} from 'react';
// // import {COLORS, FONT} from '../../constants';
// // import {useFocusEffect, useNavigation} from '@react-navigation/native';
// // import CenterGraph from '../component/home/CenterGraph';
// // import {
// //   heightPercentageToDP,
// //   widthPercentageToDP,
// // } from 'react-native-responsive-screen';
// // import Icon from 'react-native-vector-icons/AntDesign';
// // import {useDispatch, useSelector} from 'react-redux';
// // import Chart from '../component/home/Chart';
// // import LinearGradient from 'react-native-linear-gradient';
// // import TabGainerLooser from '../navigation/TabGainerLooser';
// // import {setTickerData} from '../../stores/websocketSlice';
// // import {fetchCoinMarket} from '../../stores/coinMarketSlice';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {updateAccessToken} from '../../stores/userAccessTokenSlice';
// // import {fetchDataFromWorkerTa} from '../../stores/websocketDataSlice';
// // import {useNetInfoInstance} from '@react-native-community/netinfo';
// // import NetInfo from '@react-native-community/netinfo';
// // import Toast from 'react-native-toast-message';
// // import {getAllMarketData} from '../../stores/actions/allmarketaction';
// // import {useAllMarketData} from '../../utils/hooks';
// // import {getAllTicket} from '../../stores/actions/createticket';
// // import {selectMarketData} from '../../stores/cryptoSlice';

// // const HomeScreen = () => {
// //   const navigation = useNavigation();

// //   const [selectedCoin, setSelectedCoin] = useState(null);

// //   const THEME = useSelector(state => state.theme);

// //   const dispatch = useDispatch();
// //   const coins = useSelector(state => state.coinMarket.coins);
// //   const [data, setData] = useState(null);

// //   const {netInfo} = useNetInfoInstance();
// //   const [internetStatus, setInternetStatus] = useState(netInfo.isConnected);

// //   // styling for Total Balance , Profit and loss and Rewards
// //   const containerStyleGraph = {
// //     backgroundColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
// //     borderColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
// //     padding: 20,
// //     borderRadius: heightPercentageToDP(2),
// //   };

// //   const subscriptionData = {
// //     method: 'SUBSCRIBE',
// //     params: ['!ticker@arr'],
// //     id: 1,
// //   };

// //   const unsubscriptionData = {
// //     method: 'UNSUBSCRIBE',
// //     params: ['!ticker@arr'],
// //     id: 1,
// //   };

// //   // useEffect(() => {
// //   //   dispatch(getAllMarketData(subscriptionData));
// //   //   dispatch(fetchCoinMarket());
// //   //   return () => {
// //   //     Toast.show({
// //   //       type: "success",
// //   //       text1: "Clossing WS"
// //   //     })
// //   //     dispatch(getAllMarketData(unsubscriptionData));
// //   //   };
// //   // }, []);

// //   useEffect(() => {
// //     dispatch(getAllMarketData());
// //     if (netInfo.isConnected) {
// //       dispatch(fetchCoinMarket());

// //       getUserAccessToken();
// //     } else {
// //       // Toast.show('Plese check your Internet Connection', 3);
// //       Toast.show({
// //         type: 'info',
// //         text1: 'Plese check your Internet Connection',
// //       });
// //     }
// //   }, [internetStatus, dispatch]);

// //   useEffect(() => {
// //     if (!internetStatus) {
// //       const interval = setInterval(() => {
// //         checkInternet();
// //       }, 2000); // 1000 milliseconds = 1 second

// //       // Clear the interval on component unmount to avoid memory leaks
// //       return () => clearInterval(interval);
// //     }
// //   }, [internetStatus]); // The empty dependency array [] ensures this useEffect runs only once on mount

// //   const checkInternet = () => {
// //     NetInfo.refresh().then(state => {
// //       console.log('Connection type', state.type);
// //       console.log('Is connected?', state.isConnected);
// //       if (state.isConnected) {
// //         setInternetStatus(state.isConnected);
// //       }
// //     });
// //   };

// //   // const getAllMarket = useSelector(state => state.allMarket);
// //   // console.log("NEW WS ALL MARKET ::")
// //   // console.log("ALL MARKET :: "+getAllMarket)
// //   // console.log("ALL MARKET LENGTH :: "+getAllMarket.length)

// //   useFocusEffect(
// //     useCallback(() => {
// //       fetchDataFromWorkerTa()
// //         .then(marketdata => {
// //           console.log('Received marketdata:');
// //           // console.log('Received marketdata:' + marketdata.length);
// //           // You can dispatch an action with the data if needed
// //           setData(marketdata);
// //           dispatch(setTickerData(marketdata));
// //         })
// //         .catch(error => {
// //           console.log('Error fetching data:', error);
// //         });
// //     }, [data]),
// //   );

// //   // const isFocused = useIsFocused();
// //   // const da = useAllMarketData(dispatch, isFocused);

// //   // console.log("MINE WS DATA :: "+da)

// //   function topCryptoCurrencySection() {
// //     return <View></View>;
// //   }

// //   const socketUrl = 'wss://stream.binance.com:9443/ws/!ticker@arr';

// //   const [isFetching, setIsFetching] = useState(true);
// //   const [ws, setWs] = useState(null);

// //   const stopFetching = () => {
// //     setIsFetching(false);

// //     console.log('CLICKED STOPPING');
// //     if (ws) {
// //       console.log('If STOPPING');
// //       ws.close();
// //       setWs(null);
// //     } else {
// //       console.log('ELSE STOPPING');
// //       console.log('ws status :: ' + ws);
// //     }
// //   };

// //   const gotoSearch = () => {
// //     stopFetching();
// //     navigation.navigate('Search');
// //   };

// //   const gotoNotification = () => {
// //     stopFetching();
// //     navigation.navigate('NotificationTab');
// //   };
// //   const gotoSetting = () => {
// //     stopFetching();
// //     navigation.navigate('Setting');
// //   };

// //   const getUserAccessToken = async () => {
// //     try {
// //       let jsonValue = await AsyncStorage.getItem('accessToken');

// //       console.log('Encrypted CODE is :: ' + jsonValue);
// //       dispatch(updateAccessToken(jsonValue));

// //       return jsonValue !== null ? JSON.parse(jsonValue) : null;
// //     } catch (error) {
// //       console.log('error' + error);
// //     }
// //   };

// //   // const marketData = useSelector(selectMarketData);

// //   // console.log('ORG');
// //   // console.log('ORG -> ' + marketData);

// //   return (
// //     <SafeAreaView
// //       style={{
// //         backgroundColor:
// //           THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
// //       }}
// //       className="flex-1">
// //       {/** Header */}

// //       <View
// //         style={{
// //           backgroundColor:
// //             THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
// //           ...styles.containerHeader,
// //         }}>
// //         <View style={styles.containerLeft}>
// //           <Image
// //             source={require('../../assets/image/logo.png')}
// //             style={styles.centerImage}
// //             tintColor={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
// //           />
// //           <Text
// //             style={{
// //               color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
// //               ...styles.title,
// //             }}>
// //             VRK Invest
// //           </Text>
// //         </View>

// //         {/** CONTAINER RIGHT */}

// //         <View style={styles.containerRight}>
// //           <TouchableOpacity
// //             style={styles.imageContainer}
// //             className="rounded-full"
// //             onPress={gotoSearch}>
// //             <LinearGradient
// //               colors={[
// //                 THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
// //                 THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
// //               ]}
// //               className="rounded-full p-2"
// //               style={styles.middleContentTopIcon}>
// //               <Icon
// //                 name="search1"
// //                 size={20}
// //                 color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
// //                 style={{alignSelf: 'center', opacity: 0.9}}
// //               />
// //             </LinearGradient>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.imageContainer}
// //             className="rounded-full"
// //             onPress={gotoNotification}>
// //             <LinearGradient
// //               colors={[
// //                 THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
// //                 THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
// //               ]}
// //               className="rounded-full p-2"
// //               style={styles.middleContentTopIcon}>
// //               <Icon
// //                 name="bells"
// //                 size={20}
// //                 color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
// //                 style={{alignSelf: 'center', opacity: 0.9}}
// //               />
// //             </LinearGradient>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.imageContainer}
// //             className="rounded-full"
// //             onPress={gotoSetting}>
// //             <LinearGradient
// //               colors={[
// //                 THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
// //                 THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
// //               ]}
// //               className="rounded-full p-2"
// //               style={styles.middleContentTopIcon}>
// //               <Icon
// //                 name="setting"
// //                 size={20}
// //                 color={THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark}
// //                 style={{alignSelf: 'center', opacity: 0.9}}
// //               />
// //             </LinearGradient>
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {/** FOR TOP CRYPTO DATA */}

// //       {topCryptoCurrencySection()}

// //       <ScrollView
// //         style={{height: heightPercentageToDP(100)}}
// //         showsVerticalScrollIndicator={false}>
// //         <View>
// //           {/**Top Chart Coponent */}
// //           <View>
// //             {coins.length ? (
// //               <Chart
// //                 containerStyles={{
// //                   marginTop: heightPercentageToDP(2),
// //                 }}
// //                 chartPrices={
// //                   selectedCoin
// //                     ? selectedCoin?.sparkline_in_7d?.price
// //                     : coins[0]?.sparkline_in_7d?.price
// //                 }
// //               />
// //             ) : (
// //               <LinearGradient
// //                 colors={[
// //                   THEME.data === 'DARK' ? COLORS.skyBlue : COLORS.gray2,
// //                   THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.lightWhite,
// //                 ]}
// //                 style={{
// //                   height: heightPercentageToDP(30),
// //                   margin: heightPercentageToDP(2),
// //                   borderRadius: heightPercentageToDP(2),
// //                 }}></LinearGradient>
// //             )}
// //           </View>

// //           {/**Middle Chart Coponent */}

// //           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
// //             <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
// //               <CenterGraph
// //                 image={'wallet'}
// //                 title={'Total Balance'}
// //                 amount={'$8,060.34'}
// //                 itemColor={'red'}
// //                 chartColor={'rgba(255, 0, 0, 1)'}
// //                 chartPrices={coins[0]?.sparkline_in_7d?.price}
// //                 styleProp={containerStyleGraph}
// //               />
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               onPress={() => navigation.navigate('ProfitAndLoss')}>
// //               <CenterGraph
// //                 image={'barschart'}
// //                 title={'Profit & Loss'}
// //                 amount={'$6,640.34'}
// //                 itemColor={'orange'}
// //                 chartColor={'rgba(255, 165, 0, 1)'}
// //                 chartPrices={coins[0]?.sparkline_in_7d?.price}
// //                 styleProp={containerStyleGraph}
// //               />
// //             </TouchableOpacity>

// //             <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
// //               <CenterGraph
// //                 image={'gift'}
// //                 title={'Rewards'}
// //                 amount={'$1,050.14'}
// //                 itemColor={'rgba(0, 255, 0, 1)'}
// //                 chartColor={'rgba(0,255, 0, 1)'}
// //                 chartPrices={coins[0]?.sparkline_in_7d?.price}
// //                 styleProp={containerStyleGraph}
// //               />
// //             </TouchableOpacity>
// //           </ScrollView>

// //           {/** Active Status Gainer OR Looser
// //           <View style={{height: heightPercentageToDP(100)}}>
// //           <TabGainerLooser />
// //         </View>

// //         */}

// //           <View style={{height: heightPercentageToDP(100)}}>
// //             <TabGainerLooser />
// //           </View>

// //           <View
// //             style={{
// //               backgroundColor:
// //                 THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
// //               borderColor:
// //                 THEME.data === 'LIGHT' ? COLORS.white : COLORS.skyBlue,
// //               ...styles.containerTodayStatus,
// //             }}></View>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // export default HomeScreen

// // const styles = StyleSheet.create({
// //   containerHeader: {
// //     display: 'flex',
// //     width: '100%',
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     lineHeight: 50,
// //   },
// //   title: {
// //     fontFamily: FONT.extrabold,
// //     fontSize: heightPercentageToDP(3),
// //     textAlignVertical: 'center',
// //     alignItems: 'baseline',
// //     marginStart: -5,
// //     margin: 10,
// //   },
// //   centerImage: {
// //     width: 40,
// //     height: 60,
// //     resizeMode: 'cover',
// //   },
// //   containerLeft: {
// //     flexDirection: 'row',
// //   },
// //   containerRight: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: heightPercentageToDP(0.5),
// //     marginEnd: heightPercentageToDP(1),
// //   },
// //   imageContainer: {
// //     position: 'relative',
// //   },
// //   centerImageIcon: {
// //     width: 20,
// //     height: 20,
// //     resizeMode: 'cover',
// //     position: 'absolute',
// //     top: 20,
// //     left: 10,
// //   },
// //   containerTodayStatus: {
// //     marginTop: heightPercentageToDP(1),
// //     marginStart: heightPercentageToDP(1),
// //     marginEnd: heightPercentageToDP(1),
// //     padding: heightPercentageToDP(1),
// //     borderWidth: 2,
// //     borderRadius: heightPercentageToDP(1),
// //   },

// //   tab: (activeJobType, item) => ({
// //     paddingVertical: heightPercentageToDP(2) / 2,
// //     paddingHorizontal: heightPercentageToDP(2),
// //     borderRadius: heightPercentageToDP(2),
// //     width: widthPercentageToDP(40),
// //     borderWidth: 1,
// //     borderColor: activeJobType === item ? 'green' : 'gray',
// //   }),
// //   tabText: (activeJobType, item) => ({
// //     color: activeJobType === item ? 'green' : 'gray',
// //     fontFamily: FONT.semibold,
// //     fontSize: heightPercentageToDP(2),
// //     textAlign: 'center',
// //   }),
// //   middleContentTopIcon: {
// //     padding: heightPercentageToDP(1),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default HomeScreen;

// // // useEffect(() => {

// // //   if (isFetching) {
// // //     console.log('Start Data Fetching');

// // //     dispatch(fetchCoinMarket());
// // //     startBackgroundTask();
// // //   } else {
// // //     console.log('STOP Data Fetching');
// // //     BackgroundService.stop();
// // //     if (ws) {
// // //       console.log('Closing WebSocket connection');
// // //       ws.close();
// // //     }
// // //   }

// // //   return () => {
// // //     console.log('Stopping background task on component unmount');
// // //     BackgroundService.stop();
// // //     if (ws) {
// // //       console.log('Closing WebSocket connection on component unmount');
// // //       ws.close();
// // //     }
// // //   };
// // // }, [isFetching]);

// // // const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

// // // You can do anything in your task such as network requests, timers and so on,
// // // as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// // // React Native will go into "paused" mode (unless there are other tasks running,
// // // or there is a foreground app).
// // // const veryIntensiveTask = async (taskDataArguments) => {
// // //     // Example of an infinite loop task
// // //     const { delay } = taskDataArguments;
// // //     await new Promise( async (resolve) => {

// // //         for (let i = 0; BackgroundService.isRunning(); i++) {
// // //             console.log(i);
// // //             fetchData();
// // //             await sleep(delay);
// // //         }
// // //     });
// // // };

// // // const options = {
// // //     taskName: 'Example',
// // //     taskTitle: 'ExampleTask title',
// // //     taskDesc: 'ExampleTask description',
// // //     taskIcon: {
// // //         name: 'ic_launcher',
// // //         type: 'mipmap',
// // //     },
// // //     color: '#ff00ff',
// // //     linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
// // //     parameters: {
// // //         delay: 100,
// // //     },
// // //     enableHeadless: true,

// // // };

// // // const startBackgroundTask = async () => {
// // //   try {
// // //     await BackgroundService.start(veryIntensiveTask, options);
// // //     console.log('Background Task Running ::');
// // //   } catch (error) {
// // //     console.log('Error starting background task:', error);
// // //   }
// // // };

// // // useEffect(() => {
// // //   if (isFetching) {
// // //     console.log('Start Data Fetching');
// // //     fetchData();
// // //     // dispatch(fetchCoinMarket());
// // //     console.log('Hey from EFFECt');
// // //   } else {
// // //     console.log('STOP Data Fetching');
// // //     if (ws) {
// // //       console.log('Closing WebSocket connection');
// // //       ws.close();
// // //     }
// // //   }

// // //   // Cleanup function to close the WebSocket when the component unmounts
// // //   return () => {
// // //     if (ws) {
// // //       console.log('Closing WebSocket connection on component unmount');
// // //       ws.close();
// // //     }
// // //   };
// // // }, [isFetching]);


// {false && (
//   <ScrollView
//     horizontal={true}
//     showsHorizontalScrollIndicator={false}>
//     <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
//       <View
//         style={{
//           backgroundColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           borderColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           padding: 20,
//           borderRadius: heightPercentageToDP(2),
//           marginTop: heightPercentageToDP(2),
//           marginStart: heightPercentageToDP(2),
//           width: widthPercentageToDP(34),
//         }}>
//         <LinearGradient
//           colors={[
//             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
//             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
//           ]}
//           className="rounded-full p-2"
//           style={styles.CGmiddleContentTopIcon}>
//           <Icon
//             name={'wallet'}
//             size={25}
//             color={'red'}
//             style={{alignSelf: 'center', opacity: 0.9}}
//             className="rounded-full"
//           />
//         </LinearGradient>

//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGcontentTitle,
//           }}>
//           Total Balance
//         </Text>
//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGtotalBalAmount,
//           }}
//           numberOfLines={1}>
//           {Number.parseFloat(allprofit?.usdt_wallet_balance).toFixed(
//             2,
//           )}
//         </Text>

//         <View style={styles.CGchart}>
//           <LineChart
//             data={dataWallet}
//             width={widthPercentageToDP(20)}
//             height={heightPercentageToDP(10)}
//             yAxisLabel="$"
//             yAxisSuffix="k"
//             yAxisInterval={1}
//             chartConfig={{
//               backgroundGradientFrom:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               backgroundGradientTo:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               decimalPlaces: 1,

//               color: (opacity = 1) => 'red',
//               labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
//               barRadius: 10,

//               style: {
//                 borderRadius: 2,
//               },
//             }}
//             bezier
//             style={{
//               borderRadius: 1,
//               alignItems: 'center',
//               paddingRight: 0,
//             }}
//             withShadow
//             withHorizontalLines={false}
//             withDots={false}
//             withInnerLines={false}
//             withOuterLines={false}
//             withVerticalLabels={false}
//             withHorizontalLabels={false}
//           />
//         </View>
//       </View>
//     </TouchableOpacity>

//     <TouchableOpacity
//       onPress={() => navigation.navigate('ProfitAndLoss')}>
//       <View
//         style={{
//           backgroundColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           borderColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           padding: 20,
//           borderRadius: heightPercentageToDP(2),
//           margin: heightPercentageToDP(2),
//           width: widthPercentageToDP(34),
//         }}>
//         <LinearGradient
//           colors={[
//             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
//             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
//           ]}
//           className="rounded-full p-2"
//           style={styles.CGmiddleContentTopIcon}>
//           <Icon
//             name={'barschart'}
//             size={25}
//             color={'orange'}
//             style={{alignSelf: 'center', opacity: 0.9}}
//             className="rounded-full"
//           />
//         </LinearGradient>

//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGcontentTitle,
//           }}>
//           Profit & Loss
//         </Text>
//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGtotalBalAmount,
//           }}>
//           {AveragetTotalProfit}
//         </Text>

//         <View style={styles.CGchart}>
//           <LineChart
//             data={{
//               datasets: [
//                 {
//                   data: barGraphDailyProfitData,
//                 },
//               ],
//             }}
//             width={widthPercentageToDP(20)}
//             height={heightPercentageToDP(10)}
//             yAxisLabel="$"
//             yAxisSuffix="k"
//             yAxisInterval={1}
//             chartConfig={{
//               backgroundGradientFrom:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               backgroundGradientTo:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               decimalPlaces: 1,

//               color: (opacity = 1) => `rgba(255, 165, 0, 1)`,
//               labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
//               barRadius: 10,

//               style: {
//                 borderRadius: 2,
//               },
//             }}
//             bezier
//             style={{
//               borderRadius: 1,
//               alignItems: 'center',
//               paddingRight: 0,
//             }}
//             withShadow
//             withHorizontalLines={false}
//             withDots={false}
//             withInnerLines={false}
//             withOuterLines={false}
//             withVerticalLabels={false}
//             withHorizontalLabels={false}
//           />
//         </View>
//       </View>
//     </TouchableOpacity>

//    <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
//       <View
//         style={{
//           backgroundColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           borderColor:
//             THEME.data === 'LIGHT'
//               ? COLORS.lightGray
//               : COLORS.skyBlue,
//           padding: 20,
//           borderRadius: heightPercentageToDP(2),
//           marginVertical: heightPercentageToDP(2),

//           marginEnd: heightPercentageToDP(2),
//           width: widthPercentageToDP(34),
//         }}>
//         <LinearGradient
//           colors={[
//             THEME.data === 'DARK' ? COLORS.purple : COLORS.gray2,
//             THEME.data === 'DARK' ? COLORS.purpleDark : COLORS.white,
//           ]}
//           className="rounded-full p-2"
//           style={styles.CGmiddleContentTopIcon}>
//           <Icon
//             name={'gift'}
//             size={25}
//             color={'rgba(0,255, 0, 1)'}
//             style={{alignSelf: 'center', opacity: 0.9}}
//             className="rounded-full"
//           />
//         </LinearGradient>

//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGcontentTitle,
//           }}>
//           Rewards
//         </Text>
//         <Text
//           style={{
//             color:
//               THEME.data === 'DARK'
//                 ? COLORS.white
//                 : COLORS.purpleDark,
//             ...styles.CGtotalBalAmount,
//           }}>
//           {refferalwallet?.length}
//         </Text>

//         <View style={styles.CGchart}>
//           <LineChart
//             data={{
//               datasets: [
//                 {
//                   data: refferalwallet?.map((dataPoint, index) => index),
//                 },
//               ],
//             }}
//             width={widthPercentageToDP(20)}
//             height={heightPercentageToDP(10)}
//             yAxisLabel="$"
//             yAxisSuffix="k"
//             yAxisInterval={1}
//             chartConfig={{
//               backgroundGradientFrom:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               backgroundGradientTo:
//                 THEME.data === 'LIGHT'
//                   ? COLORS.lightGray
//                   : COLORS.skyBlue,
//               decimalPlaces: 1,

//               color: (opacity = 1) => `rgba(0, 255, 0, 1)`,
//               labelColor: (opacity = 0) => `rgba(255, 255, 255, 0)`,
//               barRadius: 10,

//               style: {
//                 borderRadius: 2,
//               },
//             }}
//             bezier
//             style={{
//               borderRadius: 1,
//               alignItems: 'center',
//               paddingRight: 0,
//             }}
//             withShadow
//             withHorizontalLines={false}
//             withDots={false}
//             withInnerLines={false}
//             withOuterLines={false}
//             withVerticalLabels={false}
//             withHorizontalLabels={false}
//           />
//         </View>
//       </View>
//     </TouchableOpacity>
  
  
  

   
//   </ScrollView>
// )}