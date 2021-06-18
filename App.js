/*import React from 'react';
import LoginScreen from './src/pages/screens/login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <LoginScreen></LoginScreen>
  );
}



export default App;*/

import React from 'react';
import LoginScreen from './src/pages/screens/login/LoginScreen';
import RegistrerScreen from './src/pages/screens/registrer/RegistrerScreen';
import ListUsersScreen from './src/users/list-users/ListUsersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from './src/users/user/UserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Registrer" component={RegistrerScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ListUsers" component={ListUsersScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Users" component={UserScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;



/*import React from 'react';
import RegistrerScreen from './src/pages/screens/registrer/RegistrerScreen';

const App = () => {
  return (
    <RegistrerScreen></RegistrerScreen>
  );
}



export default App;*/