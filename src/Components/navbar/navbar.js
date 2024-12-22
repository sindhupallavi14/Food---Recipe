import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { FoodRecipeContext } from "../Context/context";
export function Navbar() {

  const {search,setSearch,handleSubmit}=useContext(FoodRecipeContext);
  console.log(search);
  
  return (
    <div className="Navbar">
      <NavLink to="/" className="navlink">
        <h3>Food Recipe</h3>
      </NavLink>

      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          className="search"
          placeholder="Search Items"
        />
      </form>

      <NavLink
        to={"favorites"}
        className={({ isActive }) => (isActive ? "navlink-active" : "navlink")}
      >
        Favorites
      </NavLink>
    </div>
  );
}
