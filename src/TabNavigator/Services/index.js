import React from 'react';
import { View, ScrollView } from 'react-native';

import ArrowRight from 'react-native-vector-icons/Feather';
import ArrowLeft from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/Ionicons';

import man from '../../assets/doctor.png';

import { Container, AreaArrow, PerfilArea, Image, Name, 
    Info, Agency, Account, Area, Title, List, 
    Icon, ServicesArea, HelpArea, Shopping, Box, AreaIcon,
    AreaInfo, Description, Help, ButtonBack
} from './styles';

export default function Services({ navigation }) {
    const array = [
        {
            id: 1, name: 'Transferências', image: require('../../assets/credit-card.png')
        },
        {
            id: 2, name: 'Pagamentos', image: require('../../assets/price.png')
        },
        {
            id: 3, name: 'Investimentos', image: require('../../assets/pai.png')
        },
        {
            id: 4, name: 'Cartões', image: require('../../assets/keys.png') 
        },
        {
            id: 5, name: 'Gift Card', image: require('../../assets/gift.png')
        },
        {
            id: 6, name: 'Seguros', image: require('../../assets/umbrella.png') 
        },
        {
            id: 7, name: 'Interpag', image: require('../../assets/payment.png') 
        },
        {
            id: 8, name: 'Depósito por boleto', image: require('../../assets/transfer.png') 
        }
    ];

    function navigationBack() {
        navigation.navigate('Header');
    }

    return (
        <>
            <Container>
                <AreaArrow>
                    <ButtonBack onPress={navigationBack}>
                        <ArrowLeft name="arrow-left" color="#FF8700" size={25} />
                    </ButtonBack>
                </AreaArrow>

                <PerfilArea>
                    <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }} />
                    <Name>Max</Name>

                    <Info>
                        <Agency>agência 0001</Agency>
                        <Account>conta 01043791-3</Account>
                    </Info>
                </PerfilArea>
            </Container>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <List 
                    data={array}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Area>
                            <ServicesArea>
                                <Icon source={item.image} />
                                <Title> {item.name} </Title>
                            </ServicesArea>

                            <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                        </Area>
                    )}
                />

                <Help>
                    <Description>Central de ajuda</Description>
                </Help>

                <HelpArea>
                    <Shopping>
                        <Box>
                            <AreaIcon>
                                <Icon source={man} />
                            </AreaIcon>

                            <AreaInfo>
                                <Title>Oi, Max.</Title>
                                <Description>Posso ajudar?</Description>
                            </AreaInfo>
                        </Box>

                        <ArrowRight name="arrow-right" size={25} color="#FF8700"/>
                    </Shopping> 
                </HelpArea>
            </ScrollView>
        </>
    );
}