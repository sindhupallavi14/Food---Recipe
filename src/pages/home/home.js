import { useContext } from "react"
import { FoodRecipeContext } from "../../Components/Context/context"
import { RecipeItem } from "../../Components/recipe-item/recipe-item"
import "./home.css"

export function Home()
{
    const {loading,recipeList}=useContext(FoodRecipeContext);

    if(loading)
    {
        return <div>Loading............!!!</div>
    }
    return(
        <div className="receipe-list-con">
            {recipeList && recipeList.length >0 ? 
              recipeList.map((item)=><RecipeItem item={item}/>)
            :<div className="ntg">Nothing to show...Please search something</div>}
        </div>
    )
}