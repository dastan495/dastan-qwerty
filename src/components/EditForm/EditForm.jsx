import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import EditProduct from '../EditProduct/EditProduct';

const EditForm = ({getOneProduct, oneProduct, updateProduct}) => {
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState("");
        const [image, setImage] = useState("");

        const params = useParams()

    useEffect(() => {
        getOneProduct(params.id)
    }, [])

    useEffect(() => {
    if(oneProduct) {
        setTitle(oneProduct.title)
        setPrice(oneProduct.price)
        setImage(oneProduct.image)

    }
}, [oneProduct])

        function handleValues() {
            let newProduct = {
              title,
              price,
              image,
            };

            updateProduct(params.id, newProduct)
        
            setTitle('')
            setPrice('')
            setImage('')
          }

    return (
        <div className='container'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
        value={title}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
        value={price}
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="immage"
        value={image}
      />
      <button onClick={() => handleValues()}>Add</button>
    </div>
    );
};

export default EditForm;