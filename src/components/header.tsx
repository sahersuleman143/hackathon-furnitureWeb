"use client"; // Add this line at the very top of your file

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";


// TopHeader Component
export const TopHeader = () => {
  return (
    <div className="bg-green-950 text-yellow-300 flex justify-center items-center p-2">
      <p className="text-3xl">
        Discover stylish and affordable furniture to transform your home effortlessly.{" "}
        
      </p>
      <select className="border border-gray-400 p-1 rounded text-xl text-black">
        <option>English</option>
        <option>Urdu</option>
      </select>
    </div>
  );
};

// Header Component
export const Header = () => {
  const router = useRouter(); // useRouter hook for navigation

  return (
    <div>
      {/* Main Header */}
      <div className="bg-yellow-50 text-black flex justify-between items-center p-4">
        {/* Logo and Furnirio Text */}
        <div className="flex items-center space-x-2">
          <Image src="/images/Logos-05.svg" alt="logo" width={100} height={100} />
          <span className="text-4xl font-bold">Furnirio</span>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:text-yellow-500">Home</li>
            <li className="cursor-pointer hover:text-yellow-500">Shop</li>
            <li className="cursor-pointer hover:text-yellow-500">Blog</li>
            <li className="cursor-pointer hover:text-yellow-500">Contact</li>
          </ul>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-4 text-2xl">
          <FaSearch className="cursor-pointer text-gray-600 hover:text-yellow-500" />
          <FaShoppingCart className="cursor-pointer text-gray-600 hover:text-yellow-500" />
          <FaUser className="cursor-pointer text-gray-600 hover:text-yellow-500" />
          <FaHeart className="cursor-pointer text-gray-600 hover:text-yellow-500" />
        </div>
      </div>

      {/* Picture Below Header */}
      <div className="relative">
        <Image
          src="/images/hero.webp"
          alt="Furniture Showcase"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-10 text-black transform -translate-y-1/2">
          <h1 className="text-5xl font-bold mb-4">Transform Your Home</h1>
          <p className="text-2xl">
            Explore our stunning collection of furniture to match your style.
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-yellow-500 text-black px-6 py-2 mt-4 rounded hover:bg-yellow-600 transition duration-300"
          >
            Explore Shop
          </button>
        </div>
      </div>

      {/* Discover Our New Collection Section */}
      <div className="bg-yellow-100 text-black p-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 font-bold mb-2 uppercase">New Arrival</p>
          <h2 className="text-4xl font-bold mb-4">Discover Our New Collection</h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-yellow-500 text-black px-8 py-3 rounded hover:bg-yellow-600 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
      </div>



  );
};

export default Header;










