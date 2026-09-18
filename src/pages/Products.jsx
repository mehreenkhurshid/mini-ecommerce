import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import CategoryDropdown from "../pages/CategoryDropdown";

const dummyProducts = [
    { id: 1, name: "Wireless Headphones", price: "PKR 3,500", img: "images/headphone.webp"},
    { id: 2, name: "Smart Watch", price: "PKR 5,200", img: "images/watch.jpg" },
    { id: 3, name: "Sneakers", price: "PKR 4,000", img: "images/shoess.jpg" },
    { id: 4, name: "Gaming Laptop", price: "PKR 120,000", img: "images/laptop.jpg" },
    { id: 5, name: "DSLR Camera", price: "PKR 95,000", img: "images/camera.jpg" },
    { id: 6, name: "Bluetooth Speaker", price: "PKR 7,000", img: "images/speaker.jpg" },
    { id: 7, name: "LED Monitor", price: "PKR 25,000", img: "images/monitor.jpg" },
    { id: 8, name: "Gaming Mouse", price: "PKR 3,000", img: "images/mouse.webp"},
    { id: 9, name: "Tablets", price: "PKR 28,000", img: "images/tablets.webp"},
    { id: 10, name: "Backpack", price: "PKR 4,500", img: "images/bag.webp"},
    { id: 11, name: "Sunglasses", price: "PKR 2,000", img: "images/sunglasses.webp"},
    { id: 12, name: "Perfume", price: "PKR 3,200", img: "images/perfume.webp"},
];

export default function Products() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;


    const filteredProducts = dummyProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );


    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />

                <CategoryDropdown />

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center bg-white"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-48 object-contain rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                        <div className="flex justify-center items-center mt-1 mb-1 text-rose-500">
                            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
                        </div>
                        <p className="text-gray-600">{product.price}</p>
                        <button className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-400">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-10">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-lg ${
                            currentPage === i + 1
                                ? "bg-rose-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}
