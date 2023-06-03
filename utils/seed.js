const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];

    for (let i = 0; i < 20; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        const username = getRandomName();
        const email = username.replace(' ', '') + '@email.com'

        const thoughts = await Thought.create({
            thoughtText: getRandomThoughts(),
            username,
        });

        users.push({
            username,
            email,
            thoughts: [thoughts._id],
        });
    }

    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})
