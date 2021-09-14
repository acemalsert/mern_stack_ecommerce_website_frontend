import React, { useEffect, useState }from "react";
import axios from "axios";

function Dashboard() {

  const [products,setProducts] = useState([])

  const fetchProducts = async() =>{
      try{
          const res = await axios.get('products/getProducts')
          setProducts(res.data)
      }
      catch(error){
          console.log(error)
      }
  } 

  useEffect(() => {
      fetchProducts()
  }, [])


  return (
 
      <div className="container">
            <div className = "row">
                <div className="col-12 col-md-4 mt-2 mb-2">
                    {products.map((products)=>{
                        return(
                            <div className="card">
                                <img src={products.imgUrl} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{products.title}</h5>
                                    <p className="card-text">{products.description}</p>
                                    <p className="card-text">{products.price}</p>
                                    <a href="" className="btn btn-primary">Sepete Ekle</a>
                                </div>
                            </div> )
                    })}
               </div>
            </div>
       </div> 

      
  )
}
                    
                                      

export default Dashboard;
