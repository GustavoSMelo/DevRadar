import React from 'react';
import Routes from './src/routes/routes';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket connection']);
export default function App() {
    return (
        <>
            <Routes />
            <StatusBar barStyle={'light-content'} backgroundColor={'#7159ac'} />
        </>
    );
}
