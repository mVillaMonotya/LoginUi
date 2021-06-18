
import React from 'react';
import {View, Text, Image} from 'react-native';
import CardStyles from './CardStyles';

const CardComponent = (params) => {
    const {data} = params;
    
  return (
    <View style={CardStyles.container}>
      <View style={CardStyles.innerPic}>
        <Image source={{uri: data.avatar}} style={{width:180, height: 180}} borderBottomLeftRadius={15} borderTopLeftRadius={15}/>
      </View>
      <View style={CardStyles.innerText}>
        <Text style={CardStyles.text}>{data.id}</Text>
        <Text style={CardStyles.text}>{data.first_name}</Text>
        <Text style={CardStyles.text}>{data.last_name}</Text>
        <Text style={CardStyles.text}>{data.email}</Text>
    </View>
    </View>
  )
}

export default CardComponent;
