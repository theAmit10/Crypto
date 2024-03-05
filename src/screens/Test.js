import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';


const Test = () => {
  const inputs = Array(6).fill(0).map((_, index) => useRef(null));
  const [otp, setOtp] = useState('');

  const handleChangeText = (text, index) => {
    const newOtp = otp.slice(0, index) + text + otp.slice(index + 1);
    setOtp(newOtp);
    if (text.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleCheckOtp = () => {
    if (otp.length === 6) {
      Alert.alert('Success', 'OTP Entered Successfully :: ' + otp);

    } else {
      Alert.alert('Error', 'Please enter all six digits of the OTP');
    }
  };

  return (
    <View style={styles.container}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleChangeText(text, index)}
          ref={input}
          autoFocus={index === 0}
        />
      ))}
      <Button title="Check OTP" onPress={handleCheckOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    width: 50,
    textAlign: 'center',
    margin: 5,
  },
});

export default Test;



// import { StyleSheet, Text, View } from 'react-native'
// import React, { memo, useDebugValue, useState } from 'react'
// import { heightPercentageToDP } from 'react-native-responsive-screen'
// import { LineChart } from 'react-native-chart-kit'
// import Chart from '../component/home/Chart';

// const ChartComponent = ({ data }) => {
//   // If your list contains only one data point, duplicate it to show a line
//   const chartData = data.length === 1 ? [data[0], data[0]] : data;

//   if (data.length === 0) {
//     return (
//       <View>
//         <Text>No chart found</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <LineChart
//         data={{
//           datasets: [
//             {
//               data: chartData,
//             },
//           ],
//         }}
//         width={300}
//         height={200}
//         yAxisLabel="$"
//         yAxisSuffix="k"
//         yAxisInterval={1}
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#ffffff',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: '6',
//             strokeWidth: '2',
//             stroke: '#ffa726',
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// };


// const Test = ({ count2, increaseCount2, data, memoizedData }) => {

//   console.log("SECOND TEST Component Running ")

//   const [second, setSecond] = useState(0)
//   const chartData = data.length === 1 ? [data[0], data[0]] : data;

//   return (
//     <>
//       <Text
//         onPress={() => { increaseCount2() }}
//         style={{ fontSize: heightPercentageToDP(3) }}>{
//           'count 2 ::  ' + count2
//         }</Text>

//       <Text
//         onPress={() => { setSecond(second + 1) }}
//         style={{ fontSize: heightPercentageToDP(3) }}>{
//           'second Val ::  ' + second
//         }</Text>

//       <ChartComponent data={data} />

//       {
//         memoizedData ? (<Chart chartData={memoizedData} />) : (<Text> NO data</Text>)
//       }
//     </>
//   )
// }



// export default memo(Test)
