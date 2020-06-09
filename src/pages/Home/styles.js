import styled from 'styled-components';

export const Container = styled.View`
    margin-top: 10px;
    background-color: #f0f0f5;
`;

export const Box = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    
    padding: 20px;
`;

export const HeaderBox = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Card = styled.View`
    width: 100%;
    max-width: 320px;
    margin: 10px;
    text-align: center;
    background: #fff;
    border-radius: 8px;
`;

export const Info = styled.View`    
    margin: 10px auto;
`;

export const Graphic = styled.View`
    
`;

export const Area = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 20px;

    margin-top: -20px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #CCCCCC;
`;

export const Value = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.color}
`;