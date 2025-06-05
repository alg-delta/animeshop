import "./App.css";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Header from "./components/Header";
import data from "./data";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const minus = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  return (
    <div className="App">
      <BrowserRouter basename="/animeshop/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col md={12}>
                  <Main products={data} add={add} />
                </Col>
                <Col>
                  <Cart cartItems={cartItems} add={add} minus={minus} />
                </Col>
              </Row>
            }
          />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
