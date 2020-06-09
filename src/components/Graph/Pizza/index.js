import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export default function Pizza() {
    const data = [50, 10, 40];

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
        <View>
            <PieChart
                style={{ height: 100 }}
                data={pieData}
            />
        </View>
    );
}