import React, { useState } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useProduct } from "../../../context/productContext";

const apiLink = process.env.REACT_APP_API_URL;

const Card = ({ product }) => {
  const [dropdown, setDropdown] = useState(false)
  const [error, setError] = useState('')
  const { loadProduct } = useProduct()
  

  const handleDelete = async (e) => {
    e.preventDefault()
    alert('Are you sure?')
     try {
       const res = await fetch(`${apiLink}/product/delete_products/${product._id}`, {
        method:'DELETE',
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        loadProduct()
      }
      if (!res.ok) {
        setError("No order data at the moment");
      }
    } catch (error) {
      setError("No order data at the moment");
    }
  }

  return (
    <div className="relative maincard card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image_url} alt={product.name} className="card-img"/>
      </figure>
      <div className="absolute main top-1 right-0  p-[10px]">
        <div className="relative dots-menu">
          <ThreeDotsVertical className="text-2xl dots" onClick={() => setDropdown(!dropdown)}/>
          <div className={`absolute secmain top-8 right-0  ${dropdown ? 'block' : "hidden"}`}>
            <ul className="items-end text-left rounded-xl w-40 bg-white flex flex-col">
               <li className="p-1 w-full text-right rounded-t-xl l-item"><Link to={`/products/${product._id}/edit`}>Edit</Link></li> 
               <li className="p-1 w-full text-right l-item"> <a href="blank">View Details</a></li> 
               <li className="p-1 w-full text-right rounded-b-xl l-item"> <a onClick={handleDelete}>Delete</a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Card;
