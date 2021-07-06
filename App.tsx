
//Importando bibliotecas necessárias
import React from 'react';
//Biblioteca necessária para SplashScreen enquanto carrega fontes
import AppLoading from 'expo-app-loading';
//chamando fontes que deseja importar
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,

} from '@expo-google-fonts/jost';
//Chamando Rotas
import Index from './src/routes';

export default function App() {
  //função necessária para carregar Splash e fontes
  const [carregandoFonte] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!carregandoFonte)

    return <AppLoading />

  return (

    <Index />


  );
}

