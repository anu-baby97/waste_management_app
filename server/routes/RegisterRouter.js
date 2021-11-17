const express = require('express')
const RegisterRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const bycrypt = require('bycrypt')
RegisterRouter.post('/', (req, res) => {
    bycrypt.hash(req.body.pass, 10, function (err, hashedPass) {
        if (err) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'password hashing error'
            })
        }
        let logindata={
            uname:req.body.uname,
            pass:hashedPass,
        }
        login.findOne({uname:req.body.uname}).then(uname=>{
            if(uname){
                return res.status(400).json({
                success: false,
                error: true,
                message: 'Username already exists'
                })
            }
            else{
               register.
                }

            }
        })

    })


)}

