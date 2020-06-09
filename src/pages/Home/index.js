import React from 'react';
import { Text } from 'react-native';
import File from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Feather';

import { BarChart, XAxis } from 'react-native-svg-charts';

import { Container, Box, HeaderBox, Card, Area,
    Info, Graphic, Title, Value
} from './styles';

export default function Home() {
    const fillTop = '#008000';
    const fillDown = '#FF0000';
    const data = [5, 2, 4, 2, 1, 2];
    const date = ['set', 'out', 'nov', 'dex', 'jan', 'fev'];

    return (
        <Container>
            <Card>
                <Box>
                    <HeaderBox>
                        <File name="file-text" size={25} color="#FF8700" />
                        <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>Extrato</Text>    
                    </HeaderBox>

                    <Eye name="eye" size={25} color="#ddd" />
                </Box>

                <Area>
                    <Graphic>
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
                            data={date}
                            formatLabel={(value, index) => value}
                            spacingInner={0.05}
                            spacingOuter={0.05}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'gray' }}
                        />
                    </Graphic>

                    <Info>
                        <Title>Receita - fev</Title>
                        <Value color={'#008000'}>R$ 810,00</Value>

                        <Title>Despesas - fev</Title>
                        <Value color={'#E04021'}>R$ 599,75</Value>
                    </Info>

                    
                </Area>
            </Card>         
        </Container>
    );
}