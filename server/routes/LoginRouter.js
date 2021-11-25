const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const LoginRouter = express.Router()

LoginRouter.post('/logindata', (req, res) => {// 'login/logindata' given in axios as url in front end for accessing this router to post data to DB.
    let fetchedUser
    login.findOne({ username: req.body.username }) //fetches data from username field and keeps as value of key 'username' of login model
        .then((user) => {
            if (!user) { //if no such user is found (no such username present in login_data table then message shown as this.)
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "User Not Found!"
                })
            }
            fetchedUser = user //else that user is set to fetchedUser
            return bcrypt.compare(req.body.password, user.password)//then compares the password entered with the password corresponding to that username which is stored in the database
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({//if password doesn't match
                    success: false,
                    error: true,
                    message: "Please Check Password!"
                })
            }
            id = fetchedUser._id//the id from DB assigned to id

            register.findOne({ login_id: id })//then fromregister_table finds the id matching login_id 
                .then((registerData) => {
                    const token = jwt.sign(
                        { 
                            username: fetchedUser.username, 
                            userId: fetchedUser._id, 
                            userRole: fetchedUser.role }, //username,id,role fetched and given to token
                        "secret_this_should_be_longer",
                        { expiresIn: "1h" }
                    )
                    res.status(200).json({
                        success: true,
                        error: false,
                        token: token,
                        expiresIn: 3600,   //if status code is success
                        loginId: fetchedUser._id,
                        userRole: fetchedUser.role, //fetched in frontend (Login.jsx)

                    })
                })

        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            })
        })
})

module.exports = LoginRouter