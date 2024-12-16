import React from "react";

const OurProducts = () => {
  // Array of product images and details
  const products = [
    { id: 1, image: "/product1.jpg", name: "Product 1" },
    { id: 2, image: "/product2.jpg", name: "Product 2" },
    { id: 3, image: "/product3.jpg", name: "Product 3" },
    { id: 4, image: "/product4.jpg", name: "Product 4" },
    { id: 5, image: "/product5.jpg", name: "Product 5" },
    { id: 6, image: "/product6.jpg", name: "Product 6" },
    { id: 7, image: "/product7.jpg", name: "Product 7" },
    { id: 8, image: "/product8.jpg", name: "Product 8" },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
