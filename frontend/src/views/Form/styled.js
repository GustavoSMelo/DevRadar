import styled from 'styled-components';

export const Container = styled.aside`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 30%;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: row;
    margin: auto;
    margin-top: 5%;

    @media (max-width: 786px) {
        width: 90%;
    }
`;

export const FormGit = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    width: 95%;
    color: #101010;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    background-color: #99999933;
    font-size: 14pt;
`;

export const LocalizationArea = styled.div`
    display: flex;
    flex-direction: row;

    input {
        width: 40%;
        color: #101010;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 15px;
        background-color: #99999933;
        font-size: 16pt;
    }
`;

export const TitleForm = styled.h1`
    font-weight: bold;
    margin: 10px;
`;

export const Btn = styled.button`
    background-color: #715ec9;
    padding: 15px;
    border: none;
    width: 75%;
    margin: 15px;
    color: #fff;
    font-size: 16pt;
    cursor: pointer;
`;
