import React from 'react'
import { useCart } from "react-use-cart";
import "./cartDetail.css"

function CartDetail() {


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

      if (isEmpty) return <div className = "container empty-cart">
        <h4>Sepetinizde henüz hiçbir ürün bulunmamaktadır.</h4>
      </div>;


    return (
      
        <>

        
      <h1 className = "card-title"> Sepetiniz  ({totalUniqueItems})</h1>

       

        <div className  ="container">
            <div className = "row ">
            
            
        {items.map((item) => ( 
            <div className="d-flex justify-content-center ">
            <div className="card mb-3" >
              
          <h5 className = "card-title" key={item.id}>
          <img src={item.imgUrl} className="card-img-top" alt="..."/>
            <p className="card-text">{item.title}</p>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.price}</p>
            {item.quantity} x {item.title} &mdash;
            <button className="btn btn-primary m-1"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button  className="btn btn-success m-1"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="btn btn-danger m-1" onClick={() => removeItem(item.id)}>&times;</button>
          </h5>
          </div>
          </div>
        ))}
        
        </div>
        
        
     
        </div>
        
       
      
    </> 
  );
    
}

export default CartDetail
