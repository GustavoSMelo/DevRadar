const socketio = require('socket.io');
const connections = [];

exports.setupWebsocket = server => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        const { techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            techs,
        });
    });
};

exports.findConnections = techs => {
    return connections.filter(connection =>
        connection.techs.some(item => techs.includes(item))
    );
};
