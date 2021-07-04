import React from 'react';
import colors from '../../../styles/colors';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import fonts from '../../../styles/fonts';

export function Botao() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.texto}>
                Confirmar
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'


    },
    texto: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,

    },
})