import React, { useState } from "react";
import './AddElectronics.css'

const AddElectronics = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");


  // console.log(addProduct);
  function elecValues() {
    let newElectronic = {
      title,
      price,
      image,
    };
    addProduct(newElectronic);

    setTitle("");
    setPrice("");
    setImage("");
  }

  return (
    <div className="main_input">    
        <h1>ADD THE COMENTS </h1>
      <input className="input_child"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="electronic"
        value={title}
      />
      <input className="input_child"
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
        value={price}
      />
      <input className="input_child"
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image"
        value={image}
      />
      <button className="input_child" onClick={() => elecValues()}>Add the comments</button> 

     
    </div>
  );
};

export default AddElectronics;
