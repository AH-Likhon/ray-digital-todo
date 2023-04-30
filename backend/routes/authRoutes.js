const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


//! Register API Router
router.post('/register', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    });

    const result = await user.save();

    const { password, ...data } = result.toJSON();

    res.send(data);
});

//! Login API Router
router.post('/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(404).send({
            message: 'User not found😥'
        })
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'Invalid password provided❗'
        })
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours or 1 day
    })

    res.send({
        message: 'Successfully signed in👍'
    });
})

//! Get User API
router.get('/user', async (req, res) => {
    try {
        const cookies = req.cookies['jwt'];

        const verifiedCookies = jwt.verify(cookies, process.env.SECRET);

        if (!verifiedCookies) {
            return res.status(401).send({
                message: 'Unauthorized user🔏'
            })
        }

        const user = await User.findOne({ _id: verifiedCookies._id });

        const { password, ...data } = user.toJSON();

        res.send(data);
    } catch (error) {
        return res.status(401).send({
            message: 'Unauthorized user🔏'
        })
    }
})

//! Logout API
router.post('/logout', async (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 0
    })

    res.send({
        message: 'Successfully signout👍'
    });
})

module.exports = router;