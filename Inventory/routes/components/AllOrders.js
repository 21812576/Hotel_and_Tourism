import React , {useState, useEffect} from 'react';
import axios from "axios";


export default function AllOrders(){

    const [orders, setOrders]=useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function getOrders(){
         
                const response=await
            axios.get("http://localhost:8080/orders").then((res)=>{
                
                setOrders(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getOrders();
    },[]);


    //handle delete button

const handleDeleteClick = async(orderId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Order?");

    if (confirmDelete){
    try {
             
  
         await axios.delete(`http://localhost:8080/orders/delete/${orderId}`);
       
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      } catch (error) {
        console.error(error);
        setError('Error deleting the Order');
      }
         
    }
};



    return(
        <div class="container">
            <h1>Order List</h1>
           
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th> Quantity</th>
                            <th>Item Type</th>

                        </tr>
                    </thead>
                <tbody>
                {orders.map((orders,index)=>(<tr key={index}>
                    <td>{orders.product_name} </td>
                    <td>{orders.quantity}</td>
                    <td>{orders.item_type}</td>

                    <td>
                        <div class="button-container">
                            <button class="approve-button"  onClick={() =>(orders.product_name)} >Update</button>  
                            <button class="delete-button"  onClick={() =>handleDeleteClick(orders._id)} >Delete</button>
                              </div>
                    </td>


                </tr>) )}
                
                </tbody>
            </table>
            
        </div>
    );
}
