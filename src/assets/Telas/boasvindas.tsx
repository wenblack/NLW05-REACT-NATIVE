
import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View
}
    from 'react-native';
import wateringImg from '../../../src/assets/watering.png';
import colors from '../../../styles/colors';
import { Feather } from '@expo/vector-icons';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/native';


export function Welcome() {
    const navegacao = useNavigation()
    //Iniciando Rota
    function inicioDaNavegacao() {
        navegacao.navigate('Usuario');

    }



    return (

        <SafeAreaView style={style.container}>
            <View style={style.toqueFinal}>


                <Text style={style.titulo}>
                    Gerencie{'\n'}
                    suas plantas de {'\n'}
                    forma fácil</Text>

                <Image
                    source={wateringImg}
                    style={style.imagem}
                    resizeMode='contain'
                >
                </Image>
                <Text style={style.subtitulo}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você
                    sempre que precisar.</Text>
                <TouchableOpacity style={style.botao}
                    activeOpacity={0.7}
                    onPress={inicioDaNavegacao}
                >
                    <Feather
                        name='chevron-right'
                        style={style.icone}
                    ></Feather>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}
//Estilos
const style = StyleSheet.create({
    container: {
        flex: 1,

    },

    toqueFinal: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34

    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },

    imagem: {
        height: 264,
        width: 272
    },
    botao: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 55,
        width: 55

    },
    icone: {
        fontSize: 31,
        color: colors.white,
        alignSelf: 'center',
    }


})

