import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Header from '../src/components/Header';
import TabNavigator from '../src/TabNavigator';

import Invite from '../src/components/Invite';
import Hireme from '../src/pages/Hireme';


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen name="Header" component={Header} />
                <Stack.Screen name="Hireme" component={Hireme} />
                <Stack.Screen name="Invite" component={Invite} />
                <Stack.Screen name="Tab" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}