module.exports = app =>{
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/User')
    const Order = require('../models/Order')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams:true
    })
    
    router.post('/' , async(req , res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id' , async (req , res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id , req.body)
        res.send(model)
    })
    router.delete('/:id' , async(req ,res)=>{
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })
    router.get('/' , async (req , res)=>{
        const queryOptions = {}
        if(req.Model.modelName === "Ordersucce"){
            queryOptions.populate="userId"
        }
        if(req.Model.modelName === "Order"){
            queryOptions.populate="userId"
        }
        const items = await req.Model.find().setOptions(queryOptions)
        res.send(items)
    })
    router.get('/:id' , async (req , res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource' , async(req , res , next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    },async (req , res , next)=>{
        const token = String(req.headers.authorization || ' ').split(' ').pop()
        assert(token , 401 , '请提供jwt token')
        const { id } = jwt.verify(token , app.get('secret'))
        assert(id , 422, '无效的jwt token')
        req.user = await AdminUser.findById(id)
        assert(req.user , 401 , '请先登录')
        await next()
    }, router)
    
    const multer = require('multer')
    const MAO = require('multer-aliyun-oss')
    const upload = multer({
        storage: MAO({
             config: {//填写自己阿里云oss的详细内容
                 region: '',//地址
                 accessKeyId: '',//accessKeyId
                 accessKeySecret: '',//accessKeySecret
                 bucket: ''//用户名
             }
         })
        })
    app.post('/admin/api/upload' ,upload.single('file') , async(req , res)=>{
        const file = req.file
        file.url = `https://ssmpsd1.oss-cn-beijing.aliyuncs.com/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login' , async(req , res)=>{
        const { username , password } = req.body
        const user = await AdminUser.findOne({username}).select('+password')
        assert(user , 422, '用户不存在')
        const isValid = require('bcrypt').compareSync(password , user.password)
        assert(isValid , 422, '密码错误')
        const token = jwt.sign({id:user._id} , app.get('secret'))
        res.send(token)
    })
    app.post('/admin/api/saom' , async(req , res) =>{
        const { orderId } = req.body
        const order = await Order.findOne({ orderId })
        if(order){
            return res.status(422).send({
                message:'二维码已失效'
            })
        }else{
                const model = await Order.create(req.body)
                res.send(model)
        }
    })
    //错误处理
    app.use(async (err , req , res , next) => {
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
    app.post('/zhuce' , async(req , res)=>{
        const model = await AdminUser.create(req.body)
        res.send(model)
    })
    app.get('/myusers' ,async (req , res , next)=>{
        const token = String(req.headers.authorization || ' ').split(' ').pop()
        assert(token , 401 , '请提供jwt token')
        const { id } = jwt.verify(token , app.get('secret'))
        assert(id , 422, '无效的jwt token')
        req.user = await AdminUser.findById(id)
        assert(req.user , 401 , '请先登录')
        await next()
    },  async(req , res)=>{
        res.send(req.user)
    })
}