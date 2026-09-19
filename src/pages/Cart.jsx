import { FaMinus, FaPlus, FaTrash, FaShoppingCart, } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart({
                                 cartItems,
                                 removeFromCart,
                                 increaseQuantity,
                                 decreaseQuantity,
                             }) {
    const subtotal = cartItems.reduce((total, item) => {
        const price = Number(
            item.price.replace("PKR ", "").replace(/,/g, "")
        );

        return total + price * item.quantity;
    }, 0);

    const shipping = cartItems.length > 0 ? 200 : 0;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
                <FaShoppingCart className="text-rose-500 text-5xl mb-4" />

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    Your Cart is Empty
                </h2>

                <p className="text-gray-500 mt-2 mb-6 max-w-md">
                    Looks like you haven’t added anything yet. Start exploring
                    our store and add your favorite items to the cart.
                </p>

                <Link
                    to="/products"
                    className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow hover:bg-rose-400 transition"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <h2 className="text-3xl font-bold mb-8">
                Your Cart
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-5">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-xl p-4 sm:p-6 shadow-sm bg-white"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                                {/* Product Image */}
                                <div className="flex justify-center sm:block">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-32 h-32 object-contain rounded-lg"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-semibold">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        {item.price}
                                    </p>

                                    {/* Quantity */}
                                    <div className="flex justify-center sm:justify-start items-center gap-3 mt-4">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 transition"
                                        >
                                            <FaMinus className="text-xs" />
                                        </button>

                                        <span className="font-semibold min-w-[25px] text-center">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-rose-500 text-white hover:bg-rose-400 transition"
                                        >
                                            <FaPlus className="text-xs" />
                                        </button>
                                    </div>
                                </div>

                                {/* Item Total + Remove */}
                                <div className="flex sm:flex-col items-center justify-between gap-4">
                                    <p className="font-semibold text-lg">
                                        PKR{" "}
                                        {(
                                            Number(
                                                item.price
                                                    .replace("PKR ", "")
                                                    .replace(/,/g, "")
                                            ) * item.quantity
                                        ).toLocaleString()}
                                    </p>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                                    >
                                        <FaTrash />
                                        <span className="text-sm">
                                            Remove
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="border rounded-xl p-6 shadow-sm bg-gray-50 lg:sticky lg:top-6">
                        <h3 className="text-xl font-bold mb-6">
                            Order Summary
                        </h3>

                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>
                                    PKR {subtotal.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>
                                    PKR {shipping.toLocaleString()}
                                </span>
                            </div>

                            <div className="border-t pt-4 flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>
                                    PKR {total.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <button
                            disabled
                            className="w-full mt-6 px-5 py-3 bg-rose-500 text-white font-semibold rounded-lg opacity-90 cursor-not-allowed"
                        >
                            Checkout
                        </button>

                        <Link
                            to="/products"
                            className="block text-center mt-4 text-rose-500 font-semibold hover:text-rose-400"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}