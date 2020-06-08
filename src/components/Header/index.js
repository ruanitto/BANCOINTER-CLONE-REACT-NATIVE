import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, AreaInfo, Box, Title,
    AreaValue, Value, Avatar
} from './styles';

export default function Header() {
    return (
        <Container start={[1, 1]} colors={['#FF8700', '#FF500F']}>
            <AreaInfo>
                <Box>
                    <Title>Saldo em conta</Title>
                    
                    <AreaValue>
                        <Value>R$ 1290,00</Value>
                        <Icon name="eye" size={30} color="#fff"/>
                    </AreaValue>
                </Box>

                <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }}/>
            </AreaInfo>
        </Container>
    );
}