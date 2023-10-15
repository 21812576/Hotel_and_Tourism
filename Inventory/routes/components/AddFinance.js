import React,{useState} from "react"
import axios from "axios";

export default function AddFinance(){

    const [item_code, setItem_code] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [quantity, setquantity] = useState("");
    const [item_type, setItem_type] = useState("");
    const [amount, setAmount] = useState("");
    const[message, setMessage]=useState("");
   
  
        

        function sendData(e){
            e.preventDefault();
        
         
        const newFinance ={
            item_code,
            product_name, 
            quantity,
            item_type,
            amount
        }

        axios.post("http://localhost:8080/finance/fadd",newFinance).then(()=>{
            alert("Finance added");
            setItem_code("");
            setProduct_name("");
            setquantity("");
            setItem_type("");
            setAmount("");
            
            
        }).catch((err)=>{
            setMessage(`Error: ${err.message}`);
        })

    
}

    return(
        <div className="container">
           <form onSubmit={sendData}>

           <div class="form-group">
                <label for="item_code" >Item Code</label>
                <input type="text" class="form-control" id="item_code" onChange={(e) =>{

                     setItem_code(e.target.value);
                    
                }}required/>


                
                 
              </div>

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

              <div class="form-group">
                <label for="item_type" >Amount</label>
                <input type="text" class="form-control" id="amount" onChange={(e) =>{

                    setAmount(e.target.value);
                }}required/>
                 
              </div>

              <br>
              </br>
            
                <button type="submit" class="btn btn-primary">Add to Finance Report</button>

                {message && <p>{message}</p>}
            </form>
        </div>
    )

            }
