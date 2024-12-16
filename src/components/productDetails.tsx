"use client";

import React, { useState } from "react";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <span>Home</span> &gt; <span>Shop</span> &gt;{" "}
          <span className="font-semibold text-black">Asgaard Sofa</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left - Product Images */}
          <div className="flex flex-col items-center lg:items-start bg-[#F9F1E7] space-y-4 lg:w-1/2">
            <img
              src="/sofa1.png"
              alt="Asgaard Sofa"
              className="rounded-xl w-full max-w-md"
            />
            <div className="flex space-x-3 justify-center lg:justify-start">
              {["/sofa1.png", "/sofa2.png", "/sofa4.png"].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:w-1/2 flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Asgaard Sofa</h1>
            <p className="text-gray-500 text-lg sm:text-xl mb-4">Rs. 250,000.00</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex space-x-1">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                <span className="text-gray-400">&#9734;</span>
              </div>
              <span className="text-gray-500 text-sm ml-2">(5 Customer Reviews)</span>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Options */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Size</h3>
              <div className="flex flex-wrap gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-5 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-all"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Color</h3>
              <div className="flex gap-4">
                {["#000", "#6544B0", "#DAA520"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-8">
              <div className="flex items-center space-x-4 border-2 px-5 py-3 rounded-xl">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="text-xl text-gray-600 hover:text-black"
                >
                  -
                </button>
                <span className="text-lg text-gray-700">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="text-xl text-gray-600 hover:text-black"
                >
                  +
                </button>
              </div>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-all">
                Compare
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-gray-600">
              <p className="text-sm sm:text-base">
                <span className="font-semibold">SKU:</span> SS001
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Category:</span> Sofas
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
