import React from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";

export default function Main(props) {
  const { products, add} = props;
  return (
    <Row className="gap-4 justify-content-center">
    {products.map((product) => (
      <Product key={product.id} product={product} add={add}/>
    ))}
   </Row>
  );
}
