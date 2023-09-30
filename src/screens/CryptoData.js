// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import axios from "axios";
// import DetailModal from "../components/DetailModal";
// import downArrow from "../assets/png/downArrow.png";
// import upArrow from "../assets/png/upArrow.png";
// import Logo from "../assets/png/logo.png";
// import Caution from "../assets/png/caution.png";
// import { useApiResponse } from "../api/index";

// const CryptoPriceScreen = () => {
//   // const [data, setCryptoData] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalData, setModalData] = useState(null); // Initialize as null
//   // const [error, setErrorData] = useState(false);
//   // const [loading, setLoading] = useState(true); // Initialize as true
//   const { loading, data, error, getCoinsDetails } = useApiResponse();

//   const fetchData = async () => {
//     getCoinsDetails();
//   };
//   console.log("REDNER");
//   useEffect(() => {
//     fetchData();

//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 60000); // 60 seconds in milliseconds

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   // Render conditionally based on loading and error states

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => {
//             setModalVisible(true);
//             setModalData(item);
//           }}
//         >
//           <View style={styles.itemView}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <Image source={{ uri: item.image }} style={styles.icon} />
//               <View>
//                 <Text style={styles.blackBoldText}>
//                   {item.symbol.toUpperCase()}
//                 </Text>
//                 <Text style={styles.grayText}>{item.name}</Text>
//               </View>
//             </View>
//             <View>
//               <Text style={[{ alignSelf: "flex-end" }, styles.grayBoldText]}>
//                 {"\u20B9"}
//                 {item.current_price.toFixed(2)}
//               </Text>
//               <View style={[{ alignSelf: "flex-end" }, styles.row]}>
//                 <Image
//                   source={
//                     item.market_cap_change_percentage_24h > 0
//                       ? upArrow
//                       : downArrow
//                   }
//                   style={styles.image}
//                 />
//                 <Text
//                   style={[
//                     styles.blackText,
//                     item.market_cap_change_percentage_24h > 0
//                       ? { color: "green" }
//                       : { color: "red" },
//                   ]}
//                 >
//                   {Math.abs(item.market_cap_change_percentage_24h).toFixed(2)}%
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.mainView}>
//       {modalVisible ? (
//         <DetailModal
//           modalVisible={modalVisible}
//           modalData={modalData}
//           setModalVisible={(val) => {
//             setModalVisible(val);
//           }}
//         />
//       ) : null}
//       <View style={styles.titleView}>
//         <Image source={Logo} style={styles.logo} />
//         <Text style={styles.titleText}>Crypto</Text>
//       </View>
//       {loading ? (
//         <View style={styles.errorView}>
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       ) : error ? (
//         <View style={styles.errorView}>
//           <Image source={Caution} style={styles.cuation} />
//           <Text style={styles.errorText}>Something Went Wrong</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainView: {
//     backgroundColor: "#eee",
//     paddingBottom: 60,
//   },
//   itemView: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // Controls shadow blur radius,
//   },
//   nameText: {},
//   container: {
//     elevation: 4,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 }, // Controls shadow offset (x, y)
//     shadowOpacity: 0.4, // Controls shadow opacity (0 to 1)
//     shadowRadius: 4,
//     paddingHorizontal: 20,
//     paddingVertical: 25,
//     backgroundColor: "#fff",
//     marginVertical: 8,
//     marginHorizontal: 20,
//     borderRadius: 10,
//   },
//   image: { height: 20, width: 20 },
//   row: { flexDirection: "row" },
//   icon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//     resizeMode: "contain",
//     borderRadius: 15,
//   },
//   blackText: {
//     color: "black",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   grayText: { color: "gray", fontSize: 14 },
//   blackBoldText: {
//     color: "black",
//     fontSize: 17,
//     fontWeight: "700",
//   },
//   grayBoldText: {
//     color: "gray",
//     fontSize: 18,
//     fontWeight: "700",
//   },
//   titleView: {
//     backgroundColor: "#fff",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     marginBottom: 10,
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   titleText: {
//     fontSize: 24,
//     color: "#000",
//     textAlign: "center",
//     marginVertical: 20,
//     fontWeight: "700",
//   },
//   logo: { height: 40, width: 40, marginHorizontal: 20 },
//   errorView: {
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   errorText: { color: "#eb4664", fontSize: 20, fontWeight: "500" },
//   loadingText: { color: "#000", fontSize: 20, fontWeight: "600" },
//   cuation: { height: 200, width: 200, resizeMode: "contain" },
// });

// export default CryptoPriceScreen;