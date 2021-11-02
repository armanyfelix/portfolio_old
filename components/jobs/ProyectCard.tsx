import Image from "next/image"
import Link from "next/link"
import marquee from "../../styles/marquee.module.css"
import github from '../../public/icons/github.svg'
import link from '../../public/icons/link.svg'

interface Props {
    source: string,
    url: string,
    image: string,
    name: string,
    description: string,
    tecs: string
}

function ProyectCard({ source, url, image, name, description, tecs }: Props) {
    return (
        <div className="sm:m-2 md:m-3 lg:m-4 xl:m-5 mt-10 relative rounded-md bg-gray-900 shadow-2xl">
            <div className="relative box-border ">
                <Image src={image} alt="page preview" width="600" height="337.5" className="rounded-t shadow-2xl" />
                <div className="absolute top-0 box-border bottom-0 left-0 right-0 rounded-t transition duration-700 ease-in-out 
                backdrop-filter mb-[0.3rem]  backdrop-blur bg-opacity-10 backdrop-brightness-75 bg-gray-900 opacity-0 hover:opacity-100">
                    <div className=" text-white flex flex-wrap content-center h-full p-2 text-center">
                        <p >{description}</p>
                        <div className="overflow-hidden pt-3">
                            <div className={marquee.marquee}>
                                <span>{tecs}</span>
                                <span>{tecs}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-b px-1 flex w-full  justify-between">
                <div className="mt-0.5 md:mt-0">
                    <h1 className="font-mono md:text-lg text-sm text-indigo-50">{name}</h1>

                </div>
                <div className="">
                    <Link href={source}>
                        <a className="  duration-300 ease-in-out hover:saturate-100 hover:scale-110 saturate-0 brightness-200 hover:brightness-100">
                            <Image src={github} width="30" height="30" alt="github repository" />
                        </a>
                    </Link >
                    <Link href={url}>
                        <a className=" duration-300 ease-in-out hover:saturate-100 hover:scale-110 saturate-0 brightness-200 hover:brightness-100">
                            <Image src={link} width="30" height="30" alt="link to the page" />
                        </a>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default ProyectCard
