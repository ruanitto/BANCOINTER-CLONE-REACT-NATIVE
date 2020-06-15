import React, { useState } from 'react';
import { View } from 'react-native';

import EyeVisible from 'react-native-vector-icons/Feather';
import EyeHide from 'react-native-vector-icons/Feather';

import { Container, AreaInfo, Box, Title,
    AreaValue, Value, Avatar, List, Button,
    BoxValue
} from './styles';

import Services from '../Services';

export default function Header({ navigation }) {
    const [isClick, setIsClick] = useState(true);

    const array = [
        {
            id: 1
        }
    ];

    function handleNavigate() {
        navigation.navigate('Tab');
    }

    function handleHide() {
        setIsClick(!isClick);

        console.log(isClick);
    }

    return (
        <>
            <List 
                data={array}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View key={String(item.id)}>
                        <Container start={[1, 1]} colors={['#FF8700', '#FF500F']}>
                            <AreaInfo>
                                <Box>
                                    <Title>Saldo em conta</Title>
                                    
                                    <AreaValue>
                                        <BoxValue isClick={isClick}>
                                            <Value>R$ 1290,00</Value>
                                        </BoxValue>
                                        
                                        <Button onPress={handleHide}>
                                            {isClick ? (
                                                <EyeVisible name="eye" size={25} color="#fff"/>
                                            ) : (
                                                <EyeHide name="eye-off" size={25} color="#fff"/>
                                            )}
                                        </Button>
                                    </AreaValue>
                                </Box>

                                <Button onPress={handleNavigate}>
                                    <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }}/>
                                </Button>
                            </AreaInfo>
                        </Container>

                        <Services />
                    </View>
                )}
            />
        </>
    );
}