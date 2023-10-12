import React, { useState } from "react";
import { ThreeDots, ThreeDotsVertical } from "react-bootstrap-icons";

const Card = ({ title, image, desc, alt }) => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div className="relative maincard card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={alt} className="card-img"/>
      </figure>
      <div className="absolute main top-1 right-0  p-[10px]">
        <div className="relative dots-menu">
          <ThreeDotsVertical className="text-2xl dots" onClick={() => setDropdown(!dropdown)}/>
          <div className={`absolute secmain top-8 right-0  ${dropdown ? 'block' : "hidden"}`}>
            <ul className="items-end text-left rounded-xl w-40 bg-white flex flex-col">
               <li className="p-1 w-full text-right rounded-t-xl l-item"> <a href="#">Edit</a></li> 
               <li className="p-1 w-full text-right l-item"> <a href="#">View Details</a></li> 
               <li className="p-1 w-full text-right rounded-b-xl l-item"> <a href="#">Delete</a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
