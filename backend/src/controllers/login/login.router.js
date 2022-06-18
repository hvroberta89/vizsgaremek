const express = require('express');
const router = express.Router();
const jwt =require('jsonwebtoken');
const User = require('../../models/user');

//post
router.post('/', async(req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.sendStatus(401);
  };

  user.comparePassword(password, function(err, isMatch) {
    if (err) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign({
      _id: user._id,
      email: user.email,
      role: 1
    }, 'ezegynagyontitkosszoveg', {
      expiresIn: '1h',
    });

    res.json({ 
      success: true, 
      accessToken,
      user: { ...user._doc, password: '' }
     });
  });
});

module.exports = router;