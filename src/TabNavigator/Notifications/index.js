import React from 'react';
import ArrowLeft from 'react-native-vector-icons/Feather';

import Message from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, AreaArrow, PerfilArea, Image, Name, Info, Agency, Account,
    InfoArea, Area, Title, DateArea, AreaText, List, ButtonBack
} from './styles';

export default function Notifications({ navigation }) {
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

            <InfoArea>
                <List showsVerticalScrollIndicator={false}>
                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>
                    
                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>

                    <Area>
                        <Message name="message-text-outline" color="#ff8700" size={25} />
                        <AreaText>
                            <Title>Max, seu interpag no valor de R$ 40,00 foi realizado com sucesso.</Title>
                        </AreaText>
                        
                        <DateArea>
                            <Title>16/mar</Title>
                            <Title>sáb</Title>
                        </DateArea>
                    </Area>
                </List>
            </InfoArea>
        </>
    );
}