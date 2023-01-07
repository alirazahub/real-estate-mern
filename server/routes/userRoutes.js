import express from 'express'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import {verifyUser} from '../middleware/verifyUser.js'
import User from '../models/userModel.js';

const router = express.Router();

//Login User
router.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await User .findOne({
                email,
                password
            })
            if (user) {
                const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '30d'
                })
                res.cookie('userToken', userToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                })
                res.status(201).json({ user, userToken })
                
            } else {
                res.status(400).json({ message: "Invalid Email or Password!" })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    })
)

// Getting User Profile using middleware
router.get(
    '/profile',
    verifyUser,
    asyncHandler(async (req, res) => {
        try {
            const user = await User.findById(req.user.id
            )
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error })
        }
    })
)

//Register New User
router.post(
    '/register',
    asyncHandler(async (req, res) => {
        const {
            name,
            username,
            email,
            password,
            contact,
        } = req.body
        try {
            const user = await User.findOne({ email });
            if (user) {
                res.status(400).json({ message: "User Already Exists!" })
            } else {
                await User.create({ name,username, email,contact, password })
                res.status(201).json({ message: "User Registered Successfully!" })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    })
)
export default router;