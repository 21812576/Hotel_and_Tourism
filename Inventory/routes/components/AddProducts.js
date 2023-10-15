import React,{useState} from "react"
import axios from "axios";

export default function AddProducts(){

    const [item_code, setItemCode] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [remaining_quantity, setRemaining_quantity] = useState("");
    const [item_type, setItem_type] = useState("");
    const[message, setMessage]=useState("");
    

    function sendData(e){
        e.preventDefault();
        
        const newProduct ={
            item_code,
            product_name, 
            remaining_quantity,
            item_type
        };


            

        axios.post("http://localhost:8080/products/add",newProduct).then(()=>{
            alert("Product added");
            setItemCode("");
            setProduct_name("");
            setRemaining_quantity("");
            setItem_type("");
            
            
        }).catch((err)=>{
            setMessage(`Error: ${err.message}`);
        })
        

    }

    return(
        <div className="container">
           <form onSubmit={sendData}>

           <div class="form-group">
                <label for="item_code" >Item Code</label>
                <input type="text" class="form-control" id="Item_code" onChange={(e) =>{

                    setItemCode(e.target.value);
                    
                    }}required/>
                 
              </div>
              <div class="form-group">
                <label for="product_name" >Product Name</label>
                <input type="text" class="form-control" id="product_name" onChange={(e) =>{

                    setProduct_name(e.target.value);
                    
                    }}required/>
                 
              </div>

              <div class="form-group">
                <label for="remaining_quantity" >Quantity</label>
                <input type="text" class="form-control" id="remaining_quantity" onChange={(e) =>{

                    setRemaining_quantity(e.target.value);
                    
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
            
                <button type="submit" class="btn btn-primary">Add Product</button><br></br>

                       

               
            
              {message && <p>{message}</p>}
            </form>
        </div>
    )

}

