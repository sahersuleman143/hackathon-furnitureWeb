'use client'; // This directive should be at the top

import { TopHeader, Header } from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from 'next/link';
// Product data for the shop
const products = [
  {
    id: '1',
    name: 'Stylish Cafe Chair',
    description: 'Comfortable and modern cafe chair.',
    price: 2500000,
    discount: '-30%',
    image: '/images/for1.png',
  },
  {
    id: '2',
    name: 'Luxury Big Sofa',
    description: 'Elegant sofa for your living room.',
    price: 3500000,
    discount: '-30%',
    image: '/images/3img.jpg',
  },
  {
    id: '3',
    name: 'Outdoor Bar Table and Stool',
    description: 'Perfect for outdoor spaces.',
    price: 7000000,
    discount: '-50%',
    image: '/images/for3.png',
  },
  {
    id: '4',
    name: 'Modern Coffee Table',
    description: 'Sleek design for modern living rooms.',
    price: 1500000,
    discount: '-10%',
    image: '/images/for4.png',
  },
  {
    id: '5',
    name: 'Elegant Armchair',
    description: 'Classic armchair for any space.',
    price: 1800000,
    discount: '-20%',
    image: '/images/for5.png',
  },
  {
    id: '6',
    name: 'Stylish Bed Frame',
    description: 'Perfect blend of comfort and design.',
    price: 4200000,
    discount: '-15%',
    image: '/images/for6.png',
  },
  {
    id: '7',
    name: 'Wooden Dining Table',
    description: 'Natural wood finish for your dining area.',
    price: 3000000,
    discount: '-25%',
    image: '/images/for7.png',
  },
  {
    id: '8',
    name: 'Sofa Set for Living Room',
    description: 'Spacious and comfortable for your home.',
    price: 5000000,
    discount: '-40%',
    image: '/images/for8.png',
  },
];

const Home = () => {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push("/shop"); // Navigates to the shop page
  };

  const handleExploreMoreClick = () => {
    router.push("/shop"); // Navigates to the shop page on Explore More click
  };

  return (
    <div>
      {/* Top Header */}
      <TopHeader />
      
      {/* Main Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/images/Mask Group (1).jpg"
          alt="Furniture Image"
          width={1920}
          height={600}
          className="w-full object-cover"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
        </div>
      </div>

      {/* Browse The Range Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Browse The Range</h2>
          <p className="text-gray-500 mb-8">Explore categories to suit your needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-lg rounded-md">
              <Image
                src="/images/midpic.png"
                alt="Dining"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Dining</h3>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-md">
              <Image
                src="/images/living-room.jpg"
                alt="Living"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Living</h3>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-md">
              <Image
                src="/images/bedroom.jpg"
                alt="Bedroom"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Bedroom</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Products</h2>
          <p className="text-gray-500 mb-8">Discover our full range of stylish furniture designed to fit your home.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-lg rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-lg">Rp {product.price.toLocaleString()}</p>
                <p className="text-red-500 font-bold">{product.discount} New</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
          <div className="mt-8">
            <button
              onClick={handleExploreMoreClick}
              className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* 50+ Beautiful Rooms Inspirations */}
      <section className="py-3 left-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left text-lg leading-tight">
            <h2 className="text-4xl text-left  text-yellow-500 font-bold">50+ Beautiful Rooms Inspirations</h2>
            <p className="text-gray-500 mt-2">Our designers have created beautiful room prototypes to inspire you.</p>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4">
              <div className="min-w-[300px]">
                <Image
                  src="/images/fifth1.png"
                  alt="Bedroom Inspiration"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 font-semibold">Bedroom Inspiration</p>
              </div>
              <div className="min-w-[300px]">
                <Image
                  src="/images/fifth2.png"
                  alt="Living Room Inspiration"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 font-semibold">Living Room Inspiration</p>
              </div>
              <div className="min-w-[300px]">
                <Image
                  src="/images/for7.png"
                  alt="Dining Room Inspiration"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 font-semibold">Dining Room Inspiration</p>
              </div>
              <div className="min-w-[300px]">
                <Image
                  src="/images/for8.png"
                  alt="Minimalist Design"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 font-semibold">Minimalist Design</p>
              </div>
            </div>
            {/* Arrow Navigation */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
              aria-label="Scroll Left"
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
              aria-label="Scroll Right"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
{/* Furnirio Section */}
<section className="py-12 bg-gray-100">
  <div className="container max-w-6xl mx-auto px-4">
    {/* Section Title and Text */}
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Transform Your Space</h2>
      <p className="text-lg text-gray-600">
        Discover endless possibilities with our modern furniture.
      </p>
    </div>
  </div>
</section>

{/* Large Image Section */}
<section className="py-12">
  <div className="container mx-auto px-4">
    <div className="flex justify-center">
      <img
        src="/images/Share.png" // Replace with your actual image path
        alt="Furnirio Showcase"
        className="w-full h-auto rounded-lg shadow-lg" // For full-width image
      />
    </div>
  </div>
</section>
      </div>
     
  );
};

export default Home;





