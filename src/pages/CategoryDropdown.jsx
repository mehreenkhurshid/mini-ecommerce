import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CategoryDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All Categories");

    const categories = ["All Categories", "Electronics", "Fashion", "Footwear"];

    return (
        <div className="relative w-full md:w-1/4">
            {/* Dropdown button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full px-4 py-2 bg-white border border-rose-300 rounded-xl shadow-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
                {selected}
                <FaChevronDown
                    className={`ml-2 text-rose-500 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full bg-white border border-rose-300 rounded-xl shadow-lg z-10">
                    {categories.map((cat, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(cat);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2 cursor-pointer transition ${
                                selected === cat
                                    ? "bg-rose-500 text-white"
                                    : "hover:bg-rose-100 text-gray-700"
                            }`}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
