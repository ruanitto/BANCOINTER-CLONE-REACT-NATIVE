import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

import File from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Feather';
import Credit from 'react-native-vector-icons/AntDesign';
import Pai from 'react-native-vector-icons/MaterialCommunityIcons';

import card from '../../assets/services/mastercard.png';
import pig from '../../assets/services/pig.png';
import invest from '../../assets/services/invest.png';

import { Container, Box, HeaderBox, Card, Area,
    Info, Graphic, Title, Value, AreaHide, TextHide,
    Image, AreaText, Button, CardText, AreaCardHide,
    TitlePie, ValuePie, AreaPie
} from './styles';

import BarChart from '../../components/Graph/Bar';
import PieChart from '../../components/Graph/Pizza';
import LineChart from '../../components/Graph/Line';

import Products from '../../components/Products';

export default function Home({ navigation }) {
    const [isClickExtract, setIsClickExtract] = useState(true);
    const [isClickCard, setIsClickCard] = useState(true);
    const [isClickPai, setIsClickPai] = useState(true);

    function handleHideExtract() {
        setIsClickExtract(!isClickExtract);
    }

    function handleHideCard() {
        setIsClickCard(!isClickCard);
    }

    function handleHidePai() {
        setIsClickPai(!isClickPai);
    }

    return (
        <Container>
            <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} >
                <Card>
                    <Box>
                        <HeaderBox>
                            <File name="file-text" size={25} color="#FF8700" />
                            <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>Extrato</Text>    
                        </HeaderBox>

                        <Button onPress={handleHideExtract}>
                            {isClickExtract ? (
                                <Eye name="eye" size={25} color="#ddd" />
                            ) : (
                                <Eye name="eye-off" size={25} color="#ddd" />
                            )}
                        </Button>
                    </Box>

                    <Area>
                        {isClickExtract ? (
                            <>
                                <Graphic>
                                    <BarChart />
                                </Graphic>

                                <Info>
                                    <Title>Receita - fev</Title>
                                    <Value color={'#008000'}>R$ 810,00</Value>

                                    <Title>Despesas - fev</Title>
                                    <Value color={'#E04021'}>R$ 599,75</Value>
                                </Info>
                            </>
                        ) : (
                            <AreaHide>
                                <Image source={pig} />

                                <AreaText>
                                    <TextHide>As informações estão ocultas para garantir sua privacidade, para habilitá-las, basta clicar no olho acima.</TextHide>
                                </AreaText>
                            </AreaHide>
                        )}                        
                    </Area>
                </Card>    

                <Card>
                    <Box>
                        <HeaderBox>
                            <Credit name="creditcard" size={25} color="#FF8700" />
                            <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>MasterCard 3645</Text>    
                        </HeaderBox>

                        <Button onPress={handleHideCard}>
                            {isClickCard ? (
                                <Eye name="eye" size={25} color="#ddd" />
                            ) : (
                                <Eye name="eye-off" size={25} color="#ddd" />
                            )}
                        </Button>
                    </Box>

                    <AreaPie>
                        {isClickCard ? (
                            <>
                                <Graphic>
                                    <PieChart />
                                </Graphic>

                                <Info>
                                    <TitlePie>Fatura atual</TitlePie>
                                    <ValuePie color={'#dd0'}>R$ 675,00</ValuePie>

                                    <TitlePie>Limite disponível</TitlePie>
                                    <ValuePie color={'#00ff00'}>R$ 675,00</ValuePie>

                                    <TitlePie>Próximas faturas</TitlePie>
                                    <ValuePie color={'#ff0000'}>R$ 675,00</ValuePie>
                                </Info>
                            </>
                        ) : (
                            <AreaCardHide>
                                <Image source={card} />

                                <CardText>
                                    <TextHide>Seu cartão é MasterCard e sem anuidade.</TextHide>
                                </CardText>
                            </AreaCardHide>
                        )}                        
                    </AreaPie>
                </Card>

                <Card>
                    <Box>
                        <HeaderBox>
                            <Pai name="cash-multiple" size={25} color="#FF8700" />
                            <Text style={{ marginLeft: 10, color: '#CCCCCC' }}>Plataforma Aberta Inter</Text>    
                        </HeaderBox>

                        <Button onPress={handleHidePai}>
                            {isClickPai ? (
                                <Eye name="eye" size={25} color="#ddd" />
                            ) : (
                                <Eye name="eye-off" size={25} color="#ddd" />
                            )}
                        </Button>
                    </Box>

                    <Area>
                        {isClickPai ? (
                            <>
                                <Graphic>
                                    <LineChart />
                                </Graphic>

                                <Info>
                                    <Title>Total investido</Title>
                                    <Value color={'#191920'}>R$ 810,00</Value>

                                    <Title>Evolução</Title>
                                    <Value color={'#00ff'}>R$ 599,75</Value>
                                </Info>
                            </>
                        ) : (
                            <AreaHide>
                                <Image source={invest} />

                                <AreaText>
                                    <TextHide>Invista seu dinheiro no nosso banco, pois assim quanto mais dinheiro investido mais benefícios você receberá.</TextHide>
                                </AreaText>
                            </AreaHide>
                        )}                        
                    </Area>
                </Card>             
            </ScrollView>

            <Products navigation={navigation} />
        </Container>
    );
}