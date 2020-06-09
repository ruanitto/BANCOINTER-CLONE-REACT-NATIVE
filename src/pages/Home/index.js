import React from 'react';
import { Text } from 'react-native';
import File from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Feather';

import { BarChart } from 'react-native-svg-charts';

import { Container, Box, HeaderBox, Card, Area,
    Info, Graphic
} from './styles';

export default function Home() {
    const data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <Container>
            <Card>
                <Box>
                    <HeaderBox>
                        <File name="file-text" size={30} color="#FF8700" />
                        <Text style={{ marginLeft: 10 }}>Extrato</Text>    
                    </HeaderBox>

                    <Eye name="eye" size={30} color="#ddd" />
                </Box>

                <Area>
                    <Graphic>
                       
                    </Graphic>

                    <Info>
                        <Text>Receita - fev</Text>
                        <Text style={{ color: '#008000' }} >R$ 810,00</Text>

                        <Text>Despesas - fev</Text>
                        <Text style={{ color: '#E04021' }} >R$ 599,75</Text>
                    </Info>
                </Area>
            </Card>         
        </Container>
    );
}