import { Server } from "socket.io";
import socketHandler from './index.js';
import dotenv from 'dotenv'

// Load environment variables
dotenv.config();

const PORT = 3005;
const DOMAIN = process.env.DOMAIN_CHAT_APP;
console.log("DOMAIN:", DOMAIN);  

const io = new Server({
    cors: {
        origin: DOMAIN,  
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    socketHandler(socket, io);
});

io.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})