import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert, TouchableOpacity} from 'react-native';
import CardComponent from './components/CardComponent';



const ListUsersScreen = ({route, navigation}) => {
    const [users,setUsers] = useState();

    const getUser = async () =>{
        const response = await fetch("https:/reqres.in/api/users?page=2");
        const responseJson = await response.json();
        setUsers(responseJson.data)     
    }
    useEffect(()=>{
        getUser()
    }, []);

    const details = (users) =>{
        navigation.navigate("Users",{
            users: users
        })
        console.log(users)
    }
    

    return(
        <View>
            <FlatList 
            data={users} 
            renderItem={({item}) =><TouchableOpacity onPress={()=>details(item)}><CardComponent data={item} ></CardComponent></TouchableOpacity>}>
            </FlatList>
        </View> 
    )
}


export default ListUsersScreen;
