import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'red',
  }
})

export default Profile;