import  React from "react"
import ReactDOM from "react-dom/client"


function Home(props)
{
const mystyle={
background:"black",
color:"white",
fontSize:"50px",
width:"100%",
height:"100px",
textAlign:"center",
fontFaily:"Arial black"
}
const main =
{
 background:"green",
 color:"white",  
 padding:"40px" 
}
document.body.style.background ="Yellow"
    return(
        <div>
        
            <h1 style={mystyle}>{props.text}</h1>
        <h2  style={{color:"green"}}></h2>


        <p style={main}>Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrap
 <br/>
 Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrapNature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrap

        </p>
        
        
        </div>

)}
export default Home
