import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext(undefined);

const apiLink = process.env.REACT_APP_API_URL;
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadCategory = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiLink}/category/getCategory`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setCategories(data);
        setIsLoading(false);
      }
      if (!res.ok) {
        setError("No category data at the moment");
        setIsLoading(false);
      }
    } catch (error) {
      setError("No category data at the moment");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadCategory();
  }, []);

  const contextValue = {
    categories,
    error,
    isLoading,
  };
  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) throw new Error("Category not accessible");
  return context;
}
