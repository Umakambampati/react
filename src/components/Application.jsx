import CustomCarousel from "./CustomCarousel"
import CustomNavbar from "./CustomNavbar"
import { Example } from "./customspinner"
import JustifiedExample from "./tab"

import React from "react"
class Application2 extends React.Component{
    state={
        products:[]
    }
    fetchproducts=()=>{
        fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((response)=>{
    this.setState({products:response.recipes})
});

    }
    render(){
        return(
            <>
            <CustomNavbar/>
            <CustomCarousel/>
            <button onClick={this.fetchproducts}>Fetchdata</button>
            {this.state.products.length>0?<div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
                
            {this.state.products.map(each=><div> <img src={each.image} style={{width:"200px",height:"200px"}}></img>
            <h6>{each.name}</h6>
           </div>)}
            </div>:<Example/>}
            <JustifiedExample/>
            </>
        )
    }
}
export default Application2