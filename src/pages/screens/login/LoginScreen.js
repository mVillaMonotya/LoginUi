import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import LoginStyles from './LoginStyles';import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendUser = async () =>{
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userEmail: email,
              userPassword: password
            })
          });
          const responseJson = await response.json();
          navigation.navigate("ListUsers",{
              _email: email,
              _password: password
          })
    }

    const goRegist = () =>{        
        navigation.navigate("Registrer")
    }

    const getUser = async () =>{
        const response = await fetch("https:/reqres.in/api/users/2");
        const responseJson = await response.json();
    }

    return(
        <View style={LoginStyles.container}>
            <StatusBar backgroundColor={Colors.primary}></StatusBar>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={LoginStyles.header}>
                <Image style={LoginStyles.logo} source={require('./img/account.png')}></Image>
                <View style={LoginStyles.titleSection}>
                    <Text style={LoginStyles.text}>Login</Text>
                </View>
            </LinearGradient>
            <View style={LoginStyles.form}>
                <TextInput style={LoginStyles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)}></TextInput>
                <TextInput style={LoginStyles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>setPassword(text)}></TextInput>
                <TouchableOpacity style={LoginStyles.recovery}>
                    <Text>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <View style={LoginStyles.verify}>
                <TouchableOpacity onPress={sendUser}>
                    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}  >
                        <Text style={LoginStyles.textButton}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={LoginStyles.option}>
                    <Text>Don't have account?</Text>
                    <TouchableOpacity onPress={goRegist}>
                        <Text style={LoginStyles.registrer}>  Registrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}

export default LoginScreen;
