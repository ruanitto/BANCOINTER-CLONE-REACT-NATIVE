import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
    padding: 25px;
    height: 100%;
    max-height: 150px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const List = styled.FlatList`
    
`;

export const Button = styled.TouchableOpacity`
    
`;

export const ButtonPerfil = styled.TouchableOpacity`
    margin-bottom: 15px;
`;

export const AreaInfo = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    max-width: 160px;
    margin-bottom: 20px;
`;

export const Box = styled.View`
    max-width: 160px;
    margin: 10px;
    
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #FFF;
    
`;

export const AreaValue = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Value = styled.Text`
    font-size: 18px;
    color: #FFF;
    margin-right: 15px;

    opacity: ${props => props.isClick ? 1 : 0};
`;

export const Avatar = styled.Image`
    width: 62px;
    height: 62px;
    border-radius: 32px;
`;

export const BoxValue = styled.View`
    background: ${props => props.isClick ? props.theme.normal : props.theme.hide};
    margin-right: 15px;
`;

BoxValue.defaultProps = {
    theme: {
        hide: '#eee',
        normal: 'transparent'
    }
};

export const BarArea = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const FirstBar = styled.View`
    border: 1px solid ${props => props.xPos == 0 ? '#fff' : '#ccc'};
    width: 30px;
`;

export const SecondBar = styled.View`
    border: 1px solid ${props => props.xPos > 0 && props.xPos < 170 ? '#fff' : '#ccc'};
    width: 30px;
`;

export const ThirdBar = styled.View`
    border: 1px solid ${props => props.xPos > 160 ? '#fff' : '#ccc'};
    width: 30px;
`;