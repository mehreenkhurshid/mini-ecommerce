import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <header className="bg-gradient-to-r from-rose-100 to-white shadow">
                    <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">
                        <NavLink
                            to="/"
                            className="text-2xl font-bold text-rose-500"
                        >
                            MK
                            <span className="text-2xl font-bold text-black">
                                Store
                            </span>
                        </NavLink>

                        <nav className="flex gap-4 items-center">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `relative pb-0.5 ${
                                        isActive
                                            ? "text-rose-500 font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose-500 after:rounded"
                                            : "text-gray-700 hover:text-rose-500"
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `relative pb-0.5 ${
                                        isActive
                                            ? "text-rose-500 font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose-500 after:rounded"
                                            : "text-gray-700 hover:text-rose-500"
                                    }`
                                }
                            >
                                Products
                            </NavLink>

                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    `relative pb-0.5 flex items-center gap-1 ${
                                        isActive
                                            ? "text-rose-500 font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose-500 after:rounded"
                                            : "text-gray-700 hover:text-rose-500"
                                    }`
                                }
                            >
                                <span className="relative">
                                    <FaShoppingCart />

                                    {cartCount > 0 && (
                                        <span className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </span>

                                Cart
                            </NavLink>
                        </nav>
                    </div>
                </header>

                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home addToCart={addToCart} />}
                        />

                        <Route
                            path="/products"
                            element={<Products addToCart={addToCart} />}
                        />

                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    removeFromCart={removeFromCart}
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                />
                            }
                        />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}