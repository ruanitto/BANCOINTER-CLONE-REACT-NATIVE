import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f5;
`;

export const Box = styled.FlatList`
    margin-top: -25px;
`;

export const Card = styled.View`
    margin-bottom: 10px;
    margin: 10px;
    text-align: center;
`;

export const Area = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    max-width: 90px;
    max-height: 200px;

    background: #fff;
    border-radius: 4px;
    margin: 5px 10px;
    margin-bottom: 30px;

    text-align: center;
`;