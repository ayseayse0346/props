//* React importu artık zorunlu değil
// import React from "react";

//? named exportun importu, süslü içinde ve aynı isimle import edilmeli
import { Name } from "./Name";

//? componentler function dec. veya arrow func. ile oluşturulabilir
const Cat = ({ name, img, color = "grey", isBlueEyed }) => {
  //? destr.
  //   const { name, img, color } = props;
  console.log(isBlueEyed);
  return (
    //* JSX ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır
    <div>
      <Name name={name} />
      {/* //* JSX içinde if/else kullanılamaz, ternary kullanılabilir */}
      <p>Blue eyed? : {isBlueEyed ? "Yes" : "No"} </p>
      <img src={img} alt="cat-img" height="300px" />
      <p style={{ backgroundColor: color }}>Color: {color} </p>
      <hr />
    </div>
  );
};

export default Cat;

