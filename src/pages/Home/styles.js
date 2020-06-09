import styled from 'styled-components';

export const Container = styled.View`
    margin-top: 10px;
    background-color: #f0f0f5;
`;

export const Box = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 20px;
`;

export const HeaderBox = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Card = styled.View`
    margin-bottom: 10px;
    margin: 10px;
    text-align: center;

    background: #fff;
    border-radius: 8px;
`;

export const Info = styled.View`
    align-items: center;
`;

export const Graphic = styled.View`
    flex: 1;
    height: 60%;
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