import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../output.css";

const style = {
    video: {
        objectFit: "contain",
        overflowClipMargin: "content-box",
        overflow: "clip",
    }
}

const categories = [
    {
        title: "FITS JUST IN",
        category: "jeans",
        path: "w-jeans-dt",
        products: [
            {
                name: "Slim Fit Jeans",
                category: "w-jeans-dt",
                image: "/assets/img/products/jeans1.jpg",
                description: "A perfect slim fit for everyday wear.",
                price: 49.99,
            },
            {
                name: "Skinny Fit Jeans",
                category: "w-jeans-dt",
                image: "/assets/img/products/jeans2.jpg",
                description: "Stretchy and comfortable for all-day wear.",
                price: 54.99,
            },
            {
                name: "High-Waisted Jeans",
                category: "w-jeans-dt",
                image: "/assets/img/products/jeans3.jpg",
                description: "A flattering high-waist fit for every occasion.",
                price: 59.99,
            }
        ]
    },
    {
        title: "ALL-NEW DENIM",
        category: "jeans",
        url: "man-clothing/shirts",
        path: "m-jeans-dt",
        products: [
            {
                name: "Denim Jacket",
                category: "m-jeans-dt",
                image: "/assets/img/products/jacket1.jpg",
                description: "A stylish jacket to match any outfit.",
                price: 69.99,
            },
            {
                name: "Relaxed Fit Jeans",
                category: "m-jeans-dt",
                image: "/assets/img/products/jeans4.jpg",
                description: "Comfortable and casual jeans for every day.",
                price: 59.99,
            },
            {
                name: "Straight-Leg Jeans",
                category: "m-jeans-dt",
                image: "/assets/img/products/jeans5.jpg",
                description: "Classic straight-leg style with a modern fit.",
                price: 64.99,
            }
        ]
    },
    {
        title: "BRIGHT & FRESH",
        category: "sweaters",
        path: "w-sweaters-dt",
        products: [
            {
                name: "Cozy Sweater",
                category: "w-sweaters-dt",
                image: "/assets/img/products/sweater1.jpg",
                description: "Stay warm and stylish with this sweater.",
                price: 39.99,
            },
            {
                name: "Chunky Knit Sweater",
                category: "w-sweaters-dt",
                image: "/assets/img/products/sweater2.jpg",
                description: "A thick and cozy sweater for colder months.",
                price: 49.99,
            },
            {
                name: "Lightweight Sweater",
                category: "w-sweaters-dt",
                image: "/assets/img/products/sweater3.jpg",
                description: "Perfect for layering with a relaxed fit.",
                price: 34.99,
            }
        ]
    },
    {
        title: "MADE TO LAYER",
        category: "outerwear",
        path: "m-outerwear-dt",
        products: [
            {
                name: "Puffer Jacket",
                category: "m-outerwear-dt",
                image: "/assets/img/products/jacket2.jpg",
                description: "Warm and stylish for the winter season.",
                price: 89.99,
            },
            {
                name: "Leather Jacket",
                category: "m-outerwear-dt",
                image: "/assets/img/products/jacket3.jpg",
                description: "A timeless leather jacket for every occasion.",
                price: 119.99,
            },
            {
                name: "Rain Jacket",
                category: "m-outerwear-dt",
                image: "/assets/img/products/jacket4.jpg",
                description: "Stay dry and stylish with this lightweight rain jacket.",
                price: 59.99,
            }
        ]
    },
    {
        title: "KEEP IT COZY",
        category: "matching sets",
        path: "w-matching-sets-dt",
        products: [
            {
                name: "Sweater and Jogger Set",
                category: "w-matching-sets-dt",
                image: "/assets/img/products/set1.jpg",
                description: "Perfect set for lounging and staying cozy.",
                price: 64.99,
            },
            {
                name: "Cozy Hoodie and Leggings Set",
                category: "w-matching-sets-dt",
                image: "/assets/img/products/set2.jpg",
                description: "Stay cozy and stylish with this matching set.",
                price: 59.99,
            },
            {
                name: "Fleece Pullover and Pants Set",
                category: "w-matching-sets-dt",
                image: "/assets/img/products/set3.jpg",
                description: "Warm fleece set for colder weather.",
                price: 49.99,
            }
        ]
    },
    {
        title: "POLISHED CASUAL",
        category: "sweatshirts",
        path: "m-sweatshirts-dt",
        products: [
            {
                name: "Basic Sweatshirt",
                category: "m-sweatshirts-dt",
                image: "/assets/img/products/sweatshirt1.jpg",
                description: "A simple, classic sweatshirt for everyday wear.",
                price: 39.99,
            },
            {
                name: "Graphic Sweatshirt",
                category: "m-sweatshirts-dt",
                image: "/assets/img/products/sweatshirt2.jpg",
                description: "Stylish graphic sweatshirt for a modern look.",
                price: 44.99,
            },
            {
                name: "Hooded Sweatshirt",
                category: "m-sweatshirts-dt",
                image: "/assets/img/products/sweatshirt3.jpg",
                description: "Comfortable hoodie to keep you warm and casual.",
                price: 49.99,
            }
        ]
    }
];

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

export default function Layout() {

    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1024;

    return (
        <>
            <div className="">
                {/* Main content */}
                <main className="w-full">
                    <section className="pt-[4.52rem]">
                        <NavEvent />
                        <div className=" py-2 sm:w-full lg:w-full lg:h-screen">
                            <video
                                autoPlay
                                muted
                                loop
                                name="media"
                                key={isDesktop ? 'desktop-video' : 'mobile-video'}
                                className="w-full"
                                style={style.video}
                            >
                                <source
                                    src={`/assets/videos/${isDesktop ? '1227-hp-mm-dt.webm' : '1227-hp-mm-mb-2.webm'}`}
                                    type="video/mp4"
                                />
                            </video>
                            <div className="absolute w-full flex justify-center items-center top-[750px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="grid grid-cols-1 grid-row-2 gap-y-4 lg:gap-y-8">
                                    <p className="text-white text-4xl font-bold lg:text-4xl">

                                        NEW YEAR, <br />
                                        NEW LOOK
                                    </p>
                                    <div className="grid grid-cols-2 grid-rows-1 w-80 justify-start items-center bg-green-4000">
                                        <div className="flex justify-center items-center">
                                            <button className="bg-white text-black p-3 w-36">WOMEN'S TOPS</button>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <button className="bg-white text-black p-3 w-36">MEN'S SHIRTS</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <DiscountEvent />
                    </section>
                    <Categories />
                </main>
            </div>

        </>
    );
}

const NavEvent = () => {
    return (
        <div>
            <div className='bg-black grid grid-cols-1 grid-rows-2 gap-y-6 py-3 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-4 lg:gap-y-0 lg:py-6'>
                <div className='text-center leading-5 text-white'>
                    <h3 className='text-lg lg:text-2xl font-bold'>$29.90 ALL SWEATERS</h3>
                    <p className='text-gray-500 lg:text-lg'>Exclusions & Details</p>
                    <b className="text-md" >WOMEN MEN</b>
                </div>
                <div className='text-center leading-5 text-white'>
                    <h3 className='test-lg lg:text-2xl font-bold'>$29.90 ALL SWEATERS</h3>
                    <p className='text-gray-500 lg:text-lg'>Exclusions & Details</p>
                    <b className="text-md" >WOMEN MEN</b>
                </div>
            </div>
        </div>
    );
}

const DiscountEvent = () => {
    return (
        <div>
            <div className='bg-black grid grid-cols-1 grid-rows-2 gap-y-6 py-3 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-4 lg:gap-y-0 lg:py-6'>
                <div className='text-center leading-5 text-white'>
                    <h3 className='text-3xl lg:text-3xl font-bold'>70% OFF SELECT STYLES
                    </h3>
                </div>
                <div className='text-center leading-5 text-white'>
                    <h3 className='test-lg lg:text-2xl font-bold'>Exclusions & Details</h3>
                    <b className="text-md text-gray-200" >WOMEN MEN</b>
                </div>
            </div>
        </div>
    )
}

const Categories = () => {
    return (
        <section>
            <div>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {
                        categories.map((category, index) => (
                            <li key={index} className="relative">
                                <Link to={`/${category.url}`} className="hover:underline">
                                    <img src={`/assets/img/categories/${category.path}.avif`} alt={category.name} />
                                </Link>

                                <div className="absolute left-1/2 transform -mt-32 -translate-x-1/2 grid items-center gap-y-4 w-auto">
                                    <h1 className="text-2xl sm:text-3xl text-white font-bold w-full">{category.title}</h1>
                                    <button className="p-2 font-mono bg-white text-center tracking-wide sm:text-[1.35rem]">
                                        {category.category}
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </section>
    )
}