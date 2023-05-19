import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const baseUrl = "https://api.otaviolube.com";

export default function CardFilme({filme}){
    return(
       <View style={styles.container}>
            <Image style={styles.image} source={{uri : baseUrl + filme.poster.data.attributes.url}}/>
            <Text style={styles.title}> {filme.titulo}</Text>
            <Text> {filme.sinopse}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10
    },

    sinopse: {
        marginBottom: 10,
    },

    button: {
        height: 50,
        width: 100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'

    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
