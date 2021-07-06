//Chamando rotas do arquivo stack.routes
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from "./stack.routes";



const index = () => (
    <NavigationContainer>
        <AppRoutes ></AppRoutes>
    </NavigationContainer>

)

export default index;