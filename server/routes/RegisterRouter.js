const express = require('express')
const RegisterRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const bcrypt = require('bcryptjs')

RegisterRouter.post('/registerdata', (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Password hashing error'
            })
        }
        let logindata = {
            username: req.body.username,
            password: hashedPass,
            role: req.body.role
        }
        login.findOne({ username: req.body.username })
            .then(username => {
                if (username) {
                    return res.status(400).json({
                        success: false,
                        error: true,
                        message: 'Username already exist!'
                    })
                }
                else {
                    var item = login(logindata)
                    item.save()
                        .then(() => {
                            login.findOne({ username: logindata.username })
                                .then(function (details) {
                                    var id = details._id
                                    let registerdata = {
                                        login_id: id,
                                        name: req.body.name,
                                        address: req.body.address,
                                        phone: req.body.phone
                                    }
                                    register.findOne({ phone: registerdata.phone })
                                        .then((mobile) => {
                                            if (!mobile) {
                                                var register_item = register(registerdata)
                                                register_item.save()
                                                    .then(() => {
                                                        res.status(200).json({
                                                            success: true,
                                                            error: false,
                                                            message: 'Registration success'
                                                        })
                                                    })

                                            }
                                            else {
                                                console.log(id)
                                                login.deleteOne({ _id: id })
                                                    .then(() => {

                                                        res.status(401).json({
                                                            success: false,
                                                            error: true,
                                                            message: 'Mobile number is already registered with us'
                                                        })


                                                    })

                                            }
                                        })


                                })

                        })

                }

            })
    })

})

RegisterRouter.get('/registerdetails',function(req,res){
    login.aggregate([{
        $lookup:{from:'register_data',localField:'_id',foreignField:'login_id', as:'registerData'}
    }]).then(function(data){
        res.status(200).json({
            success:true,
            error:false,
            details:data
        })
    })
})
RegisterRouter.get('/userdetails',function(req,res){
    login.aggregate([{
        $lookup:{from:'register_data',localField:'_id',foreignField:'login_id', as:'registerData'}
    },
    {
        $match:{role:2}
    }
]).then(function(data){
        res.status(200).json({
            success:true,
            error:false,
            details:data
        })
    })
})

RegisterRouter.delete('/delete/:id',function(req,res){
    const id=req.params.id
    login.deleteOne({_id:id}).then(function(){
        register.deleteOne({login_id:id}).then(function(){
            res.status(200).json({
                success:true,
                error:false,
                message:"User Deleted"
            })
        })
    }).catch(function(err){
        return res.status(401).json({
            message:"Something went wrong"
        })
    })
})

module.exports = RegisterRouter