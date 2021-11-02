import About from '../components/About'
import Layout from '../components/layout'
import Proyects from '../components/jobs/Proyects'
import Contact from '../components/Contact'
import Arrow from '../styles/arrow.module.css'
import Navbar from '../components/layout/Navbar'
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import Skills from '../components/Skills'
import { useTheme } from 'next-themes'


export default function Home() {

  const { theme } = useTheme();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x777777,
          backgroundColor: 0x111827,
          points: 9.00,
          maxDistance: 11.00,
          spacing: 16.00
        })
      );
    }

    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
    
  }, [vantaEffect]);
  return (
    <>
      <Navbar/>
      <Layout home >
        <section id="main" ref={vantaRef} className="w-full h-screen m-0 p-0 text-white ">
          <div className="absolute top-1/3 px-1 lg:px-50 xl:px-72 md:px-36 sm:px-16 text-center mx-auto">
            <div>
              <h3 className=" md:text-4xl font-simplex text-3xl pb-3 ">
                Hi, my name is Armany
              </h3>
              <h1 className=" items-middle font-simplex font-bold text-4xl mt-3 md:text-6xl   ">
                I'm a Full Stack Developer
              </h1>
            </div>
          </div>
          <a href="#proyects" className="absolute border-none bottom-10 mx-auto w-full text-center">
            <p className="pb-4 font-simplex">
              Check my work
            </p>
            <div className={Arrow.arrow}></div>
          </a>
        </section>
        <Proyects />
        <About />
        <Skills />
        <Contact />
      </Layout>
    </>
  )
}
