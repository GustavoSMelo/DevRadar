import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.103:3333', {
    autoConnect: false,
});

function connect(techs) {
    socket.io.opts.query = { techs };
    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export { connect, disconnect };
