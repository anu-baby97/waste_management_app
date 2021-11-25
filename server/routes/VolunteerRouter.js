const express = require('express')
const VolunteerRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')

VolunteerRouter.get('/view-volunteers',(req,res)=>{
    login.aggregate([
        {
            $lookup:{
                from:"register_data", localField:"_id", foreignField:"login_id", as:"RegisterDetails"
            }
        },
        {
            $match:{
                role:1
            }
        }
    ]).then(function(data){
        res.status(200).json({
            success:true,
            error:false,
            details:data
        })
    })
})

module.exports=VolunteerRouter;