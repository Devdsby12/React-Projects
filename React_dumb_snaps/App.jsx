import { useState } from "react"
import {ProductPanel, CodeBox} from "./Panel";
function Header(){
  let orgnatization  = "devs jeff"
  const emailid = "wwdevkhati2@gmail.com"
  return(<> <h1> {orgnatization} </h1>
  <h6>{emailid}</h6> </>)
}

function Card({name ,age ,email}){
  return(
    <>
    <h1>okay {name} bye :) </h1>
  <h1 >  hello {name} how are you , you are doing so so good at {age} i got your email id-{email} </h1>

  </>
  )
  
}

function Button(){
  let [init_value , setvalue] = useState(9)
  return(<div>
    <h1> {init_value} </h1>
    <button onClick={()=>{setvalue(init_value +1)}}> +1 </button> 
    <button onClick={()=>{setvalue(init_value - 1)}}> -1 </button> 
    <button onClick={()=>{setvalue(init_value =0 )}}> reset </button> 
    </div>
  )
}

function Button2(){
  let [on ,change]= useState(false)
  return(
    <button onClick={()=>{change(!on)}}>  {!on ? "ON 💡" : "OFF" } </button> 
  )
}

function App(){
  return(
    <>
    <Header/>
    <Header/>
    <Card name = "Devs-jeff" age = "22" email = "wwdevkhati2@gmail.com" />
    <Card name = "adil khan" />
    <Button/>
    <Button2/>
    <Card age = "10000 years" />
    <ProductPanel Product_name= "GOlf playground " url= "https://tse4.mm.bing.net/th/id/OIP.IXj0Qe_OvvEnRlk7s7ESXAHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3" price = "999" description = "this playground is best in whole newyork at just 98M" />
    <ProductPanel Product_name= "GOlf playground " url= "https://tse4.mm.bing.net/th/id/OIP.IXj0Qe_OvvEnRlk7s7ESXAHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3" price = "999" description = "this playground is best in whole newyork at just 98M" />
    <ProductPanel Product_name= "GOlf playground " url= "https://tse4.mm.bing.net/th/id/OIP.IXj0Qe_OvvEnRlk7s7ESXAHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3" price = "999" description = "this playground is best in whole newyork at just 98M" />
     <CodeBox/> <Header/><CodeBox/><Header/><CodeBox/>
     </>
    
  )
}

export default App