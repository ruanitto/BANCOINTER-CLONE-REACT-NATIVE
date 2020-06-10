import React from 'react';

import { Container, AreaText, Title, Description, Button,
    ButtonText, AreaImage, Icon
} from './styles';

import logo from '../../assets/invite.png';

export default function Invite() {
    return (
        <Container>
            <AreaText>
                <Title>Convide seus amigos</Title>
                <Description>
                    Indique a Conta Digite e
                    chame todo mundo pra
                    ficar livre das tarifas!
                </Description>

                <Button>
                    <ButtonText>Convidar</ButtonText>
                </Button>
            </AreaText>

            <AreaImage>
                <Icon source={logo} />
            </AreaImage>
        </Container>
    );
}