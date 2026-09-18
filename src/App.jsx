import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <header className="bg-gradient-to-r from-rose-100 to-white shadow">
                    <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">
                        <NavLink to="/" className="text-2xl font-bold text-rose-500">
                            MK<span className="text-2xl font-bold text-black">Store</span>
                            {/*<div className="w-24 h-1 bg-rose-500 mx-auto rounded"></div>*/}
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
                                <FaShoppingCart /> Cart
                            </NavLink>
                        </nav>
                    </div>
                </header>

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}
