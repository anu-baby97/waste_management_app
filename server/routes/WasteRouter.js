const express = require('express')
const WasteRouter = express.Router()
const waste_data = require("../model/Wastedata")
const payment_Data = require("../model/Payment")
const checkAuth = require('../middleware/check-auth')
const login = require('../model/Logindata')

WasteRouter.post('/add', checkAuth, (req, res) => {
    var item = {
        login_id: req.userData.userId,
        type: req.body.type,
        quantity: req.body.quantity,
        status: '0'
    }
    var value = waste_data(item)
    value.save()
        .then((data) => {
            var payment_data = {
                login_id: req.userData.userId,
                waste_id: data._id,
                amount: req.body.amount
            }
            var payment_value = payment_Data(payment_data)
            payment_value.save()
                .then(() => {
                    res.status(200).json({
                        success: true,
                        error: false,
                        message: "Waste added",
                        payment: "Success",
                        user: req.userData.userId
                    })
                })
        }).catch((err) => {
            return res.status(401).json({
                message: "Something went wrong"
            })
        })
})

WasteRouter.get('/user-payment', checkAuth, (req, res) => {
    login.aggregate([
        {
            $lookup: {
                from: 'waste_data',
                localField: '_id', 
                foreignField: 'login_id', 
                as: 'WasteData'
            }
        },
        {
            $lookup: {
                from: 'payment_data', 
                localField: '_id', 
                foreignField: 'login_id', 
                as: 'PaymentData'
            }
        }
    ]).then((data) => {
        res.status(200).json({
            success: true,
            error: false,
            user_details: data
        })
    })
})

WasteRouter.get('/single-user-payment', checkAuth, (req, res) => {
    login.aggregate([
        {
        $lookup: {
            from: 'waste_data', 
            localField: '_id', 
            foreignField: 'login_id', 
            as: 'WasteData'
        }
    },
    {
        $lookup: {
            from: 'payment_data', 
            localField: '_id', 
            foreignField: 'login_id', 
            as: 'PaymentData'
        }
    },
    {
        $match: {
            username: req.userData.username
        }
    }
    ]).then((data) => {
        res.status(200).json({
            success: true,
            error: false,
            user_details: data
        })
    })
})

module.exports = WasteRouter;