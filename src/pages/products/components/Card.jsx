import React, { useState } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const [dropdown, setDropdown] = useState(false)

  return (
    <div className="relative maincard card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image} alt={product.alt} className="card-img"/>
      </figure>
      <div className="absolute main top-1 right-0  p-[10px]">
        <div className="relative dots-menu">
          <ThreeDotsVertical className="text-2xl dots" onClick={() => setDropdown(!dropdown)}/>
          <div className={`absolute secmain top-8 right-0  ${dropdown ? 'block' : "hidden"}`}>
            <ul className="items-end text-left rounded-xl w-40 bg-white flex flex-col">
               <li className="p-1 w-full text-right rounded-t-xl l-item"><Link to={`/products/${product.id}/edit`}>Edit</Link></li> 
               <li className="p-1 w-full text-right l-item"> <a href="blank">View Details</a></li> 
               <li className="p-1 w-full text-right rounded-b-xl l-item"> <a href="blank">Delete</a></li> 
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
