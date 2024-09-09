import  React from "react"
import ReactDOM from "react-dom/client"
import pic from './images/office.jpg';

 




function About(props)
{
const mystyle={
background:"cyan",
color:"black",
fontSize:"50px",
width:"100%",
height:"100px",
textAlign:"center",
fontFaily:"Arial black"
}
const main =
{
 background:"orange",
 color:"black",  
 padding:"40px" 
}
document.body.style.background ="yellow"
    return(
        <div>
       <img  style={{display:"block",margin:"auto",width:"60%",height:"300px"}}src = {pic} />
            <h1 style={mystyle}>{props.text}</h1>
        <h2  style={{color:"blue"}}></h2>


        <p style={main}>Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrap
 <br/></p>
 
 <p style={main}>Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrap
 <br/></p>
 
 <p style={main}>Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragrap
 <br/></p>
 

        
        </div>

)}
export default About
