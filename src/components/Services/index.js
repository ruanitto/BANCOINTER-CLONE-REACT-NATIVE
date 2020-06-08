import React from 'react';
import ArrowDown from 'react-native-vector-icons/Feather';

import { Container, Box, Card, Area, AreaImage,
    Icon, Title
} from './styles';

export default function Services() {
    const array = [
        {
            id: 1, name: 'Cartões', image: require('../../assets/credit-card.png') 
        },
        {
            id: 2, name: 'Gift Card', image: require('../../assets/gift.png')
        },
        {
            id: 3, name: 'Seguros', image: require('../../assets/umbrella.png') 
        },
        {
            id: 4, name: 'Interpag', image: require('../../assets/credit-card.png') 
        },
        {
            id: 5, name: 'Depósito por boleto', image: require('../../assets/transfer.png') 
        },
        {
            id: 6, name: 'Depósito por cheque', image: require('../../assets/dolar.png')
        },
        {
            id: 7, name: 'Conta MEI', image: require('../../assets/business-and-finance.png')
        },
        {
            id: 8, name: 'Agendamentos', image: require('../../assets/calendar.png') 
        },
        {
            id: 9, name: 'Portabilidade de salário', image: require('../../assets/work.png')
        },
        {
            id: 10, name: 'Crédito', image: require('../../assets/payment.png')
        },
        {
            id: 11, name: 'Financiamento imobiliário', image: require('../../assets/dollar.png') 
        },
        {
            id: 12, name: 'Débito automático', image: require('../../assets/money.png')
        },
        {
            id: 13, name: 'Consórcio', image: require('../../assets/keys.png') 
        },
        {
            id: 14, name: 'Câmbio', image: require('../../assets/dolar.png') 
        },
        {
            id: 15, name: 'Recarga', image: require('../../assets/deposit.png')
        }
    ];

    return (
        <Container>
            <Box 
                data={array}
                numColumns={3}
                renderItem={({ item }) => (
                   <Area key={item.id}>
                        <AreaImage>
                            <Icon source={item.image} />
                        </AreaImage>

                        <Title> {item.name} </Title>
                   </Area>
                )}   
            />
            
            <Card>
                <ArrowDown name="chevron-down" color="#FF8700" size={45} />
            </Card>
        </Container>
    );
}