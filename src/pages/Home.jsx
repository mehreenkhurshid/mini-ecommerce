import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


export default function Home() {
    return (
        <section >
            <div className="bg-gradient-to-r from-rose-100 to-white shadow">
            <div className="grid  md:grid-cols-2 items-center gap-10 py-16 max-w-6xl mx-auto ">
                <div className="space-y-6 text-center md:text-left md:ml-0 ml-2 ">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Shop the <span className="text-rose-500">Latest Trends</span>
                    </h1>
                    <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                        Find the best products at affordable prices. Experience smooth online shopping like never before.
                    </p>
                    <Link
                        to="/products"
                        className="inline-block px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow hover:bg-rose-400 transition"
                    >
                        Shop Now
                    </Link>
                </div>

                <div className="flex justify-center">
                    <img
                        src="../../public/images/ecommerce-graphic.jpg"
                        alt="Shopping illustration"
                        className="w-80 h-80 md:w-[500px] drop-shadow-lg"
                    />
                </div>
            </div>
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
                <div className="w-24 h-1 bg-rose-500 mx-auto mb-10 rounded"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center bg-rose-100 ">
                        <img
                            src="../../public/images/headphones.jpg"
                            alt="Product"
                            className="w-full rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-semibold mt-4">Wireless Headphones</h3>
                        <div className="flex justify-center items-center mt-1 mb-1 text-rose-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <p className="text-gray-600">PKR 3,500</p>
                        <Link
                            to="/products"
                            className="mt-4 inline-block px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-400"
                        >
                            View More
                        </Link>
                    </div>

                    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center bg-rose-100">
                        <img
                            src="../../public/images/watch.jpg"
                            alt="Product"
                            className="w-full rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                        />
                        <h3 className="text-xl font-semibold mt-4">Smart Watch</h3>
                        <div className="flex justify-center items-center mt-1 mb-1 text-rose-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>
                        <p className="text-gray-600">PKR 5,200</p>
                        <Link
                            to="/products"
                            className="mt-4 inline-block px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-400"
                        >
                            View More
                        </Link>
                    </div>

                    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center bg-rose-100">
                        <img
                            src="../../public/images/shoess.jpg"
                            alt="Product"
                            className="w-full rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-semibold mt-4">Sneakers</h3>
                        <div className="flex justify-center items-center mt-1 mb-1 text-rose-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>
                        <p className="text-gray-600">PKR 4,000</p>
                        <Link
                            to="/products"
                            className="mt-4 inline-block px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-400"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-16 bg-rose-50 py-12 shadow-inner">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">


                    <div className="flex justify-center">
                        <img
                            src="../../public/images/laptop.jpg"
                            alt="Featured Laptop"
                            className="w-80 md:w-[400px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                        />
                    </div>


                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">High-Performance Laptop</h2>
                        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                            Boost your productivity with the latest generation laptop featuring sleek design, high speed performance and long battery life.
                        </p>
                        <div className="flex justify-center md:justify-start text-rose-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <p className="text-xl font-semibold text-gray-700">PKR 120,000</p>

                        <Link
                            to="/products"
                            className="inline-block px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow hover:bg-rose-400 transition"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
