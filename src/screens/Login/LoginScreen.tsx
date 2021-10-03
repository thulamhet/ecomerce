import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>Mobile-312312BTL</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder='Username'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder='Password'
      />
      <TouchableOpacity
        style={styles.loginBtn}
        //@ts-ignore
        // onPress = {()=> navigation.navigate('Home')}
      >
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerBtn}
        onPress={()=>{}}
      >
        
      <TouchableOpacity
        //@ts-ignore
        onPress={()=> navigation.navigate('Register')}
      >
        <Text style={{fontWeight: 'bold'}}>Register</Text>
        <View style={{width: 60, height: 2, backgroundColor: 'black'}}/>

      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotBtn}
        //@ts-ignore
        onPress={()=> navigation.navigate('ForgotPassword')}
      >
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  loginBtn: {
    borderWidth: 1,
    width: 350,
    height: 50,
    backgroundColor: 'black', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  registerBtn: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 20,
  },
  forgotBtn: {
    marginTop: 30,
  }
});

export default Login;