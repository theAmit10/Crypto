import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to HomeScreen after 3000 milliseconds (3 seconds)
    const timer = setTimeout(() => {
      navigation.navigate("Onboard");
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
          source={require("../../assets/image/splashscreen.png")}
          style={styles.image}
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust the image's resizeMode as needed
  },
  
});
