credit_database = {}

const credit = (namee, acno, pan, aadhar, salary) => {
  
    credit_database[acno] = {
      namee,
      acno,
      pan,
      aadhar,
      salary,

    }

    console.log(credit_database)
    return {
      statuscode:200,
      status:true,
      message:"Credit card successfully register"
    }
  }





module.exports = { credit }   