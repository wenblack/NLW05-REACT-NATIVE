//Importando Biliotecas e telas necessárias para criar rotas e navegaçao 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../styles/colors';
import { Welcome } from '../assets/Telas/boasvindas';
import { Usuario } from '../assets/Telas/usuario';
import { Confirmacao } from '../assets/Telas/confirmacao';

//Criando Navegador
const rotas = createStackNavigator();
//Personalizando Menu de Navegação 
const AppRoutes: React.FC = () => (
    <rotas.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}

    >
        <rotas.Screen
            name="Welcome"
            component={Welcome}
        />


        <rotas.Screen
            name="Usuario"
            component={Usuario}
        />

        <rotas.Screen
            name="Confirmacao"
            component={Confirmacao}
        />

    </rotas.Navigator>

)

export default AppRoutes;
