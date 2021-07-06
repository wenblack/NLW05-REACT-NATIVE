import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    //Checa o SO onde o app está rodando
    Platform,
    View,
    //Desloca o conteúdo ao digitar no teclado
    KeyboardAvoidingView,
    //Detecta e  fecha o teclado
    Keyboard,
    /*DICA UX: Para ter um movimento mais suave nao deixar elementos separados 
    ao utilizar o KeyboardAvoidingView*/

} from 'react-native';
import { Botao }
    from '../componentes/botao';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function Usuario() {
    /*estados criados para ver se usuário está longe do Input
    Caso não esteja o estado getPreenche é alterado pra true
    e confirma que usuário está no Input para executar a função*/
    const [getFoco, setFoco] = useState(false);
    const [getpreencheu, setPreencheu] = useState(false);
    //Estado para pegar Nome
    const [getNome, setNome] = useState<string>();
    //Utilizando estado e vendo se usuario está fora do Input
    //Caso esteja longe , nada é alterado
    function InputVazio() {
        setFoco(false);
        setPreencheu(!!true);
    }
    //Mudando o estado de focado para true caso usuário toque no form
    //Ao tocar no input muda a cor dele e o ìcone
    function InputTocado() {
        setFoco(true);

    }
    //Função criada para pegar o nome do usuário e chegar se ele digitou algo
    function InputPrenchido(value: string) {
        setPreencheu(!!value);
        setNome(value);

    }
    //Chamando Rotas
    const navegacao = useNavigation()

    function enviarNome() {
        navegacao.navigate('Confirmacao');

    }



    //Exemplo de validação de form com conceitos de UX
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}


                >
                    <View style={styles.conteudo}>
                        <View style={styles.formulario}>

                            <View style={styles.ux}>
                                <Text style={styles.emoji}>
                                    {getFoco ? '😁' : '😃'}
                                </Text>
                                <Text style={styles.titulo}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.input,
                                    //Se estiver preenchido ou selecionado alterar cor
                                    (getpreencheu || getFoco) &&
                                    { borderColor: colors.green }
                                ]}
                                placeholder="Digite seu nome"
                                //Detecta quando Input está sem preencher
                                onBlur={InputVazio}
                                //Detecta quando usuário toca no Insput
                                onFocus={InputTocado}
                                onChangeText={InputPrenchido}
                            ></TextInput>
                            <View style={styles.botao}>
                                <Botao
                                    title='Confirmar'
                                    onPress={enviarNome}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    //geral
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    //Itens gerais
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


    },//emoji
    emoji: {
        fontSize: 44
    },//Input
    input: {
        borderBottomWidth: 1,
        borderColor: colors.green_dark,
        color: colors.heading,
        width: '80%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },//titulo
    titulo: {
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
    },
    ux: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
