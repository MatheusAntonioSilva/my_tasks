import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Registrar from './Registrar';
import Tasks from './Tarefas';

import {HeaderStyles} from './styles/AppStyles';

const Stack = createStackNavigator();

// disable Navigation header => headerMode="none"
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={HeaderStyles.login}
        />

        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={HeaderStyles.registrar}
        />

        <Stack.Screen
          name="TaskList"
          component={Tasks}
          options={HeaderStyles.tarefas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
