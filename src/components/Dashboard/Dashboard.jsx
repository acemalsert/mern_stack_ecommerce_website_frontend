import React , { useEffect, useState } from "react";
import axios from "axios";
import {useCart} from "react-use-cart"
import "./dashboard.css"
import SearchIcon from '@mui/icons-material/Search';


function Dashboard(){


  const [searchTerm,setSearchTerm] = useState("")
  const [products,setProducts] = useState([])
  
  
  const fetchProducts = async() =>{
      try{
          const res = await axios.get('http://localhost:5000/api/products/getProducts')
          setProducts(res.data)
      }
      catch(error){
          console.log(error)
      }
  } 

  useEffect(() => {
      fetchProducts()
  }, []) 
 

  const {addItem}  = useCart(); 

  return (
 
 <div className="container">
      
    <div className = "mt-3 search-box">
    <input type="text" className="search-txt"  placeholder="                Ürün Ara" onChange = {(event) =>{
                            setSearchTerm(event.target.value);
                        }
                    }/> 
                    <SearchIcon fontSize="large"/>
    </div>
  <div className = "row m-2">
      
          {products.filter((product)=>{
              if(searchTerm == "") {
                  return product;
                }
              else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return product;
              }
          }).map((product)=>{
              return(
               <div className="col-12 col-md-4 mt-2 mb-2">
                  <div className="card">
                      <img src={product.imgUrl} className="card-img-top" alt="Ürün Fotoğrafı"/>
                      <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <p className="card-text">{product.price} ₺</p>
                          <a href="" className="btn btn-warning" onClick={() => addItem(product,1) }>Sepete Ekle</a>
                      </div>
                  </div> 
                  </div>)
          })}
    
  </div>
</div>
      
  ) 
  
}
                    
                                      

export default Dashboard;
