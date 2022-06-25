const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const jwt =require('jsonwebtoken');
const User = require('../../models/user');

//post
router.post('/', async(req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new createError.Unauthorized('Invalid email or password'));
  };

  const valid = user.verifyPasswordSync(password)

  if (!valid) { 
    return next(new createError.Unauthorized('Invalid email or password')); 
  }

  const accessToken = jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role,
  }, `${process.env.ACCESS_TOKEN_SECRET}`, {
    expiresIn: '1h',
  })

  return res.json({ 
    success: true, 
    accessToken,
    user: { ...user._doc, password: '' }
  });

  // user.comparePassword(password, function(err, isMatch) {
  //   if (err) {
  //     return res.sendStatus(403);
  //   }

  //   const accessToken = jwt.sign({
  //     _id: user._id,
  //     email: user.email,
  //     role: 1
  //   }, 'ezegynagyontitkosszoveg', {
  //     expiresIn: '1h',
  //   });

  //   res.json({ 
  //     success: true, 
  //     accessToken,
  //     user: { ...user._doc, password: '' }
  //    });
  // });
});

module.exports = router;