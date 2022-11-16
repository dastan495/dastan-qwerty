import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./ProductList.css";
// import Card from 'react-bootstrap/Card';

const ProductList = ({ getProducts, electronics, deleteProduct }) => {
  const [selectElectric, setSelectedProduct] = useState("");
  const [hover, setHover] = useState("");

  useEffect(() => {
    console.log(getProducts);
    getProducts();
  }, []);
  console.log(electronics);
  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {electronics.map((item) => (
        <Card
          onClick={() => setSelectedProduct(item.id)}
          onMouseEnter={() => setHover(item.id)}
          onMouseLeave={() => setHover("")}
          style={{
            width: "18rem",
            margin: "1rem",
            border: selectElectric === item.id ? "1px solid black" : "",
            transform: hover === item.id ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body className="main">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <div className="btn">
              <Link to={`/edit/${item.id}`}>
                <Button id="button1" variant="danger">
                  Edit
                </Button>
              </Link>

              <Button
                id="button2"
                onClick={() => deleteProduct(item.id)}
                variant="success"
              >
                buy
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
