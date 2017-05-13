const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
  const { email, password } = req.body;

  User.findOne({ email }, function (err, existingUser) {
    if (err) return next(err);

    if (existingUser) return res.status(422).send({ error: 'Email is in use' });

    const user = new User({ email, password });
    user.save(err => {
      if (err) return next(err);

      res.json({ token: tokenForUser(user) });
    });
  });
};