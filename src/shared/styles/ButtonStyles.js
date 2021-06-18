import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyles = StyleSheet.create({

    small: {
        width: Dimensions.get("screen").width * 0.5,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    medium: {
        width: Dimensions.get("screen").width * 0.7,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    large: {
        width: Dimensions.get("screen").width * 0.85,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ButtonStyles;