import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Perfil from '../TabNavigator/Perfil';
import Notifications from '../TabNavigator/Notifications';
import Services from '../TabNavigator/Services';

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Servics" component={Services} />
        </Tab.Navigator>
    );
}