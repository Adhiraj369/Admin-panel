const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://frontend:g49HrZaRlpUbHckd@mydoon.ksbtsax.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=MyDoon';

const mongooseOptions = {
    connectTimeoutMS: 300000, // 300 seconds
    socketTimeoutMS: 300000, // 300 seconds
};

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready...');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL, mongooseOptions);
        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
        });
    } catch (err) {
        console.error(`Error starting the server: ${err}`);
    }
}

startServer();
