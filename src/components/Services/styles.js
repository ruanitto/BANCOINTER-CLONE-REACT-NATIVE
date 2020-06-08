import styled from 'styled-components';

export const Container = styled.View`
    background-color: #f0f0f5;

    margin-bottom: 30px;
`;

export const Box = styled.FlatList`
    margin-top: -25px;
`;

export const Card = styled.View`
    background: #eee;
    height: 25px;
    align-items: center;
    justify-content: center;

    margin-left: 5px;
    margin-right: 5px;
    border-radius: 4px;
`;

export const Area = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;
    max-width: 100px;
    max-height: 170px;

    background: #fff;
    border-radius: 8px;
    margin: 5px 10px;

    padding: 10px;
`;

export const AreaImage = styled.View`
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 25px;

    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Icon = styled.Image`
    width: 30px;
    height: 30px;
`;

export const Title = styled.Text`
    font-size: 15px;
`;

export const OpenButton = styled.TouchableOpacity`

`;