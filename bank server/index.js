const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:4200'
}))

const dataservice = require('./services/registerservice')             //import 
const creditservice = require('./services/creditservices')
const tranactionservice = require('./services/transaction')



const jwt = require('jsonwebtoken')




app.use(express.json())


app.get('/', (req, res) => {
    res.send("get function check")
})

//adding middleware application middleware

const middleware = (req, res, next) => {
    console.log("Middleware working");
    next()
}
app.use(middleware) //using middleware

//register

app.post('/register',(req, res) => {
    dataservice.register(req.body.fname, req.body.acnt, req.body.amount, req.body.psw)
        .then(result => {
            console.log("The result", result);
            res.status(result.statusCode).json(result)
        })

})

//credit
app.post('/credit', (req, res) => {
    const creditdata = creditservice.credit(req.body.name, req.body.acno, req.body.pan, req.body.aadhar, req.body.salary)
    res.status(creditdata.statuscode).json(creditdata)
})

//login  //use the router middleware

app.post('/login', (req, res) => {
    dataservice.login(req.body.account_no, req.body.password)
        .then((result) => {
            res.status(result.statuscode).json(result)
        })
})


//verify the token
const jstmiddleware = ((req, res, next) => {
    const token = req.header('token')
    console.log("tokennnn", token);
    const data = jwt.verify(token, 'supersekertkey@123')
    console.log("dataa", data);
    console.log(req.body.acnt_no)
    if (req.body.account_no == data.acntno) {
    next()
    }
})

//deposit

app.post('/deposit',jstmiddleware,(req, res) => {
    tranactionservice.deposit(req.body.account_no, req.body.password, req.body.amnt)
        .then(result => { 
            res.status(result.statuscode).json(result)
        })

})

//withdraw

app.post('/withdraw', jstmiddleware,(req, res) => {
    tranactionservice.withdraw(req.body.account_no, req.body.pswd, req.body.amnt)
        .then(result => {
            res.status(result.statuscode).json(result)
        })

})

//transaction 

app.post('/transaction', (req, res) => {   
   tranactionservice.transaction(req.body.acnt).then((result)=> {
    res.status(result.statuscode).json(result)
   })
    
})

//delete 

app.delete('/delete/:acnt',(req,res) => {
    dataservice.deleteacc((req.params.acnt)).
    then(result => {
        res.status(result.statuscode).json(result)
    })  
})




app.listen(3002, () => {
    console.log("port 3002 running",);
})


