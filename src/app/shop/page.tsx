import React from "react";


import Image from 'next/image';

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Wooden Chair',
      price: '$120',
      imageUrl: '/images/wooden-chair.jpg', // Add your image path here
    },
    {
      id: 2,
      name: 'Luxury Sofa',
      price: '$450',
      imageUrl: '/images/luxury-sofa.jpg', // Add your image path here
    },
    {
      id: 3,
      name: 'Modern Table',
      price: '$300',
      imageUrl: '/images/modern-table.jpg', // Add your image path here
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

