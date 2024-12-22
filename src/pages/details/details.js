import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FoodRecipeContext } from "../../Components/Context/context";
import "./details.css";

export function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddtoFav, favList } =
    useContext(FoodRecipeContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data?.recipe) {
          setRecipeDetails(data?.data);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetails]);

  // Handle loading or missing data
  if (!recipeDetails?.recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="recipe-details-con">
      <div className="recipe-img">
        <img src={recipeDetails.recipe.image_url} alt="Recipe" />
      </div>
      <div className="recipe-details">
        <div className="item-publisher">
          <p>{recipeDetails.recipe.publisher}</p>
        </div>
        <div className="item-title">
          <p>{recipeDetails.recipe.title}</p>
        </div>
        <button
          onClick={() => handleAddtoFav(recipeDetails.recipe)}
          className="add-to-fav-btn"
        >
          {favList &&
          favList.length > 0 &&
          favList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !==
            -1
            ? "Remove From Fav"
            : "Add To Fav"}
        </button>
        <div>
          <p className="Ingredients-heading">Ingredients:</p>
          <ul>
            {recipeDetails.recipe.ingredients.map((ingredient, index) => (
              <li className="Ingredients" key={index}>
                <span>{ingredient.quantity || ""} </span>
                <span>{ingredient.unit || ""} </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
