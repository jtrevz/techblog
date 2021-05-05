const { Comment } = require('../models');

const commentData = [
    {
      "text": "Very true! This is so interesting and not hard at all to understand!",
      "post_id": 1,
      "user_id": 2
    },
    {
        "text": "Good Take!",
        "post_id": 2,
        "user_id": 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;