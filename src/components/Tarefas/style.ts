import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#262626',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        borderRadius: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 10,
        paddingBottom: 10
    },    

    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '400',
        width: '65%'
    },

    containerStyleCheckBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    imagem:{
        height: 16,
        width: 16,
        resizeMode: 'contain',
        marginRight: 30
    }

})