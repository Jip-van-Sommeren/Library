import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  function changeQuantity(book, newQuantity) {
    setCart(
      cart.map((item) =>
        +item.id === +book.id ? { ...item, quantity: +newQuantity } : item
      )
    );
  }

  function removeFromCart(book) {
    // cart.forEach((item) => (item.id === book.id ? cart.splice(item, 1) : cart));

    // setCart([...cart]);
    setCart(cart.filter((item) => item.id !== book.id));
    // setCart([cart]);
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route
          path="/books/:id"
          element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
