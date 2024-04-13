import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
    },
    headerTitle: {
        fontSize: 30,
        position: 'absolute',
        top: '20%',
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: 'Irish',
        color: '#ffffff'
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center'
    },
    itemMenu: {
        width: 239,
        height: 77,
        backgroundColor: 'rgba(0, 0, 0, 0.69)',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    textItemMenu: {
        fontFamily: 'Irish',
        fontSize: 20,
        color: '#ffffff'
    },
    imageItemMenu: {
        width: 42,
        height: 39,
        resizeMode: 'stretch',
        marginLeft: 20,
    },
});