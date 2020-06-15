import styled from 'styled-components';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;

    padding: 30px;
    background: #eee;
`;

export const AreaArrow = styled.View`
    position: absolute;
    top: 40px;
    left: 20px;

    background: #fff;
    border-radius: 50px;
`;

export const PerfilArea = styled.View`
    align-items: center;
`;

export const Image = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
`;

export const Name = styled.Text``;

export const Info = styled.View`
   align-items: center;
`;

export const Agency = styled.Text`
    
`;

export const Account = styled.Text``;

export const InfoArea = styled.View`
    background: #eee;
`;

export const Area = styled.View`
    padding: 15px 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #1d1d20;
`;

export const List = styled.FlatList`

`;

export const Icon = styled.Image`
    width: 30px;
    height: 30px;

    margin-right: 15px;
`;

export const ServicesArea = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const HelpArea = styled.View`
    background: #eee;
    padding: 20px;
`;

export const Shopping = styled.View`
    background: #ddd;
    border-radius: 4px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: 0px 10px;
`;

export const AreaInfo = styled.View`
    align-self: center;
    padding: 10px;

    width: 100%;
    max-width: 200px;
`;

export const AreaIcon = styled.View`
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
`;

export const Box = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2
})`
    color: #898993;
`;

export const Help = styled.View`
    align-items: stretch;
    flex-direction: column;

    padding: 0px 20px;
    margin-top: 20px;
`;