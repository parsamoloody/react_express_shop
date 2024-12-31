import React, { useState, useEffect, useMemo } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiUserLight, PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { data, Link } from "react-router-dom";
import ExpressIconComponent from '../components/image/image';
import client from '../components/api/apolloClient';
import debounce from 'lodash.debounce';
import './nav.css';

const expressIcon = '/assets/img/icon/express-logo.png';

const GET_JEANS = gql`
   query Jeans {
    jeans {
      id
      name
    }
  }
`;

const GET_DRESSES = gql`
 query Dresses {
    dresses {
      id
      name
    }
  }`

const GET_SALE = gql`
 query sale {
    sale {
      id
      item
    }
  }
`

const GET_JACKETS = gql`
 query jackets {
 jackets {
      id
      name
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleSearch = () => {
      if (!isSearchOpen) setIsMenuOpen(false); // Close menu if search is opening
      setIsSearchOpen((prev) => !prev);
    };
    
    const toggleMenu = () => {
      if (!isMenuOpen) setIsSearchOpen(false); // Close search if menu is opening
      setIsMenuOpen((prev) => !prev);
    };
    


    return (
        <ApolloProvider client={client}>
            <div>
                <div className="flex items-center justify-between p-4 mt-4 lg:mt-0 w-full z-40">
                    <NavList toggleSearch={toggleSearch} setIsMenuOpen={toggleMenu} />
                </div>
                <div
                    className={`flex w-auto overflow-hidden absolute h-screen mt- right-0 transition-all duration-1000 ease-in-out`}
                    style={isSearchOpen ? { width: '100%' } : { width: '0' }}
                >
                    <SearchBar toggleSearch={toggleSearch} />
                </div>
                <div
                    className={`flex w-auto overflow-hidden absolute h-screen mt- right-0 transition-all duration-1000 ease-in-out`}
                    style={isMenuOpen ? { width: '100%' } : { width: '0' }}
                >
                    <DesktopNav toggleMenu={toggleMenu} />
                </div>
            </div>
        </ApolloProvider>
    );
};

export default Nav;

// User Account Icon
const UserAccount = () => (
    <div className="grid justify-center items-center  cursor-pointer">
        <PiUserLight className="text-black text-2xl" />
    </div>
);

// Cart Icon
const Cart = () => (
    <div className="grid justify-center items-center cursor-pointer">
        <PiShoppingCartSimpleThin className="text-black text-2xl" />
    </div>
);

// Navigation List Component
const NavList = ({ toggleSearch, setIsMenuOpen }) => {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1024;

    return (
        <nav className="flex justify-between px-2 sm:px-24 lg:px-2 lg:justify-between xl:px-4 w-full lg:w-full lg:h-20 relative">
            <div className="w-auto hidden h-full lg:flex justify-center items-center">
                <div className='flex justify-center items-center'>
                    <ExpressIconComponent uri={expressIcon} />
                </div>
            </div>
            <div className='w-full hidden lg:block'>
            {isDesktop && <DesktopNav />}
            </div>
            <div className="flex justify-between lg:justify-start w-full lg:w-auto space-x-6 lg:space-x-6">
                <ul className='flex space-x-6 justify-between items-center lg:space-x-6 xl:space-x-8 lg:justify-between xl:mr-10 w-full text-black'>
                    <li className=''>
                        <Search toggleSearch={toggleSearch} />
                    </li>
                    <li>
                        <UserAccount />
                    </li>
                    <li className='w-28 lg:hidden'>
                        <ExpressIconComponent uri={expressIcon} />
                    </li>

                    <li>
                        <Cart />
                    </li>
                    <li
                    onMouseDown={setIsMenuOpen}>
                        <CiMenuBurger className="text-black text-2xl lg:hidden" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Search Icon Component
const Search = ({ toggleSearch }) => (
    <div className="grid justify-center items-center cursor-pointer" onMouseEnter={toggleSearch}>
        <CiSearch className="text-black text-2xl" />
    </div>
);

// Desktop Navigation Links
const DesktopNav = ({ toggleMenu }) => (
    <div className="flex w-full justify-center z-50 px-2">
        <div className="w-full lg:w-0 h-screen lg:h-10" onMouseDown={toggleMenu} ></div>
        <div className="w-auto h-screen lg:h-20 pt-4 lg:bg-transparent bg-gray-100">
          
            <div className="ml-4 mt-3">
                <div>
                    <ul className="grid grid-cols-1 leading-8 lg:flex space-x-6 justify-center w-48 lg:w-full text-black">
                        <li><Link to="/" className="hover:underline">HOME</Link></li>
                        <li><Link to="/blogs" className="hover:underline">BLOGS</Link></li>
                        <li><Link to="/gift-cards" className="hover:underline">GIFT CARDS</Link></li>
                        <li><Link to="/sale" className="hover:underline">SALE</Link></li>
                        <li><Link to="/what-to-wear" className="hover:underline">WHAT TO WEAR</Link></li>
                        <li><Link to="/jeans" className="hover:underline">JEANS</Link></li>
                        <li><Link to="/men" className="hover:underline">MEN</Link></li>
                        <li><Link to="/women" className="hover:underline">WOMEN</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

// Search Bar Component
const SearchBar = ({ toggleSearch }) => {
    const { data: jeansData, loading: jeansLoading, error: jeansError } = useQuery(GET_JEANS);
    const { data: dressesData, loading: dressesLoading, error: dressesError } = useQuery(GET_DRESSES);
    const { data: saleData, loading: saleLoading, error: saleError } = useQuery(GET_SALE);

    if (jeansLoading || dressesLoading || saleLoading) {
        return <div>Loading...</div>;
    }

    if (jeansError || dressesError || saleError) {
        return <div>Error fetching data.</div>;
    }

    return (
        <div className="flex w-full z-50 px-2">
            <div className="w-full h-screen" onMouseEnter={toggleSearch}>
            </div>
            <div className="w-auto h-screen pt-4 bg-gray-100">
                <div className="flex items-start mt-0 top-0 mx-4 border-b-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="relative py-2 px-4 focus:outline-none"
                    />
                    <button className="bg-white relative text-black py-2 px-4 h-10 rounded-r-md">
                        <CiSearch />
                    </button>
                </div>
                <div className="ml-4 mt-3">
                    <div>
                        <ul>
                            {jeansData?.jeans?.map((jean) => (
                                <li key={jean.id}>{jean.name}</li>
                            ))}
                        </ul>
                        <ul>
                            {dressesData?.dresses?.map((dress) => (
                                <li key={dress.id}>{dress.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
