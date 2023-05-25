const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];

    
})
