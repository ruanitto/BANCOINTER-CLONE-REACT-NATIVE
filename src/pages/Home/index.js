import React from 'react';
import { Text, ScrollView } from 'react-native';
import File from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Feather';
import Credit from 'react-native-vector-icons/AntDesign';

import { Container, Box, HeaderBox, Card, Area,
    Info, Graphic, Title, Value
} from './styles';

import BarChart from '../../components/Graph/Bar';
import PieChart from '../../components/Graph/Pizza';
import LineChart from '../../components/Graph/Line';

import Products from '../../components/Products';

export default function Home() {
    return (
        <Container>
            <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} >
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
                            <BarChart />
                        </Graphic>

                        <Info>
                            <Title>Receita - fev</Title>
                            <Value color={'#008000'}>R$ 810,00</Value>

                            <Title>Despesas - fev</Title>
                            <Value color={'#E04021'}>R$ 599,75</Value>
                        </Info>

                        
                    </Area>
                </Card>    

                <Card>
                    <Box>
                        <HeaderBox>
                            <Credit name="creditcard" size={25} color="#FF8700" />
                            <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>MasterCard 3645</Text>    
                        </HeaderBox>

                        <Eye name="eye" size={25} color="#ddd" />
                    </Box>

                    <Area>
                        <Graphic>
                            <PieChart />
                        </Graphic>

                        <Info>
                            <Title>Receita - fev</Title>
                            <Value color={'#008000'}>R$ 810,00</Value>

                            <Title>Despesas - fev</Title>
                            <Value color={'#E04021'}>R$ 599,75</Value>
                        </Info>

                        
                    </Area>
                </Card>

                <Card>
                    <Box>
                        <HeaderBox>
                            <File name="file-text" size={25} color="#FF8700" />
                            <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>Plataforma Aberta Inter</Text>    
                        </HeaderBox>

                        <Eye name="eye" size={25} color="#ddd" />
                    </Box>

                    <Area>
                        <Graphic>
                            <LineChart />
                        </Graphic>

                        <Info>
                            <Title>Total investido</Title>
                            <Value color={'#008000'}>R$ 810,00</Value>

                            <Title>Evolução</Title>
                            <Value color={'#E04021'}>R$ 599,75</Value>
                        </Info>
                    </Area>
                </Card>             
            </ScrollView>

            <Products />
        </Container>
    );
}