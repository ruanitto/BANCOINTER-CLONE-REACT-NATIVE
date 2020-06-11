import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
    padding: 25px;
    height: 100%;
    max-height: 150px;
`;

export const List = styled.FlatList`
    
`;

export const Button = styled.TouchableOpacity`
    
`;

export const AreaInfo = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 10px;
`;

export const Box = styled.View`
    flex-direction: column;
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
`;

export const Avatar = styled.Image`
    width: 62px;
    height: 62px;
    border-radius: 32px;
`;