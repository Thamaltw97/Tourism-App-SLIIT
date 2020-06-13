const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
    try {

        let {name, email, password, mobile, country, userRole} = req.body;

        const existingUser =  await User.findOne({email: email})

        if (existingUser)
            res.status(404).json({msg: "An account with this email already exists"});

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
            mobile,
            country,
            userRole
        });

        const savedUser = await newUser.save();
        await res.json(savedUser);

    } catch (exception) {
        res.status(500).json('Error from server:' + exception.message);
    }
});


router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;

        //Validate
        const user = await User.findOne({email: email});
        if(!user)
            return res.status(404).json({msg: "Email is incorrect !"});

        // Check password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch)
            return res.status(404).json({msg: "Password is incorrect !"});

        const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN);

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                country: user.country,
                userRole: user.userRole
            }
        })
    }
    catch(exception){
        res.status(500).json('Error from server:' + exception.message);
    }
});


module.exports = router;