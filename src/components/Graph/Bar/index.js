import React from 'react';
import { View } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts';

export default function Bar() {
    const fillTop = '#008000';
    const fillDown = '#FF0000';
    const data = [5, 2, 4, 2, 1, 2];
    const date = ['set', 'out', 'nov', 'dex', 'jan', 'fev'];

    return (
        <View>
            <BarChart 
                style={{ height: 70, width: 120, marginLeft: 10 }}
                data={data}
                svg={{ fill: fillTop }}
                contentInset={{ top: 10, bottom: 10 }}
                spacingInner={0.5}
            />

            <BarChart 
                style={{ height: 70, width: 120, marginLeft: 10 }}
                data={data}
                svg={{ fill: fillDown }}
                contentInset={{ top: 50, bottom: 60 }}
                spacingInner={0.5}
            />
                
            <XAxis
                style={{ marginHorizontal: -10 }}
                data={data}
                formatLabel={(value, index) => value}
                spacingInner={0.05}
                spacingOuter={0.05}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'gray' }}
            />
        </View>
    );
}