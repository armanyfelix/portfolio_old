import Image from 'next/image'
import Link from 'next/link'
import resumen from '../styles/customBtn.module.css'
import me from '../public/img/me.jpeg'



function About() {
    return (
        <section id="about" className="w-full lg:px-52 min-h-screen lg:p-14 md:p-10 p-8 bg-gray-900 ">
            <div className="justify-between items-center xl:mx-20 text-center flex sm:m-2 md:m-3 lg:m-4 xl:m-5 ">
                <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl items-center font-simplex font-bold">About Me</h1>
                <Link href="https://docs.google.com/document/d/1IR4Lu-3_kMMN260gGagu_1yFdUmiHrfAEqbbxYKsUqc/edit?usp=sharing">
                    <button className={resumen.btn}>
                        <span className="font-mono">Resumen</span>
                    </button>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
                <div className=" flex justify-center mb-20 ">
                    <Image src={me} width="320" height="320" alt="me"
                        className=" shadow-2xl  rounded-full" />
                </div>
                <div className="xl:w-2/3">
                    <span className="text-4xl text-indigo-300 font-bold">Hi, i'm Armany</span>
                    <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                        I started in programming when I was 15 years old with c++ in high school and I continue my studies in the career of TIC's engineering, the career don't was what I expected, so I decided to switch to Mechatronics engineering because I also had interests to learn about hardware. I never stop learning about software development by my own, building my own projects, reading and watching tutorials. After trying different technologies like java, python, in the end, what I have enjoyed the most is making thing for the internet with javascript, html and css.
                    </p>
                    <br />
                    <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                        I have more of  2 years  working as a freelancer, I make websites and other freelancers, I offer them scalable and flexible software, so they can improve their service while their business grows.
                    </p>
                    <br />
                    <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                        Now I am applying for my first job in a company as a full stack developer, I like to work with react or nextjs for the frontend and nodejs in the backend although I am always willing to use other frameworks and programming languages.
                    </p>
                    <br />
                    <p className="text-justify lg:text-lg md:text-base text-sm text-white">
                        I really enjoy web development and build useful things to make the internet better and better.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default About;