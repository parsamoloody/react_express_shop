import { useParams } from 'react-router-dom';
import { useData } from '../../hooks/useData';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { data, loading, error } = useData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Check if data and products exist
  const products = data?.shirts?.[0]?.products || [];

  console.log("product", products.length > 0 ? products[0].image[0] : "No products");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Products in {categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {product.title}
              </h2>
              <img
                src={`/assets/img/categories/man-clothing/${categoryName}.avif`}
                className="w-full h-auto object-cover rounded-md mb-4"
              />    
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 font-medium">
                Price: ${product.price}
              </p>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
