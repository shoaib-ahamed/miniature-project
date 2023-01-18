// import { FiMoon, FiSun } from ' react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';



const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    
  return (
    <div className="flex items-center justify-between bg-mainColor  border-b border-gray-300 py-6  px-4 md:pr-10 md:px-2">
      <Link href="/"><a className="text-2xl text-white pl-5"> 
      Logo
      </a></Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
          <HiMenu className="text-4xl text-white"/>

          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8" 
              onClick={() => setIsNavOpen(false)}
            >
              <AiFillCloseCircle className="text-3xl"/>
            </div>
            <ul className="flex flex-col items-center justify-center gap-6 min-h-screen">
              <li onClick={() => setIsNavOpen(false)} className="transition-all">
                <Link href="/categories/mens-collection" >Mens Collection</Link>
              </li>
              <li onClick={() => setIsNavOpen(false)}>
                <Link href="/categories/jewelery">jewelery</Link>
              </li> 
              <li onClick={() => setIsNavOpen(false)}>
                <Link href="/categories/electronics">electronics</Link>
              </li>  
              <li onClick={() => setIsNavOpen(false)} className>
                <Link href="/categories/womens-collection">womens clothing</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden items-center justify-center lg:flex gap-3">
            <li className="bg-gray-300 rouned rounded-2xl text-mainColor px-5 py-2 hover:text-gray-300 hover:bg-[#5d5555]">
            <Link href="/categories/mens-collection">Mens Collection</Link>
            </li>
            <li className="bg-gray-300 rouned rounded-2xl text-mainColor px-5 py-2 hover:text-gray-300 hover:bg-[#5d5555]">
            <Link href="/categories/womens-collection">Womens Collection</Link>
            </li>
            <li className="bg-gray-300 rouned rounded-2xl text-mainColor px-5 py-2 hover:text-gray-300 hover:bg-[#5d5555]">
                <Link href="/categories/jewelery">Jewelery</Link>
            </li>  
            <li className="bg-gray-300 rouned rounded-2xl text-mainColor px-5 py-2 hover:text-gray-300 hover:bg-[#5d5555]">
            <Link href="/categories/electronics">Electronics</Link>
            </li> 
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        border-radius: 25px;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

  )
}


export default Navbar