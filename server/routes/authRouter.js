const express = require('express');
const { hash, compare } = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  const [user, created] = await User.findOrCreate({
    where: { name },
    defaults: { hashpass: await hash(password, 10) },
  });
  if (created) {
    req.session.user = { id: user.id, name: user.name };
    return res.json(user);
  } if (await compare(password, user.hashpass)) {
    req.session.user = { id: user.id, name: user.name };
    return res.json(user);
  }
  return res.json({});
});

router.get('/check', (req, res) => {
  if (req.session?.user) {
    return res.json(req.session.user);
  }
  return res.json({});
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

module.exports = router;
