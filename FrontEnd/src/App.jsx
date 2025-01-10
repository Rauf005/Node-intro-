import { NavLink } from "react-router"
import { useEffect } from 'react'
import axios from "axios"
import './App.css'
import { useState } from 'react'

function App() {
 
  let [products,setProducts]=useState([])
  function getData(){
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      setProducts(res.data)
    })
  }
  useEffect(()=>{
     getData()
  },[])


    async  function handleDelete(id){
     await axios.delete(`http://localhost:3000/products/${id}`)
     getData()
  }
  return (
    <>
      <table style={{border:"1px solid black",width:"800px"}}>
  <tr >
    <th style={{border:"1px solid black",width:"200px"}}>brandName</th>
    <th style={{border:"1px solid black",width:"200px"}}>modelName</th>
    <th style={{border:"1px solid black",width:"200px"}}>Year</th>
    <th style={{border:"1px solid black",width:"200px"}}>Actions</th>
  </tr>
 {
  products.map(product=>(
    <tr key={product._id} style={{ backgroundColor: product.New ? 'green' : 'red' }} >
    <td style={{width:"200px"}}>{product.brandName}</td>
    <td style={{width:"200px"}}>{product.modelName}</td>
    <td style={{width:"200px"}}>{product.year}</td>
    <td style={{width:"10px"}}><button style={{border:"none",backgroundColor:"blue",color:"white",margin:"0 20px"}} >Detail</button>
      <button style={{border:"none",backgroundColor:"orange"}} onClick={()=>handleDelete(product._id)}>delete</button></td>
    
  </tr>
  
  ))
 }
</table>
<button style={{border:"none",backgroundColor:"green",borderRadius:"5px",width:"100px",marginTop:"30px",color:"white",height:"30px"}}>Add</button>
    </>
  )
}

export default App