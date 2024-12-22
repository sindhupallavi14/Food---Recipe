import { NavLink } from "react-router-dom"
import "./recipe-item.css"
export function RecipeItem({item})
{
    return(
        <div className="recipe-item-card">
           <div>
                <img src={item.image_url} className="item-img"/>
           </div>
          
           <div className="item-publisher">
            <p>{item.publisher}</p>
           </div>
           <div className="item-title">
             <p>{item.title}</p>
           </div>
           <NavLink to={`/recipe-item/${item.id}`} className="recipe-details-btn">Recipe Details</NavLink>
        </div>
    )
}