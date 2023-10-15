import React,{useState} from "react"
import axios from "axios";

export default function AddOrders(){

    const [product_name, setProduct_name] = useState("");
    const [quantity, setquantity] = useState("");
    const [item_type, setItem_type] = useState("");
    const[message, setMessage]=useState("");

    function sendData(e){
        e.preventDefault();
        
        const newOrder ={
            product_name, 
            quantity,
            item_type
        }

        axios.post("http://localhost:8080/orders/Oadd",newOrder).then(()=>{
            alert("Order added");
            setProduct_name("");
            setquantity("");
            setItem_type("");
            
        }).catch((err)=>{
            setMessage(`Error: ${err.message}`);
        })




    }

    return(
        <div className="container">
           <form onSubmit={sendData}>
              <div class="form-group"> <br></br>
                <label for="product_name" >Product Name</label>
                <input type="text" class="form-control" id="product_name" onChange={(e) =>{

                    setProduct_name(e.target.value);
                }}required/>
                 
              </div>

              <div class="form-group">
                <label for="quantity" >Quantity</label>
                <input type="text" class="form-control" id="quantity" onChange={(e) =>{

                    setquantity(e.target.value);
                }}required/>
                 
              </div>

              <div class="form-group">
                <label for="item_type" >Product Type</label>
                <input type="text" class="form-control" id="item_type" onChange={(e) =>{

                    setItem_type(e.target.value);
                }}required/>
                 
              </div>
              <br>
              </br>
            
                <button type="submit" class="btn btn-primary">Add Order</button>


                {message && <p>{message}</p>}
            </form>
        </div>
    )

}
