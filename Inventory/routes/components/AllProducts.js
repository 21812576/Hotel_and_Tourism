import React , {useState, useEffect} from 'react';
import axios from "axios";


export default function AllProducts(){

    const [products, setProducts]=useState([]);
    const [error, setError] = useState(null);
    const[records,setRecords]=useState(products);
    
    const[formData,setFormData]=useState({
        item_code: '',
        product_name: '',
        remaining_quantity: '',
        item_type: '',
       
    });

    useEffect(()=>{
        async function getProducts(){
         
                const response=await
            axios.get("http://localhost:8080/Products").then((res)=>{
                
                setProducts(res.data);
               
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getProducts();
    },[]);




//handle update button







//handle delete button

const handleDeleteClick = async(pdtId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (confirmDelete){
    try {
             
  
         await axios.delete(`http://localhost:8080/products/delete/${pdtId}`);
       
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== pdtId));
      } catch (error) {
        console.error(error);
        setError('Error deleting the product');
      }
         
    }
};





    return(
        <div class="container">
            <h1>Available Products</h1>

            <input type="text"class='form-control'placeholder="Search"  />
           
                <table>
                    <thead>
                        <tr>
                            <th>Item code</th>
                            <th>Product Name</th>
                            <th>Remaining Quantity</th>
                            <th>Item Type</th>
                            <th>Actions</th>  
                                

                        </tr>
                    </thead>
                <tbody>
                {products.map((products,index)=>(<tr key={index}>
                    
                    <td>{products.item_code} </td>
                    <td>{products.product_name} </td>
                    <td>{products.remaining_quantity}</td>
                    <td>{products.item_type}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button">Update</button>  
                            <button class="delete-button"  onClick={() =>handleDeleteClick(products._id)} >Delete</button>
                              </div>
                    </td>

                </tr>) )
                };
                
                </tbody>
            </table>

            
        
    

          
            
        </div>
         
        
 
    );

                    
    }



