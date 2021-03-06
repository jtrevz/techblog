const sequelize = require('../config/connection');

const seedUsers = require('./user.js');
const seedPosts = require('./post.js');
const seedComments = require('./comment.js');

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
    process.exit(0);
};
  
seedAll();