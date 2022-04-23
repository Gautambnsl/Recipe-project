import React,{useState, useEffect}  from 'react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';







function App() {

  
  const[search , setSearch] = useState("Pasta");
  const[recipes , setRecipes] = useState([]);
  const APP_ID = '67d716b6';
  const APP_KEY = 'c3624ac7c24e796f436fe6d0a759b7c4';
  
  useEffect(()=>{
    getRecipe();
  },[]);

  async function getRecipe(){
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to3&calories=591-722&health=alcohol-free`)
    console.log(res);
    setRecipes(res.data.hits);
  }

  const onInputChange = e => {
    setSearch(e.target.value);
  }; 

  const onSearchClick =  (e)=>{
      getRecipe();
  }
  
  return (
    <div className='App'>
          <Header search = {search} onInputChange={onInputChange} onSearchClick = {onSearchClick} />
         
         <div className='container'>
          <Recipe recipes = {recipes}/>

         </div>
         
    </div>
  );
}

export default App;
