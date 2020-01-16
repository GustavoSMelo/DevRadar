import React, { useState } from 'react';
import './global/style/global.css';
import Form from './views/Form/index';
import List from './views/List/index';

function App() {
    return (
        <>
            <Form className="Form" />

            <List />
        </>
    );
}

export default App;
