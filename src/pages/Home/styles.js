import styled from 'styled-components';

export const Container = styled.View`
    background-color: #f0f0f5;
`;

export const Box = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    
    padding: 10px 20px;
`;

export const HeaderBox = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Card = styled.View`
    width: 100%;
    height: 100%;
    max-width: 340px;
    max-height: 170px;
    margin: 10px;
    text-align: center;
    background: #fff;
    border-radius: 8px;
`;

export const Info = styled.View`    
    margin: 10px auto;
    top: 0;
`;

export const Graphic = styled.View`
    flex: 1;
`;

export const Area = styled.View`
    align-items: stretch;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    margin-top: -30px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #CCCCCC;
`;

export const Value = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.color};
`;

export const AreaHide = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: 82px;
    height: 82px;
`;

export const TextHide = styled.Text`
    font-size: 16px;

    padding: 15px;
    color: #CCCCCC;
`;

export const AreaText = styled.View`
    width: 100%;
    max-width: 230px;
`;

export const Button = styled.TouchableOpacity`

`;

export const AreaCardHide = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;
`;

export const CardText = styled.View`
    width: 100%;
    max-width: 200px;
`;