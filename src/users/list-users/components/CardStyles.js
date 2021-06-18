import {Dimensions, StyleSheet } from 'react-native';

const CardStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('screen').height * 0.25,
        width: Dimensions.get('screen').width,
        flexDirection: "row",
        margin: 10,
    },
    innerPic:{
        flex: 1,
    },
    innerText: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        marginBottom: 8,
        fontSize: 11
    }
})

export default CardStyles;