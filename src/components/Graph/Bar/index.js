import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-svg-charts';

export default function Bar() {
    const fillTop = '#008000';
    const fillDown = '#FF0000';
    const data = [5, 2, 4, 2, 1, 2];
    const date = ['set', 'out', 'nov', 'dez', 'jan', 'fev'];

    return (
        <View>
            <BarChart 
                style={{ height: 60, width: 120, marginLeft: 10 }}
                data={data}
                svg={{ fill: fillTop }}
                contentInset={{ top: 10, bottom: 10 }}
                spacingInner={0.5}
            />

            <BarChart 
                style={{ height: 65, width: 120, marginLeft: 10 }}
                data={data}
                svg={{ fill: fillDown }}
                contentInset={{ top: 50, bottom: 60 }}
                spacingInner={0.5}
            />

            <View style={{ flexDirection: 'row', maxWidth: 50, width: '100%', marginLeft: 3, marginTop: 5 }}>
                {date.map(month => (
                    <Text key={month} style={{ marginTop: -20, textAlign: 'left', margin: 1, color: '#CCC' }}>
                        {month}
                    </Text>
                ))}
            </View>
                
        </View>
    );
}