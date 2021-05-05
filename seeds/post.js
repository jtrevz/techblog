const { Post } = require('../models');

const userPosts = [
    {
      "title": "Thoughts on Tech in Ancient Rome",
      "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "user-id": 1
    },
    {
        "title": "Thoughts on Tech from a Cat",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "user-id": 2
    }
];

const seedPosts = () => Post.bulkCreate(userPosts);

module.exports = seedPosts;