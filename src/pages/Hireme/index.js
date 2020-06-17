import React from 'react';
import LottieView from 'lottie-react-native';

import programmer from '../../../programador.json';

import { Container, Contactme, AreaLottie, AreaText } from './styles';

export default function Hire() {
    return (
        <Container colors={['#ff8700', '#ff500f']}>
            <AreaLottie>
                <LottieView 
                    source={programmer}
                    resizeMode="contain"
                    autoPlay
                    autoSize
                    loop
                />
            </AreaLottie>

            {/* <AreaText>
                <Contactme>Banco Inter, me contrata! ;)</Contactme>
            </AreaText> */}
        </Container>
    );
}