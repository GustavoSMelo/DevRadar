import styled from 'styled-components/native';

export const Avatar = styled.Image`
    width: 54px;
    height: 54px;
    border-radius: 4px;
    border-width: 4px;
    border-color: #7159ac;
`;

export const Container = styled.View`
    width: 260px;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
export const TextBio = styled.Text`
    color: #666;
    margin-top: 5px;
`;
export const TextTechs = styled.Text`
    margin-top: 5px;
`;

export const Click = styled.Text`
    margin-top: 5px;
    color: #7159ac;
`;

export const Form = styled.View`
    flex-direction: row;
    margin: 10px;
    position: absolute;
    justify-content: flex-end;
`;

export const InputForm = styled.TextInput`
    width: 85%;
    padding: 10px;
    border-radius: 30px;
    flex-direction: row;
    background-color: #fff;
    elevation: 10;
`;

export const Btn = styled.TouchableOpacity`
    width: 15%;
    background-color: #7159ac;
    border-radius: 60px;
    elevation: 5;
`;
