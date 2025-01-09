import React from 'react';
import { useData } from '../../../hooks/useData';

const ManJeansCaegories = () => {
  const { loading, error, data } = useData();

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error.message}</div>;
  }

  const { theMan } = data;
  const man = theMan[0]?.man[0];

  if (!man) {
    return <div className="text-center text-lg">No data available</div>;
  }

  return (
    <div className="p-6 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{man.categoryInformation[0]?.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{man.categoryInformation[0]?.description}</p>

      <div>

        {man.sweaters && man.sweaters.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jeans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {man.sweaters[0]?.products.map((product, index) => (
                <div key={index} className="bg-white p-4 duration-300">
                  {product.image && product.image[0]?.src && (
                      <img
                      className="w-full h-auto mb-4"
                      src={`/assets/img/categories/man-clothing/shirts/${product.image[0]?.src}.${product.image[0]?.extension}`}
                      alt={product.image[0]?.alt}
                      />
                    )}
                    <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                    <p className="text-sm text-yellow-500">Rating: {product.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManJeansCaegories;
