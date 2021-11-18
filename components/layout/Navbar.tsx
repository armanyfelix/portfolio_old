import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

function Navbar() {

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("top").style.top = "0";
        document.getElementById("top").style.transition = "top 0.6s";
      } else {
        document.getElementById("top").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])
  const [Open, setOpen] = useState(false);

  return (
    <>
      <header id="top" className="w-full flex flex-col z-50 fixed top-0 shadow-xl backdrop-filter backdrop-blur backdrop-brightness-90  bg-opacity-10 ">
        <nav id="site-menu" className="flex flex-col z-50 sm:flex-row w-full justify-between items-center lg:px-28 md:px-16 px-6 py-2">
          <div className="w-full sm:w-auto self-start  sm:self-center w flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <Link href="/">
              <a className="no-underline flex items-center">
                <div className="w-8 h-8 rounded-full hover:bg-gradient-to-tr from-blue-600 via-indigo-700  to-purple-700 shadow-earth hover:animate-pulse "></div>
              </a>
            </Link>
            <button id="menuBtn" aria-label="menu" className={`hamburger block sm:hidden focus:outline-none ${Open ? "open" : ""}`} onClick={() => setOpen(!Open)}>
              <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <div className={`w-full sm:w-auto  font-bold text-white self-end sm:space-x-6 sm:self-center sm:flex flex-col sm:flex-row items-center    
                        ${Open ? "flex " : "hidden "}`}>
            <a onClick={() => setOpen(false)} href="#proyects" className="text-center font-simplex text-xl items-center hover:text-blue-400">
              <span className="font-bold font-simplex">Proyects</span>
            </a>
            <a onClick={() => setOpen(false)} href="#about" className=" text-center text-xl font-simplex items-center hover:text-indigo-400">
              <span className="font-simplex font-bold">About</span>
            </a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-center text-xl font-simplex items-center hover:text-purple-400">
              <span className="font-simplex font-bold">Contact</span>
            </a>
          </div>
          {/* <ThemeIcon /> */}

        </nav>
        <div onClick={() => setOpen(false)}
          className={`${Open ? 'fixed' : 'hidden'} top-0 left-0 w-full h-screen bg-black opacity-50 z-40`} >
        </div>
      </header>
      <style jsx>{`
                /* HAMBURGER MENU */
                .hamburger {
                cursor: pointer;
                width: 48px;
                height: 48px;
                transition: all 0.25s;
                }
                .hamburger__top-bun,
                .hamburger__bottom-bun {
                content: '';
                position: absolute;
                width: 24px;
                height: 2px;
                background: #fff;
                transform: rotate(0);
                transition: all 0.5s;
                }
                .hamburger:hover [className*="-bun"] {
                background: #333;
                }
                .hamburger__top-bun {
                transform: translateY(-5px);
                }   
                .hamburger__bottom-bun {
                transform: translateY(3px);
                }  
                .open {
                transform: rotate(90deg);
                transform: translateY(-1px);
                } 
                .open .hamburger__top-bun {
                transform:
                    rotate(45deg)
                    translateY(0px);
                }    
                .open .hamburger__bottom-bun {
                transform:
                    rotate(-45deg)
                    translateY(0px);
                }
            `}</style>
    </>
  )
}

// const ThemeIcon = () => {
//   const { theme, setTheme } = useTheme();
//   const router = useRouter()

//   const handleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//     router.reload();
//   };
//   return (
//     <button onClick={() => handleTheme()} className=" outline-none border-none decoration-slice">
//       {theme === 'light' ? (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-tl from-red-600 via-red-60  to-yellow-600 shadow-sun hover:animate-pulse"></div>
//       ) : (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-gray-600  to-gray-700 shadow-moon hover:animate-pulse"></div>
//       )}
//     </button>
//   );
// };

export default Navbar;