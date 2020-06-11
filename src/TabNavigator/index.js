import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import User from 'react-native-vector-icons/Feather';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Bar from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

import Perfil from '../TabNavigator/Perfil';
import Notifications from '../TabNavigator/Notifications';
import Services from '../TabNavigator/Services';

export default function TabNavigator() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{ 
                showIcon: true,
                tabStyle: {
                    height: 60,
                    alignItems: 'center',
                    backgroundColor: '#eee',
                },
            }}
            
        >
            <Tab.Screen name="Perfil" component={Perfil} options={{ title: '', tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <User name="user" color="#ff8700" size={25} />
                } else {
                    return <User name="user" color="#CCC" size={25} />
                }
            }}} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ title: '', tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Notification name="notifications" color="#ff8700" size={25} />
                } else {
                    return <Notification name="notifications" color="#CCC" size={25} />
                }   
            }}} />
            <Tab.Screen name="Servics" component={Services} options={{ title: '', tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Bar name="bars" color="#ff8700" size={25} />
                } else {
                    return <Bar name="bars" color="#CCC" size={25} />
                }
            }}}/>
        </Tab.Navigator>
    );
}