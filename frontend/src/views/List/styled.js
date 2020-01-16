import styled from 'styled-components';

export const Container = styled.main`
    margin: auto;
    margin-top: 5%;
    width: 75%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin: 10px;
    padding: 10px;

    img {
        border-radius: 100px;
        width: 200px;
        height: 200px;
        margin: 15px;
    }

    div {
        width: 60%;
        margin: 75px;
    }
    span {
        color: #909090;
        font-size: 16pt;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        color: #707070;
    }

    a {
        color: #7159ac;
        font-size: 16pt;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
        width: 100%;
        flex-direction: column;

        h1 {
            font-size: 12pt;
        }
    }
`;
