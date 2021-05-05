const { User } = require('../models');

const userData = [
    {
      "username": "jtrevizo",
      "password": "password12345"
    },
    {
      "username": "themisch",
      "password": "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;