import {createContext,useContext, useEffect, useState} from "react";

const ProductContext = createContext(null)


const apiLink = process.env.REACT_APP_API_URL

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const loadProduct = async () => {
        setIsLoading(true)
        try {
            const res =await fetch(`${apiLink}/products`, {
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = res.json()
        if (res.ok) {
            setProducts(data.data)
            setIsLoading(false)

        }
        if (!res.ok) {
            setError("No product data at the moment")
            setIsLoading(false)

        }
        } catch (error) {
             setError("No product data at the moment")
            setIsLoading(false)
        }
    }
    useEffect(() => {
      loadProduct()
    }, [])
    
    const contextValue = {
        products,error,isLoading
    }
    return (
        <ProductContext.Provider value={ contextValue} >
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext)
    if (context === undefined) throw new Error("Product not accessible")
    return context
}