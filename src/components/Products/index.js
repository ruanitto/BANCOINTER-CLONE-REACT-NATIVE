import React from 'react';
import Cart from 'react-native-vector-icons/Feather';
import ArrowRight from 'react-native-vector-icons/Feather';

import { Container, Shopping, Area, AreaIcon, AreaInfo,
    Title, Description, Box, Card, AreaImage, Icon
} from './styles';

export default function Products() {
    const arrFirst = [
        {
            id: 1, name: 'Casa', image: require('../../assets/products/garden.png')
        },
        {
            id: 2, name: 'Entretenimento', image: require('../../assets/products/validating-ticket.png')
        },
        {
            id: 3, name: 'Tecnologia', image: require('../../assets/products/phone.png')
        },
        {
            id: 4, name: 'Transporte', image: require('../../assets/products/car.png')
        },
        {
            id: 5, name: 'Esporte', image: require('../../assets/products/basket.png')
        },
        {
            id: 6, name: 'Viagem', image: require('../../assets/products/travel.png')
        },
        {
            id: 7, name: 'Saúde', image: require('../../assets/products/book.png')
        },
        {
            id: 8, name: 'Beleza', image: require('../../assets/products/cosmetics.png')
        },
        {
            id: 9, name: 'Moda', image: require('../../assets/products/clothes.png')
        }
    ]
    
    return (
        <>
            <Container>
                <Shopping>
                    <Area>
                        <AreaIcon>
                            <Cart name="shopping-cart" size={25} color="#FF8700" />
                        </AreaIcon>

                        <AreaInfo>
                            <Title>Shopping</Title>
                            <Description>Aproveite todos os produtos com cashback!</Description>
                        </AreaInfo>
                    </Area>

                    <ArrowRight name="arrow-right" size={25} color="#FF8700"/>
                </Shopping> 
            </Container>

            <Box 
            data={arrFirst}
            numColumns={3}
            renderItem={({ item }) => (
                <Card key={String(item.id)}>
                    <AreaImage>
                        <Icon source={item.image} />
                    </AreaImage>

                    <Title> {item.name} </Title>
                </Card>
            )}   
            />
        </>
    );
}