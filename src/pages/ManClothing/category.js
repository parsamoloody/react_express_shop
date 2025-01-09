import React from 'react';
import { Link } from 'react-router-dom';

const products = {
  jeans: {
    image: {
      url: '02-hp-m-mb',
      extension: '.avif',
      type: 'image/jpeg'
    },
    title: 'Denim Jeans',
    url: 'jeans',
    price: 29.99,
    rating: 4.5 
  },
  shirts: {
    image: {
      url: '01-hp-m-mb',
      extension: '.avif',
      type: 'image/jpeg'
    },
    title: 'Classic Shirt',
    url: 'shirts',
    price: 19.99,
    rating: 4.2
  },
  sweaters: {
    image: {
      url: '03-hp-m-mb',
      extension: '.avif',
      type: 'image/jpeg'
    },
    title: 'Cozy Sweater',
    url: 'sweaters',
    price: 39.99,
    rating: 4.7
  },
  suits: {
    image: {
      url: '04-hp-m-mb',
      extension: '.avif',
      type: 'image/jpeg'
    },
    title: 'Business Suit',
    url: 'suits',
    price: 149.99,
    rating: 4.8
  },
  outerwear: {
    image: {
      url: '05-hp-m-mb',
      extension: '.avif',
      type: 'image/jpeg'
    },
    title: 'Warm Outerwear',
    url: 'outerwear',
    price: 89.99,
    rating: 4.6
  }
};

const ManClothing = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Man's Clothing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {Object.keys(products).map((key) => {
          const product = products[key];
          return (
            <div key={key} className="hover:border-gray-300 border-white border">
              <img
                className="w-full h-auto mb-4 rounded"
                src={`assets/img/categories/man-clothing/2025_7_1_5_29_52/${product.image.url}${product.image.extension}`}
                alt={product.url}
              />
             <div className='px-2 pb-2'>
             <Link to={`${product.url}`}><h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{product.title}</h3></Link>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManClothing;
