import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8 mt-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Download Our App</h3>
                    <p className="text-[10px] mb-4">
                       Download App for Android and ios mobile phones.
                    </p>
                    <div className="flex gap-2">
                        <img
                            src="../../public/images/playstore.webp"
                            alt="Google Play"
                            className="h-10 w-auto cursor-pointer"
                        />
                        <img
                            src="../../public/images/appstore.webp"
                            alt="App Store"
                            className="h-10 w-auto cursor-pointer"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-2"> <span className="text-rose-500">MK</span>Store</h3>
                    <p className="text-[10px]">
                        MKStore is your one-stop destination for the latest trends in fashion, gadgets, and lifestyle.
                        We aim to provide quality products with smooth shopping experience.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Useful Links</h3>
                    <ul className="space-y-0.5 text-[10px]">
                        <li><a href="/" className="hover:text-rose-500">Home</a></li>
                        <li><a href="/products" className="hover:text-rose-500">Products</a></li>
                        <li><a href="/cart" className="hover:text-rose-500">Cart</a></li>
                        <li><a href="/contact" className="hover:text-rose-500">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-rose-500"><FaFacebook /></a>
                        <a href="#" className="hover:text-rose-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-rose-500"><FaTwitter /></a>
                        <a href="#" className="hover:text-rose-500"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MKStore. All rights reserved.
            </div>
        </footer>
    );
}
