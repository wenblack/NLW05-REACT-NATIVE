
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import wateringImg from '../../../src/assets/watering.png';
import colors from '../../../styles/colors';


/*Exemplo de Interface:
***************************************************************************
interface ButtonProps {
    title: string;
}
*******************************************************************************
Implementando na funcção:
export function Button({ title }: ButtonProps) {
    <Text>
        {title}
    </Text>
*********************************************************************************************
Usando componente

<Button title={"Teste de interface"}></Button>

*/
export function Welcome() {
    return (

        <SafeAreaView style={style.container}>

            <Text style={style.titulo}>
                Gerencie{'\n'}
                suas plantas {'\n'}
                de forma fácil</Text>

            <Image source={wateringImg} style={style.imagem}></Image>
            <Text style={style.subtitulo}>Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você
                sempre que precisar.</Text>
            <TouchableOpacity style={style.botao}
                activeOpacity={0.7}
            >
                <Text style={style.textoBotao}>></Text>
            </TouchableOpacity>



        </SafeAreaView>
    );
}
//Criando primeiro estilo
const style = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-evenly', alignItems: 'center'
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
    botao: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56

    },
    imagem: {
        width: 292,
        height: 284
    },
    textoBotao: {
        color: colors.white,
        fontSize: 25
    }

})

