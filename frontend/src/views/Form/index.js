import React, { useState } from 'react';
import {
    Container,
    TitleForm,
    FormGit,
    InputField,
    LocalizationArea,
    Btn,
} from './styled';

import api from '../../services/api/api';

function Form() {
    const [name, setName] = useState('');
    const [techs, setTechs] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    async function handlerClickButton() {
        const info = await api.post('/user', {
            username: name,
            techs,
            longitude,
            latitude,
        });

        console.log(info);
    }

    return (
        <Container>
            <FormGit>
                <TitleForm>
                    Cadastrar <br />
                </TitleForm>

                <br />
                <InputField
                    name="username"
                    placeholder="Name of Github"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />

                <InputField
                    name="techs"
                    placeholder="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
                <br />

                <LocalizationArea>
                    <input
                        name="longitude"
                        placeholder="longitude"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder="latitude"
                        placeholder="Latitude"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                    <br />
                </LocalizationArea>

                <Btn type="button" onClick={handlerClickButton}>
                    Cadastrar
                </Btn>
            </FormGit>
        </Container>
    );
}

export default Form;
