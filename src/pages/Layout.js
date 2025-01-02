import { React, useState, useEffect } from "react";
import Nav from "../components/Nav";
import "../output.css";

const style = {
    video: {
        objectFit: "contain",
        overflowClipMargin: "content-box",
        overflow: "clip",
    }
}

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
                <Nav />
                {/* Main content */}
                <main className="w-full">
                    <section className="pt-[4.52rem]">
                    <NavEvent />
                <div className=" py-2 sm:w-full lg:w-full lg:h-screen">
                <video autoPlay muted loop name="media"
                className="w-full"
                style={style.video}>
                    <source 
                        src={`/assets/videos/${isDesktop ? '1227-hp-mm-dt.webm' : '1227-hp-mm-mb-2.webm'}`}
                        type="video/mp4" 
                    />
                </video>
                </div>
                    <NavEvent /> 
            </section>
                </main>
            </div>
            {/* Section */}
           
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