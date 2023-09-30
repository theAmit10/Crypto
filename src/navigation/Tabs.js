import { View, Text, StyleSheet, Image, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Setting from '../screens/Setting';
import Trade from '../screens/Trade';
import Transfer from '../screens/Transfer';
import Wallet from '../screens/Wallet';
import { COLORS } from '../../constants';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import { heightPercentageToDP } from 'react-native-responsive-screen';


const CustomTabBarButton = ({children, onPress}) => {
    <TouchableOpacity
        style={{
            top: 30,
            justifyContent: 'center',
            backgroundColor: 'green',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
    <View
        style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}
    >
    {children}
    </View>
    
    </TouchableOpacity>
}

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 

            screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {     
                position: 'absolute',
               
                
                
                backgroundColor: COLORS.skyBlue,
                
                height: heightPercentageToDP(10),
                ...styles.shadow
               
        },
        tabBarBackground: () => (
            <View className="blur-sm"></View>
        ),
        headerShown: false,
        tabBarActiveTintColor: 'white', 
        
        }}
        
    >
        <Tab.Screen name='Home' component={HomeScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        source={require('../../assets/image/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.green : 'lightgray',
                        }}
                    />
                    
                </View>
            ),
        }}
    />

    <Tab.Screen name='About' component={Wallet}
    options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    source={require('../../assets/image/wallet_nav.png')}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.green : 'lightgray',
                    }}
                />
                
            </View>
        ),
    }}
    
    />
        <Tab.Screen name='Transfer' component={Transfer}

        options={{
            tabBarIcon: ({focused}) => (
                <View  
                >
                        <Image
                        source={require('../../assets/image/logo.png')}
                        resizeMode='cover'
                        style={{
                            width: 60,
                            height: 60,
                            tintColor: COLORS.white,
                            backgroundColor: COLORS.green,
                            marginTop: -30,
                            borderRadius: 30,
                            
                            
                           
                            
                        }}
                    /> 
                </View>
                      
                
            ),
              
    }}
        
        
        />
        <Tab.Screen name='Trade' component={Trade}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../../assets/image/chart.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.green : 'lightgray',
                        }}
                    />
                    
                </View>
            ),
        }}
        />
        <Tab.Screen name='Profile' component={Profile}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../../assets/image/profile.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.green : 'lightgray',
                        }}
                    />
                    
                </View>
            ),
        }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs



// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => {
//     <TouchableOpacity
//         style={{
//             top: 30,
//             justifyContent: 'center',
//             backgroundColor: 'green',
//             alignItems: 'center',
//             ...styles.shadow
//         }}
//         onPress={onPress}
//     >
//     <View
//         style={{
//             width: 70,
//             height: 70,
//             borderRadius: 35,
//             backgroundColor: '#e32f45'
//         }}
//     >
//     {children}
//     </View>
    
//     </TouchableOpacity>
// }

// const Tabs = () => {
//   return (
//     <Tab.Navigator
        // screenOptions={{
        //     tabBarShowLabel: false,
        //     tabBarStyle: {     
                // position: 'absolute',
                // bottom: 25,
                // left: 20,
                // right: 20,
                // elevation: 0,
                // backgroundColor: 'cyan',
                // borderRadius: 15,
                // height: 70,
                // ...styles.shadow
                
        
        // },
        // tabBarBackground: () => (
        //     <View className=" blur-sm"></View>
        // ),
        // headerShown: false,
        // tabBarActiveTintColor: 'white',
        

                

                

        // }}
        
//     >
    // <Tab.Screen name='Home' component={Profile}
    //     options={{
    //         tabBarIcon: ({focused}) => (
    //             <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
    //                 <Image
    //                     source={require('../../assets/image/home.png')}
    //                     resizeMode='contain'
    //                     style={{
    //                         width: 25,
    //                         height: 25,
    //                         tintColor: focused ? '#e32f45' : '#74Bc94',
    //                     }}
    //                 />
    //                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    //                    Home 
    //                 </Text>
    //             </View>
    //         ),
    //     }}
    // />
//     <Tab.Screen name='Setting' component={Register}
        // options={{
        //     tabBarIcon: ({focused}) => (
        //         <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        //             <Image
        //                 source={require('../../assets/image/search.png')}
        //                 resizeMode='contain'
        //                 style={{
        //                     width: 25,
        //                     height: 25,
        //                     tintColor: focused ? '#e32f45' : '#74Bc94',
        //                 }}
        //             />
        //             <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
        //                Setting
        //             </Text>
        //         </View>
        //     ),
        // }}
//     />
//     <Tab.Screen name='Post' component={Setting}
    //     options={{
    //         tabBarIcon: ({focused}) => (
    //             <View  
    //             >
    //                     <Image
    //                     source={require('../../assets/image/logo.png')}
    //                     resizeMode='contain'
    //                     style={{
    //                         width: 60,
    //                         height: 60,
    //                         tintColor: '#e32f45',
    //                         backgroundColor: 'white',
    //                         marginTop: -30,
    //                         borderRadius: 20,
    //                         borderColor: 'cyan',
    //                         borderWidth: 2,
                            
                           
                            
    //                     }}
    //                 /> 
    //             </View>
                      
                
    //         ),
              
    // }}
//     />
//     <Tab.Screen name='Inbox' component={Trade}
    // options={{
    //     tabBarIcon: ({focused}) => (
    //         <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
    //             <Image
    //                 source={require('../../assets/image/chart.png')}
    //                 resizeMode='contain'
    //                 style={{
    //                     width: 25,
    //                     height: 25,
    //                     tintColor: focused ? '#e32f45' : '#74Bc94',
    //                 }}
    //             />
    //             <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    //                Chat
    //             </Text>
    //         </View>
    //     ),
    // }}
//     />
//     <Tab.Screen name='Profile' component={Transfer}
//     options={{
//         tabBarIcon: ({focused}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                 <Image
//                     source={require('../../assets/image/profile.png')}
//                     resizeMode='contain'
//                     style={{
//                         width: 25,
//                         height: 25,
//                         tintColor: focused ? '#e32f45' : '#74Bc94',
//                     }}
//                 />
//                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
//                    Profile
//                 </Text>
//             </View>
//         ),
//     }}
//     />
    
//     </Tab.Navigator>
//   )
// }

// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: '#7F5DF0',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.5,
//         elevation: 5
//     }
// })

// export default Tabs


