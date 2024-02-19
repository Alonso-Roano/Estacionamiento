import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioAndroid from './Paginas/InicioAndroid';
import InicioWeb from './Paginas/InicioWeb';
import Usuarios from './Paginas/Usuarios';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Inicio"
          component={InicioAndroid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={InicioWeb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          options={{headerShown:false}}
        />

        
      
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;