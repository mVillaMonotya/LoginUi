import React from 'react';
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import RegistrerStyles from './RegistrerStyles';import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';



const RegistrerScreen = ({navigation}) => {

    const goLogin = () =>{        
        navigation.navigate("Login")
    }

    return(
        <View style={RegistrerStyles.container}>
            <StatusBar backgroundColor="orange"></StatusBar>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={RegistrerStyles.header}>
                <Image style={RegistrerStyles.logo} source={require('./../../../shared/img/account.png')}></Image>
                <View style={RegistrerStyles.titleSection}>
                    <Text style={RegistrerStyles.text}>Registrer</Text>
                </View>
            </LinearGradient>
            <View style={RegistrerStyles.form}>
                <TextInput style={RegistrerStyles.input} placeholder="Fullname"></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Email"></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Phone number"></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Password"></TextInput>
                
            </View>
            <View style={RegistrerStyles.verify}>
                <TouchableOpacity >
                    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                        <Text style={RegistrerStyles.textButton}>Registrer</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={RegistrerStyles.option}>
                    <Text>Already a member?</Text>
                    <TouchableOpacity onPress={goLogin}>
                        <Text style={RegistrerStyles.registrer}>  Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}

export default RegistrerScreen;
