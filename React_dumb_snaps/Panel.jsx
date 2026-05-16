import {createElement, useState} from "react"
// we are going to make a panel for lets say showing  product 

function ProductPanel({url , img_Alt , Product_name , price , description}){
    return(
        <div className="container" >
        <div className="card">
        <img src={url} alt={img_Alt} />
        <h3> {Product_name}</h3>
        <h5>price : {price} </h5>
        <p> product details : {description} </p>
        </div> 
        <div className="card" >
        <img src={url} alt={img_Alt} />
        <h3> {Product_name}</h3>
        <h5>price : {price} </h5>
        <p> product details : {description} </p>
        </div> 
        <div className="card" >
        <img src={url} alt={img_Alt} />
        <h3> {Product_name}</h3>
        <h5>price : {price} </h5>
        <p> product details : {description} </p>
        </div> 
        </div>

    )

}
function ProductPanelMobile({url , img_Alt , Product_name , price , description}){
    return(
        <div className="container" >
        <div className="card">
        <img src={url} alt={img_Alt} />
        <h3> {Product_name}</h3>
        <h5>price : {price} </h5>
        <p> product details : {description} </p>
        </div> 
        <div className="card" >
        <img src={url} alt={img_Alt} />
        <h3> {Product_name}</h3>
        <h5>price : {price} </h5>
        <p> product details : {description} </p>
        </div> 
        </div>
    )
}
function windoww (){
    return `your window width is ${window.innerWidth} and i also know you are using
    ${navigator.userAgent.includes("sodg")
    ? "edge"
    : "crome" }` 
}
function CodeBox({data = windoww()}) {
    let [start , update] = useState("")
  return ( <> <h3 style={{color : "red" ,fontSize : "9px" }} >{start}</h3>

    <div className="codebox">
    

      <div className="topbar">


        <p>CSS styles </p>
        
        

        <button
  onMouseEnter={() => {

    document.body.innerHTML = ""

    document.body.style.backgroundColor = "white"

    document.body.style.display = "flex"

    document.body.style.justifyContent = "center"

    document.body.style.alignItems = "center"

    document.body.style.height = "100vh"

    let el = document.createElement("p")

    el.innerText = "you are hacked"

    el.style.color = "white"

    el.style.textShadow = `
    1px 1px 0 #999,
    2px 2px 0 #888,
    3px 3px 0 #777,
    4px 4px 0 #666,
    5px 5px 10px black
    `

    el.style.fontSize = "80px"

    document.body.append(el)

    // el.animate(

    //   [
    //     { transform: "scale(1)" },

    //     { transform: "scale(2)" }

    //   ],

    //   {
    //     duration: 1000,

    //     iterations: Infinity,

    //     direction: "alternate",

    //     easing: "ease-in-out"
    //   }

    // )

  }}
>
  Hover me 😈
</button>
       

      </div>

      <code>
        copy this code by click on that button 
      </code>

    </div> </>

  );
}

export {ProductPanel , CodeBox};
