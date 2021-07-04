import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Botao }
    from '../componentes/botao';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Usuario() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.conteudo}>
                    <View style={styles.formulario}>
                        <Text style={styles.emoji}>
                            😁
                        </Text>
                        <Text style={styles.texto}>
                            Como podemos {'\n'}
                            chamar você?
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome"
                        ></TextInput>
                        <View style={styles.botao}>
                            <Botao />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    conteudo: {
        flex: 1,
        width: '100%',
    },
    formulario: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',


    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.green_dark,
        color: colors.heading,
        width: '80%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },
    texto: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 32,
        marginTop: 20
    },
    botao: {
        marginTop: 40,
        width: '80%',
        paddingHorizontal: 20
    }
});
