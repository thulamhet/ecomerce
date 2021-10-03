import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../constants';
import { useNavigation } from "@react-navigation/native";

const Register = () => { 
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        //@ts-ignore
        onPress={()=> navigation.navigate('Login')}
      >
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={icons.back}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Register Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 50,
    marginTop: 200,
  }
})

export default Register;