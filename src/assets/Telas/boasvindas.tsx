
import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
}
    from 'react-native';
import wateringImg from '../../../src/assets/watering.png';
import colors from '../../../styles/colors';
import { Feather } from '@expo/vector-icons';


/*Exemplo de uso de duas interfaces em um mesmo componente:
***************************************************************************
interface ButtonProps extends TouchableOpacity {
    title: string;
}
*******************************************************************************
Implementando na funcção:
export function Button({ title, ... rest }: ButtonProps) {
    <Text>
        {title}
    </Text>
*********************************************************************************************
Usando componente

<Button title={"Teste de interface" onPress={}}></Button>

*/
export function Welcome() {
    return (

        <SafeAreaView style={style.container}>

            <Text style={style.titulo}>
                Gerencie{'\n'}
                suas plantas {'\n'}
                de forma fácil</Text>

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
            >
                <Text style={style.textoBotao}>
                    <Feather
                        name='chevron-right'
                        style={style.icone}
                    ></Feather>
                </Text>
            </TouchableOpacity>



        </SafeAreaView>
    );
}
//Estilos
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38

    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading
    },

    imagem: {
        height: 284,
        width: 292
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

    textoBotao: {
        color: colors.white,
        fontSize: 25,

    },
    icone: {
        fontSize: 31,
        color: colors.white,
        alignSelf: 'center',
    }


})

