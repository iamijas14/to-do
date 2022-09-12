import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Task from './Screens/Task'
import Edit from './Screens/Edit';

const ToDoApp = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Splash'
          screenOptions= {{
            headerStyle: {
              backgroundColor: '#eab308',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 33,
              fontFamily: 'Acme-Regular',
            }
          }} 
        >
            <RootStack.Screen 
                name= 'Splash'
                component={Splash}
                options = {{
                  headerShown: false
                }}
            />

            <RootStack.Screen 
                name= 'My Tasks'
                component={Home}
            />

            <RootStack.Screen 
                name= 'Task'
                component={Task}
            />

            <RootStack.Screen 
                name= 'Edit'
                component={Edit}
            />
        </RootStack.Navigator>
     </NavigationContainer>
)};

export default ToDoApp;
