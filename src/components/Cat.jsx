
// react importu artık zorunlu değil
// import React from 'react'
// ?componentler funct.dec. veya arrow func ile oluşturulabilir.
// named exportun importu,süslü içinde ve aynı isimle import edilmeli.
import{Name}  from "./Name"

const Cat = (props) => {
  return (
    // jsx ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır.
    <div>
        <Name/>
        <img 
        src={props.img} 
        alt="cat-img" 
        height="400px" 
        
        />
        <p style={{backgroundColor: props.color}}>color : {props.color}</p>
        <hr />
    </div>
  )
}

export default Cat;