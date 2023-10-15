import React , {useState, useEffect} from 'react';
import axios from "axios";
import"./AllFinance.css";


export default function AllFinance()
{

    const [finance, setFinance]=useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function getFinance(){
         
                const response=await
            axios.get("http://localhost:8080/finance").then((res)=>{
                
                setFinance(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getFinance();
    },[]);


    //handle delete button

const handleDeleteClick = async(finId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this ?");

    if (confirmDelete){
    try {
             
  
         await axios.delete(`http://localhost:8080/finance/delete/${finId}`);
       
        setFinance((prevFinance) => prevFinance.filter((finance) => finance._id !== finId));
      } catch (error) {
        console.error(error);
        setError('Error deleting the finance');
      }
         
    }
};



    return(
        <div class="container">
            <h1>Finance Report of Inventory</h1>
           
                <table>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Product Name</th>
                            <th> Quantity</th>
                            <th>Item Type</th>
                            <th>Amount (Rs.)</th>

                        </tr>
                    </thead>
                <tbody>
                {finance.map((finance,index)=>(<tr key={index}>
                    <td>{finance.item_code} </td>
                    <td>{finance.product_name} </td>
                    <td>{finance.quantity}</td>
                    <td>{finance.item_type}</td>
                    <td>{finance.amount}</td>

                    <td>
                        <div class="button-container">
                            <button class="approve-button"  onClick={() =>(finance.item_code)} >Update</button>  
                            <button class="delete-button"  onClick={() =>handleDeleteClick(finance._id)} >Delete</button>
                              </div>
                    </td>



                </tr>) )}
                
                </tbody>
            </table>
            
        </div>
    )

    
                }