import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Test from './Test'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProfit } from '../../stores/actions/profitaction'

const Temp = () => {

  console.log("FIRST COMP")
  const dispatch = useDispatch();
  const { allprofit } = useSelector(state => state.profitData);

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increaseCount2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  const memoizedData = useMemo(() => {
    // Perform any memoization logic here if needed
    // This will recompute only when refferalwallet or allprofit changes
    return {
      allprofit,
    };
  }, [allprofit]);

  const temp =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTNjMzQyZWVkYjUxMDRlZmNmNDRjOWE1OTYyODQ5ZDM4MDc0OTQ5MDEzMmM5NTQzYWI4NWM1YmEzY2M0OTMwMjcxNzg1ZDJkOTgyZDk0YTIiLCJpYXQiOjE2OTc5OTc5NDQuMTk4ODk1LCJuYmYiOjE2OTc5OTc5NDQuMTk4ODk4LCJleHAiOjE3Mjk2MjAzNDQuMTk4MjA0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.M9y8sRYqKoDIXSJoWHfNra8FaSBaiKHmymZTTFpWLIQVjUsyQrIXMItLpt9Zb9SpdqHUpjzru50ZsAI16LKJAlgAQbI_5J2LG3pEZL6-GdaCgGm1PsbjpynTXaYGMPxM4bVtGfpfb_e699sM2xmEZ3RnVM930FwiSC2P1zbF0aulEg0DtSWRIEOOdMNeFL1SW-z0U85JJbPK0ROJaDFqeLHtdCnFAd3_XP5CGq3H89BIKiAsgpYWcaRGj2tb6DY5e43gIDomUJIDhw_4Hj4wgG6Oi7VurzaubXodmbqHMWyAZKQ188GYRvsswQSFwD4qPxE8FaNhlBpjcOimASSQUBcHHrFGhZQpGO5f1jeNLNTA_v_-TzfqMi7pKF2mFk4vVKrcEwQcbm06Mniw06o--i3wlWgBmuK7MK7juS4zp-fIWU1bA4FnzMZC5RySRZd_u3xwwvVRUswjpgrVkwTAGmw8KTBUdinRdzs6QeY4kh3t6wf5E6omOAdF4U50FLKP0Cm5BHVSdWvNoGbZGQRe6uybERwWdfqbkEcchq0hZoeTLS8mDMauQBkdkeBt1HvCYTPtfOnmAE9WzXMmv4achdknqB6e3gT2bpKIJeqkKGQNH2GdYFwfGcwwRXZkOLBhCVLVY0TYdDv6x5QatwsbxODw15KO1EY2niHNhwkkQ_w';

  useEffect(() => {
    console.log("Running UseEffect of on FIRST SCREEN");
    dispatch(getMyProfit(temp))
  }, [dispatch])


  // const x = useMemo(() => addTwoNumber(count1), [count1])
  const currentDate = new Date();
  const data = [

  ];



  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text
        onPress={() => {
          setCount1(count1 + 1)
        }}
        style={{ fontSize: heightPercentageToDP(3) }}>{
          'count 1 ::  ' + count1
        }</Text>

      {
        allprofit ? (<Text
          onPress={() => {
            setCount1(count1 + 1)
          }}
          style={{ fontSize: heightPercentageToDP(3) }}>{
            'INR BAL :: ' + allprofit.inr_wallet_balance

          }</Text>) : (<Text

            style={{ fontSize: heightPercentageToDP(3) }}>{
              'Loading Data'
            }</Text>)
      }


      <Test count2={count2} increaseCount2={increaseCount2} data={data} memoizedData={memoizedData.allprofit} />
    </View>
  )
}

export default Temp

const addTwoNumber = (count1) => {
  const val = count1 + 2
  return val
}

const styles = StyleSheet.create({})