const router = require ("express").Router();
let Products = require("../models/Products");

//http://localhost:8080/products/add

router.route("/add").post((req,res)=>{

    const item_code = req.body.item_code;
    const product_name = req.body.product_name;
    const remaining_quantity =Number(req.body.remaining_quantity);
    const item_type = req.body.item_type;
 

const newProducts = new Products({
    item_code,
    product_name,
    remaining_quantity,
    item_type
})



newProducts.save().then(()=>{
    res.json("Products added")
}).catch((err)=>{
    console.log(err);
    
})

})


//http://localhost:8080/products

router.route("/").get((req,res)=>{
    Products.find().then((products)=>{
        res.json(products)

        }).catch((err)=>{
            console.log(err);
           
        })
})

//http://localhost:8080/products/update
router.route("/update/:id").put(async(req,res)=>{
    const pdtId = req.params.id;
    const{item_code,product_name,remaining_quantity,item_type} = req.body;

const updateProducts ={
    item_code,
    product_name,
    remaining_quantity,
    item_type
};


const update = await Products.findByIdAndUpdate(pdtId,updateProducts)
    .then(()=>{
        res.status(200).send({status:"Product updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updateing data", error:err.message});

    })
})


//http://localhost:8080/products/delete

router.route("/delete/:id").delete(async(req,res)=>{
    let pdtId=req.params.id;
    await Products.findByIdAndDelete(pdtId).then(()=>{
        res.status(200).send({status:"Products deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with deleting Products", error:err.message});

})
})

//http://localhost:8080/Products

router.route("/get/:id").get(async(req,res)=>{
    let pdtId=req.params.id;
    const user = await Products.findById(pdtId).then((Products)=>{
        res.status(200).send({status:"Products fetched",Products});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching Products", error:err.message});

})
})




module.exports= router;




