const router = require ("express").Router();
let Order = require("../models/Order");

//http://localhost:8080/Order/Oadd

router.route("/Oadd").post((req,res)=>{
    
    const product_name = req.body.product_name;
    const quantity =Number(req.body.quantity);
    const item_type = req.body.item_type;

const newOrder = new Order({
    product_name,
    quantity,
    item_type
})

newOrder.save().then(()=>{
    res.json("Order added")
}).catch((err)=>{
    console.log(err);
    
})

})

http://localhost:8080/Order

router.route("/").get((req,res)=>{
    Order.find().then((orders)=>{
        res.json(orders)

        }).catch((err)=>{
            console.log(err);
           
        })
})

http://localhost:8080/Order/update
router.route("/update/:id").put(async(req,res)=>{
    const orderId = req.params.id;
    const{product_name,quantity,item_type} = req.body;

const updateOrder ={
    product_name,
    quantity,
    item_type
};


const update = await Order.findByIdAndUpdate(orderId,updateOrder)
    .then(()=>{
        res.status(200).send({status:"Order updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updateing data", error:err.message});

    })
})


http://localhost:8080/Order/delete

router.route("/delete/:id").delete(async(req,res)=>{
    let orderId=req.params.id;
    await Order.findByIdAndDelete(orderId).then(()=>{
        res.status(200).send({status:"Orders deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with deleting Orders", error:err.message});

})
})

http://localhost:8080/Order

router.route("/get/:id").get(async(req,res)=>{
    let orderId=req.params.id;
    const user = await Order.findById(orderId).then((Order)=>{
        res.status(200).send({status:"Orders fetched",Order});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching Orders", error:err.message});

})
})




module.exports= router;




