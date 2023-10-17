import {createContext,useContext, useState} from "react";

const UserContext = createContext(null);
export const UserContextProvided = ({ children }) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
const apiLink = process.env.REACT_APP_API_URL
  const getAllUsers = async () => {
      setIsLoading(true)
        const res =await fetch(`${apiLink}`, {
            headers: {
                "Content-type": "application/json",
            }
        })
    const data = res.json()
        if (res.ok) {
            setUsers(data.data)
            setIsLoading(false)

        }
        if (!res.ok) {
            setError("No product data at the moment")
            setIsLoading(false)

        }
  }

  const getSingleUser = async () => {

  }

  const contextValue = {
    users,error,isLoading
  }
  return  <UserContext.Provider value={ contextValue} >
            {children}
        </UserContext.Provider>
};

export default UserContext;

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) throw new Error("User not accessible")
    return context
}