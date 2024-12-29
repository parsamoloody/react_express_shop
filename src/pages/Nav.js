import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiUserLight, PiShoppingCartSimpleThin } from "react-icons/pi";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { Link, Outlet } from "react-router-dom";
import ExpressIconComponent from '../components/image/image';
import './nav.css';

const expressIcon = '/assets/img/icon/express-logo.png';

// Define the Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:4000/data', // replace this with your GraphQL endpoint
    cache: new InMemoryCache()
});

// GraphQL query
const GET_JEANS = gql`
  query GetJeans {
    jeans {
      id
      name
    }
  }
`;

const GET_ALL_DATA = gql`
 query GetAllData {
    jeans {
      id
      name
      size
      color
    }
    dresses {
      id
      name
      size
      color
      price
    }
    sales {
      id
      name
      category
      originalPrice
      discountPrice
    }
  }
`

// Custom hook to handle window resizing
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

// Main Navigation Component
const Nav = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <ApolloProvider client={client}>
            <div className="flex items-center justify-between p-4 mt-4 fixed w-full z-40">
                <NavList setIsSearchOpen={setIsSearchOpen} toggleSearch={toggleSearch} />
            </div>
            <div
                className={`flex w-auto overflow-hidden absolute h-screen mt-0 right-0 transition-all duration-500 ease-in-out`}
                style={isSearchOpen ? { width: '100%' } : { width: '0' }}
            >
                <SearchBar setIsSearchOpen={setIsSearchOpen} />
            </div>
        </ApolloProvider>
    );
};

export default Nav;

// User Account Icon
const UserAccount = () => {
    return (
        <div className="grid justify-center items-center cursor-pointer">
            <PiUserLight className="text-black text-2xl" />
        </div>
    );
};

// Cart Icon
const Cart = () => {
    return (
        <div className="grid justify-center items-center cursor-pointer">
            <PiShoppingCartSimpleThin className="text-black text-2xl" />
        </div>
    );
};

// Navigation List Component
const NavList = ({ setIsSearchOpen, toggleSearch }) => {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1058;

    return (
        <nav className="flex justify-between px-4 w-full relative">
            <ExpressIconComponent uri={expressIcon} />
            {isDesktop && <DesktopNav />}
            <div className="flex space-x-6">
                <Search toggleSearch={toggleSearch} />
                <UserAccount />
                <Cart />
            </div>
        </nav>
    );
};

// Search Icon Component
const Search = ({ toggleSearch }) => {
    return (
        <div className="grid justify-center items-center cursor-pointer" onClick={toggleSearch}>
            <CiSearch className="text-black text-2xl" />
        </div>
    );
};

// Desktop Navigation Links
const DesktopNav = () => {
    return (
        <ul className="flex space-x-6 justify-end mr-10 w-full text-black">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/blogs" className="hover:underline">BLOGS</Link></li>
            <li><Link to="/gift-cards" className="hover:underline">GIFT CARDS</Link></li>
            <li><Link to="/sale" className="hover:underline">SALE</Link></li>
            <li><Link to="/what-to-wear" className="hover:underline">WHAT TO WEAR</Link></li>
            <li><Link to="/jeans" className="hover:underline">JEANS</Link></li>
            <li><Link to="/men" className="hover:underline">MEN</Link></li>
            <li><Link to="/women" className="hover:underline">WOMEN</Link></li>
        </ul>
    );
};

// Search Bar Component
const SearchBar = ({ setIsSearchOpen }) => {
    const { loading: jeansLoading, error: jeansError, data: jeansData } = useQuery(GET_JEANS);
    const { loading: allLoading, error: allError, data: allData } = useQuery(GET_ALL_DATA);
    const [query, setQuery] = useState('');

    const handleOutsideClick = () => setIsSearchOpen(false);
    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    // Combine and filter all data for search
    const allItems = allData
        ? [
            ...(allData.jeans || []),
            ...(allData.dresses || []),
            ...(allData.sales || []),
        ]
        : [];

    const filteredData = allItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex w-full z-50 px-2">
            <div className="w-full h-screen" onClick={handleOutsideClick}></div>
            <div className="w-auto h-screen pt-4 px-2 bg-gray-100">
                <div className="flex items-start mt-0 top-0 mx-4 border-b-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="relative py-2 px-4 focus:outline-none"
                        value={query}
                        onChange={handleSearch}
                    />
                    <button className="bg-white relative text-black py-2 px-4 h-10 rounded-r-md">
                        <CiSearch />
                    </button>
                </div>
                <div className="ml-4 mt-3">
                    {jeansLoading || allLoading ? (
                        <p>Loading...</p>
                    ) : jeansError || allError ? (
                        <p>Error: {jeansError?.message || allError?.message}</p>
                    ) : (
                        <div>
                            <ul>
                                {filteredData.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/${item.category || 'items'}/${item.id}`}>
                                            <p>{item.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
