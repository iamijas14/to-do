import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ToDo from "./To-do";
import Done from "./Done";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) =>  ({
              tabBarIcon: ({focused, size, color}) => {
                let iconName;
    
                if(route.name === 'To-Do'){
                  iconName = 'clipboard-list'
                  size = focused ? 25 : 20;
                } else if(route.name === 'Done'){
                  iconName = 'clipboard-check'
                  size = focused ? 25 : 20;
                }
    
                return (
                  <FontAwesome5 
                    name={iconName}
                    size={size}
                    color= {color}
                  />
                )
              },

              tabBarActiveTintColor: '#eab308',
              tabBarInactiveTintColor: '#777777',
              tabBarLabelStyle: {
                fontSize: 20,
                fontFamily: 'Acme-Regular',
              },
              tabBarStyle: {
                height: 60,
              },

              headerShown: false,
            })
      }       
    >
      <Tab.Screen name='To-Do' component={ToDo} />
      <Tab.Screen name='Done' component={Done} />
    </Tab.Navigator>
  )
}

export default Home;