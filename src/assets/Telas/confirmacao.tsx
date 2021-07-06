import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,

} from 'react-native';

import { Botao } from '../componentes/botao';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Confirmacao() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.emoji}>
                    😃
                </Text>
                <Text style={styles.titulo}>
                    Prontinho
                </Text>
                <Text style={styles.subtitulo}>
                    Agora vamos começar a cuidar das sua plantinhas
                    com muito cuidado
                </Text>
                <View style={styles.rodape}>
                    <Botao
                        title='Começar'
                    />
                </View>

            </View>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30


    },

    titulo: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },

    subtitulo: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: colors.heading,
        paddingBottom: 30

    },

    emoji: {
        fontSize: 78
    },

    rodape: {
        width: '80%',
        paddingHorizontal: 50,
        marginTop: 20


    }

});