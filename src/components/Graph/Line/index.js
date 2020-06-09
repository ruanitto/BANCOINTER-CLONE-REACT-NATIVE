import React from 'react';
import { View } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';

export default function Line() {
    const data = [10,5,20,23,]

    const contentInset = { top: 20, bottom: 20 }

    return (
        <View style={{ height: 150, width: 120, flexDirection: 'row' }}>
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                
               
            />
            
            <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
            >
                <Grid />
            </LineChart>
        </View>
    );
} 