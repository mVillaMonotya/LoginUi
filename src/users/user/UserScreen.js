import React from 'react';
import {View, Text} from 'react-native';

const UserScreen = ({route, navigation}) =>{

    const user = route.params.user

    return(
        <View>
            <Text>hola</Text>
        </View>
    )
};


export default UserScreen