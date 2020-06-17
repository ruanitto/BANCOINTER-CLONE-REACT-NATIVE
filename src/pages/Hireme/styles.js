import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
    flex: 1;

    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const AreaLottie = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AreaText = styled.View`
    width: 100%;
    max-width: 160px;
`;

export const Contactme = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 28px;
`;