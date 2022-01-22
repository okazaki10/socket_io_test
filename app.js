const io = require('socket.io-client');
const socket = io.connect('http://node.api.paketkan.com/')
socket.on('connect', () => {
    console.log('konek ke socket io')
})