
//Importando bibliotecas necessárias
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,

} from '@expo-google-fonts/jost';
import { Welcome } from './src/assets/Telas/boasvindas';



//Criando componente principal
export default function App() {

  const [carregandoFonte] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!carregandoFonte)

    return <AppLoading />

  return (

    <Welcome />


  );
}

