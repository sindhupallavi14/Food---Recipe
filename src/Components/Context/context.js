import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// creating context
export const FoodRecipeContext = createContext(null);

export function FoodRecipeGlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favList, setFavList] = useState([]);

  const navigate=useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/")
      }
      //  console.log(data)
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  // console.log(loading, recipeList);

  function handleAddtoFav(getcrntItem)
  {
     let temp=[...favList];
     const idx=temp.findIndex(item=>item.id===getcrntItem.id)

     if(idx===-1)
     {
        temp.push(getcrntItem);
     }
     else{
      temp.splice(idx);
     }

     setFavList(temp)
  }

  console.log(favList);

  return (
    <FoodRecipeContext.Provider
      value={{
        recipeDetails,
        setRecipeDetails,
        loading,
        recipeList,
        search,
        setSearch,
        handleSubmit,
        favList,
        handleAddtoFav
      }}
    >
      {children}
    </FoodRecipeContext.Provider>
  );
}
