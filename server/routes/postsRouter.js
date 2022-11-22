const express = require('express');
const { Post, User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allPosts = await Post.findAll({ order: [['createdAt', 'DESC']], include: User });
    res.json(allPosts);
  })
  .post(async (req, res) => {
    console.log(req.body);
    const { message } = req.body;
    const newPost = await Post.create({ message, authorId: req.session.user.id });
    const postWithUser = await Post.findByPk(newPost.id, { include: User });
    res.json(postWithUser);
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
