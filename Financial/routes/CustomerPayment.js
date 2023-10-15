const router = require("express").Router();
//const CustomerPayment = require("../models/CustomerPayment");
let CustomerPayment = require("../models/CustomerPayment");

//==================
// router for data insert
//===================
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newCustomerPayment = new CustomerPayment({
        name,
        age,
        gender
    })


    //then keyword called as the promice of the java script
    newCustomerPayment.save().then(()=>{
        res.json("Customer Payment Added ");
    }).catch((err) => {
        console.log(err)
    })
})

//================================
//end of the data insert router
//=============================


//http://localhost:8080/Student/add


//================================
//router for data display
//=============================

router.route("/").get((req,res) => {
    CustomerPayment.find().then((customerPayments) =>{
        res.json(customerPayments)
    }).catch((err) => {
        console.log(err);
    })
})

//================================
//end of the data display router
//=============================


//================================
//router for data Update
//=============================

router.route("/update/:id").put(async(req,res) => {
    //detting user id tht we need to update
    let userid = req.params.id;
    //getthig updated data from the body
    const {name , age , gender} = req.body;

    const updateCustomerPayment = {
        name,
        age,
        gender
    }

    const update = await CustomerPayment.findByIdAndUpdate(userid,updateCustomerPayment)
    .then(() => {
        res.status(200).send({status:"User Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});
    })

    
})
 
//================================
//end of router for data Update
//=============================


//================================
//router for data delete
//=============================

router.route("/delete/:id").delete(async (req , res) => {

    //get the ID from the url
    let userId = req.params.id;   

    await CustomerPayment.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status : "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })

})

//one user's get details

router.route("/get/:id").get(async (req , res) => {

    let userId = req.params.id;    

    await CustomerPayment.findById(userId)
    .then((CustomerPayment) => {
        res.status(200).send({status : "User fetched ",CustomerPayment});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })

}) 








//================================
//end of router for data delete
//=============================





module.exports = router;