import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./components/AboutUs"


// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import Decoration from "./components/Decoration";
import ThankYou from "./components/ThankYou";
import TrackOrder from "./components/TrackOrder";

// New Sections
import WhyChooseMak from "./components/WhyChooseMak";
import CleaningGuides from "./components/CleaningGuides";
import BeforeAfterSliderSection from "./components/BeforeAfterSliderSection";

function App() {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("cartData");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartData((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, productId: product.id, qty: 1 }];
    });
  };

  // Update quantity
  const handleQuantity = (productId, action) => {
    setCartData((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (!existing) return prev;

      if (action === "-" && existing.qty > 1) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }
      if (action === "-" && existing.qty === 1) {
        return prev.filter((item) => item.productId !== productId);
      }
      if (action === "+") {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return prev;
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCartData((prev) => prev.filter((item) => item.productId !== productId));
  };

  // Clear cart
  const handleClearCart = () => setCartData([]);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AboutUs />
              <Products products={products} handleAddToCart={handleAddToCart} />
              <WhyChooseMak />
              <CleaningGuides />
              <BeforeAfterSliderSection />
              <Blogs />
              <Decoration />
            </>
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              handleAddToCart={handleAddToCart}
              products={products}
            />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartData={cartData}
              handleQuantity={handleQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleClearCart={handleClearCart}
            />
          }
        />

        {/* Checkout */}
        <Route path="/Checkout" element={<Checkout cartData={cartData} />} />

        {/* Order Flow */}
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/track-order" element={<TrackOrder />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Decorations */}
        <Route path="/decorations" element={<Decoration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
