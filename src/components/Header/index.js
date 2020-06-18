import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import EyeVisible from 'react-native-vector-icons/Feather';
import EyeHide from 'react-native-vector-icons/Feather';

import { Container, AreaInfo, Box, Title,
    AreaValue, Value, Avatar, List, Button,
    BoxValue, BarArea, FirstBar, SecondBar, ThirdBar,
    ButtonPerfil
} from './styles';

import Services from '../Services';

export default function Header({ navigation }) {
    const [isClickBalance, setIsClickBalance] = useState(true);
    const [isClickLimit, setIsClickLimit] = useState(true);
    const [isClickInvest, setIsClickInvest] = useState(true);

    const [xPos, setXPos] = useState(0);

    const array = [
        {
            id: 1
        }
    ];

    function handleNavigate() {
        navigation.navigate('Tab');
    }

    function handleHideBalance() {
        setIsClickBalance(!isClickBalance);
    }

    function handleHideLimit() {
        setIsClickLimit(!isClickLimit);
    }

    function handleHideInvest() {
        setIsClickInvest(!isClickInvest);
    }

    function handleScroll(e) {
        setXPos(e.nativeEvent.contentOffset.x);
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
                                <ScrollView 
                                    pagingEnabled={true} 
                                    horizontal={true} 
                                    onScroll={handleScroll}
                                    showsHorizontalScrollIndicator={false} 
                                >

                                    <Box>
                                        <Title>Saldo em conta</Title>
                                        
                                        <AreaValue>
                                            <BoxValue isClick={isClickBalance}>
                                                <Value isClick={isClickBalance}>R$ 1290,00</Value>
                                            </BoxValue>
                                            
                                            <Button onPress={handleHideBalance}>
                                                {isClickBalance ? (
                                                    <EyeVisible name="eye" size={25} color="#fff"/>
                                                ) : (
                                                    <EyeHide name="eye-off" size={25} color="#fff"/>
                                                )}
                                            </Button>
                                        </AreaValue>

                                        <BarArea>
                                            <FirstBar xPos={xPos} />
                                            <SecondBar xPos={xPos} />
                                            <ThirdBar xPos={xPos} />
                                        </BarArea>
                                    </Box>

                                    <Box>
                                        <Title>Limite disponível</Title>
                                        
                                        <AreaValue>
                                            <BoxValue isClick={isClickLimit}>
                                                <Value isClick={isClickLimit}>R$ 450,09</Value>
                                            </BoxValue>
                                            
                                            <Button onPress={handleHideLimit}>
                                                {isClickLimit ? (
                                                    <EyeVisible name="eye" size={25} color="#fff"/>
                                                ) : (
                                                    <EyeHide name="eye-off" size={25} color="#fff"/>
                                                )}
                                            </Button>
                                        </AreaValue>

                                        <BarArea>
                                            <FirstBar xPos={xPos} />
                                            <SecondBar xPos={xPos} />
                                            <ThirdBar xPos={xPos} />
                                        </BarArea>
                                    </Box>

                                    <Box>
                                        <Title>Total investido</Title>
                                        
                                        <AreaValue>
                                            <BoxValue isClick={isClickInvest}>
                                                <Value isClick={isClickInvest}>R$ 7.350,84</Value>
                                            </BoxValue>
                                            
                                            <Button onPress={handleHideInvest}>
                                                {isClickInvest ? (
                                                    <EyeVisible name="eye" size={25} color="#fff"/>
                                                ) : (
                                                    <EyeHide name="eye-off" size={25} color="#fff"/>
                                                )}
                                            </Button>
                                        </AreaValue>

                                        <BarArea>
                                            <FirstBar xPos={xPos} />
                                            <SecondBar xPos={xPos} />
                                            <ThirdBar xPos={xPos} />
                                        </BarArea>
                                    </Box>
                                </ScrollView>
                            </AreaInfo>

                            <ButtonPerfil onPress={handleNavigate}>
                                <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }}/>
                            </ButtonPerfil>
                        </Container>

                        <Services navigation={navigation} />
                    </View>
                )}
            />
        </>
    );
}