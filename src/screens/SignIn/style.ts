import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image:{
        height: 360,
        width: '100%',
    },

    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 30
    },

    subtitle:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 44,
        fontFamily: theme.fonts.title500,
        lineHeight: 15
    },

    content:{
        marginTop: -40,
        paddingHorizontal: 50
    }



})