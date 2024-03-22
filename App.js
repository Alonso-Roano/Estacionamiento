import React from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioAndroid from './Paginas/InicioAndroid';
import InicioWeb from './Paginas/InicioWeb';
import Usuarios from './Paginas/Usuarios';
import Estacionamiento from './Paginas/Estacionamiento';
import Detalles from './Paginas/Detalles';
 
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
          component={Estacionamiento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalles"
          component={Detalles}
          options={{headerShown:false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;