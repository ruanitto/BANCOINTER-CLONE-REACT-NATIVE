import styled from 'styled-components';

export const Container = styled.View`
    background: #fff;
    padding: 20px;
`;

export const Shopping = styled.View`
    background: #f0f0f5;
    border-radius: 4px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: 0px 10px;
`;

export const Area = styled.View`
    align-items: center;
    flex-direction: row;
    
`;

export const AreaIcon = styled.View`
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
`;

export const AreaInfo = styled.View`
    align-self: center;
    padding: 10px;

    width: 100%;
    max-width: 200px;
`;

export const Title = styled.Text`

`;

export const Description = styled.Text.attrs({
    numberOfLines: 2
})`
    color: #CCC;
`;

export const Box = styled.FlatList`

`;

export const Card = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;
    max-width: 120px;
    max-height: 170px;

    background: #fff;  
    margin: auto;
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
