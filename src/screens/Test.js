import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { FONT } from '../../constants'



const Test = () => {
  return (

    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
        padding: heightPercentageToDP(2)
      }}
    >

      <View style={{
        flex: 1
      }}>

        <StatusBar hidden={true} />

        {/** app name */}
        <View style={{
          marginTop: heightPercentageToDP(2)
        }}>
          <Text style={{
            color: 'white',
            fontFamily: FONT.semibold
          }}>Since 1984</Text>
        </View>

        {/** Top title */}
        <View style={{
          marginTop: heightPercentageToDP(3),
          alignItems: 'stretch',
        }}>
          <Text style={{
            color: 'white',
            fontFamily: FONT.semibold,
            fontSize: heightPercentageToDP(2.5),
            textAlign: 'center'

          }}>Unlock your dreams with just a tap</Text>
        </View>

        {/** Image Container */}

        <View style={{
          height: heightPercentageToDP(60),
          backgroundColor: 'gray',
          marginTop: heightPercentageToDP(2)
        }}>
          <Image
            source={require('../../assets/image/bitcoin_image.jpg')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>

        {/** Middle Text View */}

        <View style={{
          marginTop: heightPercentageToDP(2),
          height: heightPercentageToDP(8),

        }}>
          <Text style={{
            color: 'white',
            fontFamily: FONT.semibold,
            fontSize: heightPercentageToDP(2.5),
            textAlign: 'center'

          }}>Welcome to your lottery</Text>
          <Text style={{
            color: 'white',
            fontFamily: FONT.semibold,
            fontSize: heightPercentageToDP(2.5),
            textAlign: 'center'

          }}>adventure!</Text>
        </View>


        {/** Indicator View */}

        <View style={{
          height: heightPercentageToDP(4),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: heightPercentageToDP(1)
        }}>

          <View className="rounded-full p-1 bg-gray-500" style={{
            height: widthPercentageToDP(1),
            width: widthPercentageToDP(1)
          }} />
          <View className="rounded-full p-1 bg-white" style={{
            height: widthPercentageToDP(1),
            width: widthPercentageToDP(1)
          }} />
          <View className="rounded-full p-1 bg-white" style={{
            height: widthPercentageToDP(1),
            width: widthPercentageToDP(1)
          }} />

        </View>

        {/** Bottom divider View */}


      </View>

      <View style={{
        backgroundColor: 'orange',
        height: heightPercentageToDP(10)
      }}>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray'
          }}

        />
      </View>



    </SafeAreaView>

  )
}

export default Test

const styles = StyleSheet.create({})


