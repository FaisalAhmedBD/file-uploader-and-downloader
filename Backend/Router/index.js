var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('hello from router');
})
module.exports={
    router
}