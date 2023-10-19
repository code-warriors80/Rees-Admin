import React, { useCallback, useEffect, useRef, useState } from "react";
import { foods } from "../../../utilities";
import { useLocation, useParams } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { fetchProduct } from "../../../apIservice/apis";



const apiLink = process.env.REACT_APP_API_URL

const EditProductPage = () => {
  const location = useLocation();
  const {id} = useParams()
  const [product, setproduct] = useState([])
    const [error, setError] = useState("");

  
  useEffect( () => {
    fetchProduct(id).then(data => setproduct(data))

  },[])  
  
  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [image, setImage] = useState(product?.image);
  const [price, setPrice] = useState(null);
  const fileInputRef = useRef(null);

  const handleChangeImage = (event) => {
    // const file = event.target.files[0];
    // setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      const res = await fetch(`${apiLink}/product/update_products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, image, price }) 
      })
      const data = await res.json()
      if (res.ok) {
        // loadProduct()
        console.log(data)
        setName('')
        setDescription('')
        setImage('')
        setPrice('')
      }
      if (!res.ok) {
        setError(data.error)
        console.log(data)
      }
    } catch (error) {
        setError('An error occured on submission')
    }
  };

  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold text-purple-500">Edit Product</h1>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-lg">Product Name:</p>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              className="border-[gray] border-[1px] border-solid px-2 py-1 rounded-[8px]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-lg">Product Description:</p>
          <div>
            <textarea
              rows={7}
              cols={50}
              name="description"
              value={description}
              className="border-[gray] border-[1px] border-solid px-2 py-1 rounded-[8px]"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-lg">Product Image:</p>
          <div>
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              // value={image}
              onChange={handleChangeImage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-lg">Price:</p>
          <div>
            <input
              type="number"
              name="price"
              value={price}
              className="border-[gray] border-[1px] border-solid px-2 py-1 rounded-[8px]"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-purple-500 w-20 rounded-[10px] p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
