import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../shared/colors/Colors';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DEDEDE"
    },
    header: {
        flex: 1,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        flex: 2,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30
    },
    verify: {
        flex: 1,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 70
    },
    logo: {
        width: 110,
        height: 110
    },
    titleSection: {
        flex: 1,
        position: "absolute",
        right: 30,
        bottom: 30
    },
    text: {
        color: "white",
        fontSize: 20,
    },
    input: {
        backgroundColor: "white",
        height: 40,
        paddingLeft: 20,
        marginTop: 30,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        elevation: 10,
    },
    recovery: {
        marginTop: 20,
        alignItems: "flex-end",
        
    },
    textButton: {
        color: "white",
        fontSize: 20,
    },
    option: {
        position: "absolute",
        marginTop: 15,
        bottom: 15,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    registrer: {
        color: Colors.primary
    }
    
    




});

export default LoginStyles;
