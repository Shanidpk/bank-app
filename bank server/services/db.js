    const mongoose = require ('mongoose')

//state connection string
const mongoDb="mongodb://127.0.0.1:27017/BANKAPP"

mongoose.connect(mongoDb,{useNewUrlParser:true})

const User = mongoose.model('User',{
    name:String,
    acnt:Number,
    amount:Number,
    psw:String,
    transaction:Array
})

module.exports = {User}
