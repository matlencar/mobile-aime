import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../pages/Home';
import ProfileScreen from '../pages/Perfil';

const homeName = "Home";
const perfilName = "Perfil";


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    
      <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';

            }
            if (rn === perfilName){
              iconName = focused ? 'account' : 'account'; 
            }
 
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            
          },
          screenOptions: {
            tabBarActiveTintColor: '#e42b37',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10,},
            tabBarStyle: [
              {
                padding: 10, height: 70,
                "display": "flex"
              },
              null
            ]
          }
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={perfilName} component={ProfileScreen} options={{headerShown: false}}/>

      </Tab.Navigator>
    
  );
}

export default TabNav;
