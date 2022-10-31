database = {}
const jwt = require('jsonwebtoken')
const db = require('./db')


const register = (name, acnt, amount, psw) => {
    return db.User.findOne({ acnt }).then((user) => {
            console.log("userDB",user);
            if (user){
                return {
                    statusCode: 422,
                    status: false,
                    message: "user already exist"
                }
            }
            else {
                const newUser = new db.User({
                    name,
                    acnt,
                    amount,
                    psw,
                    transaction: []
                })
                newUser.save()  
                return {
                    statusCode: 200,
                    status: true,
                    message: "Register Success"
                }
            }
        })

}

const login = (account_no, pswd) => {

    return db.User.findOne({acnt:account_no,psw:pswd})
    .then((user) => {
        if(user){

            const token = jwt.sign({
                acntno: account_no
            }, 'supersekertkey@123')
            currentuser=user.name
            currentacno=user.acnt
            transaction = user.transaction  
          
            return {
                statuscode: 200,    
                status: true,
                message: "Login success",
                token,
                currentuser,
                currentacno,
                transaction

               
            }
            
        }else{
            return {
                statuscode: 401,
                status: false,
                message: "incorrect password"
            }
        }
    })
}

const deleteacc = (acnt) => {
    return db.User.deleteOne({acnt})
    .then((result) => {
        if(result){
            return {
                status:true,
                statuscode:200,
                message:`account with ${acnt} was deleted`
    
            }
        }else{
            return {
                status:false,
                statuscode:404,
                message:"not valid"
            }
        }
    })
}   
    


module.exports = { register, login, database ,deleteacc}