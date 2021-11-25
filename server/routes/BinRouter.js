const express = require('express')
const BinRouter = express.Router()
const bindata = require('../model/Bindata')

BinRouter.get('/view-bin',(req,res)=>{
    bindata.find().then((data)=>{
        if(data==0){
            return res.status(401).json({
                success:false,
                error:true,
            message:"No Bin Found"           
        
        })
        }
        else{
            return res.status(200).json({
                success:true,
                error:false,
                details:data
            })  }
    })
})

BinRouter.post('/add',(req,res)=>{
    var item={
        bin_name:req.body.name,
        latitude:req.body.latitude,
        longtitude:req.body.longtitude,
        place:req.body.place
    }
    var bin=bindata(item)
    bin.save()
    return res.status(200).json({
        success:true,
        error:false,
        message:"Adding Bin Success"
    })
})

BinRouter.get('/edit/:id',(req,res)=>{
    const id=req.params.id;
    bindata.findOne({_id:id}).then((data)=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:data
        })
    })
})

BinRouter.post('/update',(req,res)=>{
    var item={
        bin_name:req.body.name,
        latitude:req.body.latitude,
        longtitude:req.body.longtitude,
        place:req.body.place,
        id:req.body.id
    }
    bindata.updateOne({_id:item.id},{$set:item})
    .then(()=>{
        bindata.find().then((data)=>{
            res.status(200).json({
                success:true,
                error:false,
                message:"Bin data Updated"
            })
        })
    }).catch((err)=>{
        res.status(401).json({
            message:"Something went Wrong"
        })
    })
})

BinRouter.get('/delete/:id',(req,res)=>{
    const id=req.params.id;
    bindata.deleteOne({_id:id})
    .then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:"Bin Deletion Sucess"
        })
        }).catch((err)=>{
            res.status(401).json({
                message:"Bin Deletion Failed"
            })
    })
})

module.exports=BinRouter;