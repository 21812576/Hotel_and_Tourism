const router = require ("express").Router();
let Finance = require("../models/Finance");

//http://localhost:8080/finance/fadd

router.route("/fadd").post((req,res)=>{
    const item_code = req.body.item_code;
    const product_name = req.body.product_name;
    const quantity =Number(req.body.quantity);
    const item_type = req.body.item_type;
    const amount =Number(req.body.amount);

const newFinance = new Finance({
    item_code,
    product_name,
    quantity,
    item_type,
    amount
})

newFinance.save().then(()=>{
    res.json("finance added")
}).catch((err)=>{
    console.log(err);
    
})

})

http://localhost:8080/finance

router.route("/").get((req,res)=>{
    Finance.find().then((finance)=>{
        res.json(finance)

        }).catch((err)=>{
            console.log(err);
           
        })
})

http://localhost:8080/finance/update
router.route("/update/:id").put(async(req,res)=>{
    const finId = req.params.id;
    const{item_code,product_name,quantity,item_type,amount} = req.body;

const updateFinance={
    item_code,
    product_name,
    quantity,
    item_type,
    amount
};


const update = await Finance.findByIdAndUpdate(finId,updateFinance)
    .then(()=>{
        res.status(200).send({status:"Finance updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updateing data", error:err.message});

    })
})


http://localhost:8080/finance/delete

router.route("/delete/:id").delete(async(req,res)=>{
    let finId=req.params.id;
    await Finance.findByIdAndDelete(finId).then(()=>{
        res.status(200).send({status:"finance deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with deleting finance ", error:err.message});

})
})

http://localhost:8080/finance

router.route("/get/:id").get(async(req,res)=>{
    let finId=req.params.id;
    const user = await Finance.findById(finId).then((Finance)=>{
        res.status(200).send({status:"finance fetched",Finance});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching finance", error:err.message});

})
})




module.exports= router;





