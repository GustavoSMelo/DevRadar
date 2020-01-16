import React from 'react';
import Routes from './src/routes/routes';
import { StatusBar } from 'react-native';
export default function App() {
    return (
        <>
            <Routes />
            <StatusBar barStyle={'light-content'} backgroundColor={'#7159ac'} />
        </>
    );
}
