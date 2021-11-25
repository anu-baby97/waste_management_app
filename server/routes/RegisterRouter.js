const express = require('express')
const RegisterRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const bcrypt = require('bcryptjs')//password hashing to encrypt password before storing to database (to avoid plain-text passwords)

RegisterRouter.post('/registerdata', (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {//10 added as a salt (random string of characters known only to the site to each password before it is hashed.)
        if (err) {
            return res.status(400).json({//if there is an error in hashing
                success: false,
                error: true,
                message: 'Password hashing error'
            })
        }
        let logindata = {//value (which is entered in form fields) given to the respective keys in the model of login
            username: req.body.username,
            password: hashedPass,
            role: req.body.role
        }
        login.findOne({ username: req.body.username })//checked if a user with the same username already exists
            .then(username => {
                if (username) {
                    return res.status(400).json({
                        success: false,
                        error: true,
                        message: 'Username already exist!'
                    })
                }
                else {
                    var item = login(logindata)//if user doesn't already exist data saved to login_data table by passing these data through the model 
                    item.save()//saved to DB under table login_data
                        .then(() => {
                            login.findOne({ username: logindata.username }) //fetches the username of data just saved
                                .then(function (details) {
                                    var id = details._id //fetches id belonging to the user of that username (seen as _id in DB)
                                    let registerdata = { //set data to be saved in table register_data
                                        login_id: id, 
                                        name: req.body.name,
                                        address: req.body.address,
                                        phone: req.body.phone
                                        //given corresponding values to the keys in the model RegisterData 
                                    }
                                    register.findOne({ phone: registerdata.phone })//gets the phone number of the user corresponding to that username and checks with the other phone numbers saved in database
                                        .then((mobile) => {
                                            if (!mobile) {//if there is no same phone number present inside register_data table those data in the array 'registerdata' is passed to the table through the model and saved to DB.
                                                var register_item = register(registerdata)
                                                register_item.save() //id,name,address,phone no saved to register_data table
                                                    .then(() => {
                                                        res.status(200).json({
                                                            success: true,
                                                            error: false,
                                                            message: 'Registration success'//alert shown
                                                        })
                                                    })

                                            }
                                            else {
                                                console.log(id)
                                                login.deleteOne({ _id: id })//else if that mobile is already present in DB somewhere, then the id of that user is found by matching id in login table (_id) and id deduced above (id)
                                                    .then(() => {
                                                            //then details of the user with that id is deleted.
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