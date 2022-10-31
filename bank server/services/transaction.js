const database = require('./registerservice')
const data=database.database
const db = require('./db')

    
const deposit = (account_no, password, amnt) => {
    var Damount = parseInt(amnt)
    return db.User.findOne({acnt:account_no,psw:password})
    .then ((user) => {
        if(user){
            user.amount += Damount //add the amount with old amount
            user.transaction.push({
                mode:"online", 
                status:"Success",
                type:"deposit", 
                amount:Damount
            })
            user.save()
            return {
               statuscode: 200,
                status: true,
                message: "amout added successfull"
                
            }
        }
        else {
            return {
                statuscode: 401,
                status: false,
                message: "incorret password"
             }
        }
    })
}


const withdraw = (account_no,password,amnt) => {
   var  Wamount = parseInt(amnt)
    return db.User.findOne({acnt:account_no,psw:password})
    .then((user) => {
        if(user){
           if( Wamount <= user.amount){
            user.amount -=  Wamount
            user.transaction.push({
                mode:"online",
                status:"Success",
                type:"withdraw",
                amount:amnt
                
            })
            user.save()
            return {
                statuscode: 200,
                status: true,
                message: "withdraw success"

            }
           }else{
            return {
                statuscode: 400,
                status: false,
                message: "amount greater then acnt"

            }
           }
           
            
            
            
        }   else {
            return {
                statuscode: 400,
                status: false,
                message: "incorret password"
            }            
        }
    })

    
}



    const transaction = (acnt) => {
      return db.User.findOne({acnt})
      .then((user) => {
        console.log(user);
        if(user){
            return {
                status:true,
                statuscode:200,
                message:"data in db",
                transaction:user.transaction,
                balance:user.amount

            }
        }else{
            return {
                status:false,
                statuscode:402,
                message:"not found"
            }
        }
      })
      
      }
    





module.exports = {deposit, withdraw, transaction}