import { useContext } from "react";
import { RecipeItem } from "../../Components/recipe-item/recipe-item";
import { FoodRecipeContext } from "../../Components/Context/context";


export function Favorites()
{
     const {loading,favList}=useContext(FoodRecipeContext);
    
        if(loading)
        {
            return <div>Loading............!!!</div>
        }
        return(
            <div className="receipe-list-con">
                {favList && favList.length >0 ? 
                  favList.map((item)=><RecipeItem item={item}/>)
                :<div className="ntg">Nothing Is Added</div>}
            </div>
        )
}