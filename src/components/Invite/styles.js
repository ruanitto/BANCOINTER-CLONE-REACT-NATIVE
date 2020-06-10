import styled from 'styled-components';

export const Container = styled.View`
    padding: 20px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const AreaText = styled.View``;

export const Title = styled.Text`
    color: #685C5C;
    font-size: 16px;
    font-weight: bold;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 4
})`
    color: #A49393;
    width: 100%;
    max-width: 140px;
    margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    padding: 5px;
    border-radius: 4px;
    background: #FF8700;
`;

export const ButtonText = styled.Text`
    color: #f0f0f5;
    font-weight: bold;
    text-transform: uppercase;
`;

export const AreaImage = styled.View``;

export const Icon = styled.Image`
    width: 100px;
    height: 100px;
`;
