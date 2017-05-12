const User = require('../models/user');

exports.signup = function (req, res, next) {
  const { email, password } = req.body;

  User.findOne({ email }, function (err, existingUser) {
    if (err) return next(err);

    if (existingUser) return res.status(422).send({ error: 'Email is in use' });

    const user = new User({ email, password });
    user.save(err => {
      if (err) return next(err);

      res.json(user);
    });
  });
};
