export default function Cart() {
    const cartItems = [];

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
                {/*<img*/}
                {/*    src="images/empty-cart.png"*/}
                {/*    alt="Empty Cart"*/}
                {/*    className="w-40 h-40 md:w-56 md:h-56 mb-6"*/}
                {/*/>*/}

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    Your Cart is Empty
                </h2>

                <p className="text-gray-500 mt-2 mb-6 max-w-md">
                    Looks like you haven’t added anything yet. Start exploring our store and
                    add your favorite items to the cart.
                </p>

                <a
                    href="/products"
                    className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow hover:bg-rose-400 transition"
                >
                    Start Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        </div>
    );
}
