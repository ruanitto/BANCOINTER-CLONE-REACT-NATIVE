import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

export default function Line() {
    const data = [10,5,11,20,23,32, 55];
    const date = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'];

    const contentInset = { top: 20, bottom: 20 }

    return (
        <View style={{ height: 110, width: 140, flexDirection: 'column' }}>
            <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
            />

            <View style={{ flexDirection: 'row', maxWidth: 50, width: '100%', marginLeft: 3, marginTop: 5 }}>
                {date.map(month => (
                    <Text key={month} style={{ marginTop: -10, textAlign: 'left', margin: 2, color: '#CCC' }}>
                        {month}
                    </Text>
                ))}
            </View>
        </View>
    );
} 