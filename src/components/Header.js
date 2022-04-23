import React from "react";
import '../App.css'
function Header(props){
const {search,onInputChange,onSearchClick} = props;
    return(
        <div className="jumbotron">
            <h1 className="display-1 mb-3">
            <i className="material-icons brand-icon">dinner_dining</i>   Food Ingredient Recipe 
            </h1>
            <div className="input-group w-50 mx-auto ">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search your Recipe...." 
            value={search} 
            onChange={onInputChange}    
            />
            <div className="input-group-append">
            <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
           </div>
           </div>
        </div>
        
    );
}

export default Header;