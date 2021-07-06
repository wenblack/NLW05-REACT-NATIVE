//Exemplo de componente
import React from 'react';
//Cores
import colors from '../../../styles/colors';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    //Biblioteca Necessária para definir propriedades personalizadas ao botao
    TouchableOpacityProps
} from 'react-native';
//Fontes
import fonts from '../../../styles/fonts';
/*Herdando caracteristicas de um TouchableOpacity
com titulo Dinamico
*/
interface CliqueDoBotao extends TouchableOpacityProps {
    title: string;
}
//Herando todas as outras propriedades automanticamente e padrão
export function Botao({ title, ...rest }: CliqueDoBotao) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.texto}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}
//Estilos
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