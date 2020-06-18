import React, { useState } from 'react';
import ArrowDown from 'react-native-vector-icons/Feather';

import { Container, Box, Card, Area, AreaImage,
    Icon, Title, OpenButton
} from './styles';

import Home from '../../pages/Home';

export default function Services({ navigation }) {
    const [isClick, setIsClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const arrFirst = [
        {
            id: 1, name: 'Transferências', image: require('../../assets/change.png')
        },
        {
            id: 2, name: 'Pagamentos', image: require('../../assets/price.png')
        },
        {
            id: 3, name: 'Investimentos', image: require('../../assets/credit-card.png')
        }
    ]

    const array = [
        {
            id: 1, name: 'Transferências', image: require('../../assets/change.png')
        },
        {
            id: 2, name: 'Pagamentos', image: require('../../assets/price.png')
        },
        {
            id: 3, name: 'Investimentos', image: require('../../assets/credit-card.png')
        },
        {
            id: 4, name: 'Cartões', image: require('../../assets/credit-card.png') 
        },
        {
            id: 5, name: 'Gift Card', image: require('../../assets/gift.png')
        },
        {
            id: 6, name: 'Seguros', image: require('../../assets/umbrella.png') 
        },
        {
            id: 7, name: 'Interpag', image: require('../../assets/credit-card.png') 
        },
        {
            id: 8, name: 'Depósito por boleto', image: require('../../assets/transfer.png') 
        },
        {
            id: 9, name: 'Depósito por cheque', image: require('../../assets/dolar.png')
        },
        {
            id: 10, name: 'Conta MEI', image: require('../../assets/business-and-finance.png')
        },
        {
            id: 11, name: 'Agendamentos', image: require('../../assets/calendar.png') 
        },
        {
            id: 12, name: 'Portabilidade de salário', image: require('../../assets/work.png')
        },
        {
            id: 13, name: 'Crédito', image: require('../../assets/payment.png')
        },
        {
            id: 14, name: 'Financiamento imobiliário', image: require('../../assets/dollar.png') 
        },
        {
            id: 15, name: 'Débito automático', image: require('../../assets/money.png')
        },
        {
            id: 16, name: 'Consórcio', image: require('../../assets/keys.png') 
        },
        {
            id: 17, name: 'Câmbio', image: require('../../assets/dolar.png') 
        },
        {
            id: 18, name: 'Recarga', image: require('../../assets/deposit.png')
        }
    ];

    function handleClick() {
        setIsClick(!isClick);
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            
            <Box 
                data={isClick ? array : arrFirst}
                numColumns={3}
                renderItem={({ item }) => (
                    <Area key={String(item.id)}>
                        <AreaImage>
                            <Icon source={item.image} />
                        </AreaImage>

                        <Title> {item.name} </Title>
                    </Area>
                )}   
            />
            
            <Card>
                <OpenButton onPress={handleClick}>
                    {isOpen ? (
                        <ArrowDown name="chevron-up" color="#eee" size={45} />
                    ) : (
                        <ArrowDown name="chevron-down" color="#eee" size={45} />
                    )}
                </OpenButton>
            </Card>

            <Home navigation={navigation} />
        </Container>
    );
}