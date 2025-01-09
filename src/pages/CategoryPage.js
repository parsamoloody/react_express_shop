import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

// Example category products data
const categories = [
    {
        men: [
            {

                categoryInformation: [
                    {
                        title: "men clothing",
                        path: "men-clothing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus ut nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices.",
                        image: [
                            {
                                src: "m-jeans-nav-2-skinny-dt",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Slim Fit Jeans"
                            }
                        ]
                    },
                ],
                shirts: [
                    {
                        imaage: [
                            {
                                src: "01-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "shirt"
                            },
                        ],
                        products: [
                            {
                                title: "Plaid Cotton Stretch Flannel Shirt.",
                                image: [
                                    {
                                        src: "0020_01768689_0631_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Slim Fit Jeans"
                                    }
                                ],
                                description: "A perfect slim fit for everyday wear.",
                                price: 68.00,
                                isDiscount: true,
                                discountRate: 48,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Plaid Pocket Cotton Stretch Shirt.",
                                image: [
                                    {
                                        src: "0020_01768555_2237_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Solid Short Sleeve 1MX Dress Shirt.",
                                image: [
                                    {
                                        src: "0020_01698363_0001_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Mini Floral Wrinkle-Resistant Everyday Performance Dress Shirt",
                                image: [
                                    {
                                        src: "0020_01768555_2237_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Slim Mini Floral Wrinkle-Resistant Everyday Performance Dress Shirt"
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                                title: "Slim Gradient Plaid Wrinkle-Resistant Everyday Performance Dress Shirt",
                                image: [
                                    {
                                        src: "0020_06030300_2237_a001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 78.00,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Solid Stretch Modern Tech 1MX Dress Shirt",
                                image: [
                                    {
                                        src: "0020_00303473_2092_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 78.00,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                                title: "Extra Slim Solid Stretch 1MX Dress Shirt.",
                                image: [
                                    {
                                        src: "0020_06039140_0001_4_fb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                            }
                        ]
                    },
                ],
                jeans: [
                    {
                        imaage: [
                            {
                                src: "03-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "shirt"
                            },
                        ],
                        products: [
                            {
                                title: "Loose Gray Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918224_0098_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Brown Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918226_3479_c002",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918232_0019_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918255_0018_a001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918243_0020_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918234_2707_f002",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918227_3471_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918227_3471_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            }
                        ]
                    }
                ],
                sweaters: [
                    {
                        image: [
                            {
                                src: "0024_00918227_3471_c001",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                suits: [
                    {
                        image: [
                            {
                                src: "04-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                outerwear: [
                    {
                        image: [
                            {
                                src: "05-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ],
                    }
                ]

            }
        ],
        women: [
            {
                categoryInformation: [
                    {
                        title: "women clothing",
                        path: "women-clothing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus ut nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices.",
                        image: [
                            {
                                src: "m-jeans-nav-2-skinny-dt",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Slim Fit Jeans"
                            }
                        ]
                    },
                ],
                jeans: [
                    {
                        image: [
                            {
                                src: "01-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                shirts: [
                    {
                        image: [
                            {
                                src: "05-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ]

            }
        ]
    }
]


// Function to get products based on category
const getProductsByCategory = (categoryName) => {
    return categories.filter((category) => category.category === categoryName);
};

const CategoryPage = () => {
    const { categoryName } = useParams();

    // Fetch products for the specific category based on categoryName
    const products = getProductsByCategory(categoryName);

    return (
        <>
            <Nav />
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Products in {categoryName}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.length > 0 ? (
                        products[0].products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={`/assets/img/categories/${product.category}.avif`}
                                    alt={product.name}
                                    className="w-full h-[24rem] object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-green-600 font-medium">Price: ${product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No products available in this category.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default CategoryPage;