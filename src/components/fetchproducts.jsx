
import { useEffect, useState } from "react";

function FetchProducts(){
    const[recipes,setrecipes]=useState([])
useEffect(()=>{    
    fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((jsonresponse)=>{
    setrecipes(jsonresponse.recipes)
});},[])

return (
    <>
    {recipes.length>0 && recipes.map(item=> <img src={item.image} style={{width:"200px"}}/>)}
    </>
)

}
export default FetchProducts