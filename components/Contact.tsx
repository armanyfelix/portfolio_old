import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import Btn from '../styles/customBtn.module.css'
import Input from '@material-tailwind/react/Input'
import Textarea from "@material-tailwind/react/Textarea";


function Contact() {

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current,
                    THREE,
                    color: 0x777777,
                    backgroundColor: 0x111827,
                })
            );
        }

        //  return () => {
        //      if (vantaEffect) vantaEffect.destroy();
        //  };

    }, [vantaEffect]);
    return (
        <section id="contact" ref={vantaRef} className=" lg:py-1 py-24 lg:h-screen bg-gray-900 antialiased">
            <div className="flex w-full min-h-screen justify-center items-center">
                <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 backdrop-filter backdrop-blur border-2 border-opacity-30 border-gray-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="font-bold font-simplex text-5xl tracking-wide">
                                Contact
                            </h1>
                            <p className="pt-2 text-indigo-400 text-sm">
                                If you are interested in working with me, please leave me a message, I will answer you as soon as possible.
                            </p>
                        </div>
                        <div className="flex flex-col mt-8 md:mt-0 space-y-4">
                            <div className="inline-flex space-x-2">
                                <Image src="/icons/phone.png" width="30" height="30" alt="phone" className="" />
                                <span>+(52) 664 212 2325</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <Image src="/icons/email.png" width="30" height="30" alt="email" />
                                <span>luis.armany.felix@gmail.com</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <Image src="/icons/location.png" width="30" height="30" alt="location" />
                                <span>Lomas Terrabella 22203, Tijuana B.C. Mexico</span>
                            </div>
                        </div>
                        <div className="flex mt-6 space-x-4">
                            <Link href="https://www.linkedin.com/in/armany-felix">
                                <a><Image src="/icons/linkedin.svg" width="40" height="40" alt="logo-linkedIn" /></a>
                            </Link>
                            <Link href="https://github.com/armanyfelix/">
                                <a><img src="/icons/github.svg" width="40" height="40" alt="logo-github" /></a>
                            </Link>
                            <Link href="https://www.instagram.com/armanyf/">
                                <a><Image src="/icons/instagram.svg" width="40" height="40" alt="logo-instagram" /></a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className=" backdrop-filter backdrop-blur bg-white bg-opacity-10 box-border backdrop-contrast-150 border-opacity-30 border-2 rounded-xl shadow-lg p-8  md:w-80">
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <Input
                                            id="name"
                                            type="text"
                                            color="cyan"
                                            size="regular"
                                            outline={true}
                                            placeholder="Name"
                                            required
                                            style={{ color: "white" }}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <Input
                                            id="email"
                                            type="email"
                                            color="indigo"
                                            size="regular"
                                            outline={true}
                                            placeholder="Email"
                                            required
                                            style={{ color: "white" }}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">
                                        <Textarea
                                            id="message"
                                            type="textarea"
                                            color="purple"
                                            size="regular"
                                            outline={true}
                                            placeholder="Message"
                                            required
                                            style={{ color: "white" }}
                                        />
                                    </label>
                                </div>
                                <div className="text-right justify-end">
                                    <button type="submit" className={Btn.btn}>
                                        <span className="font-mono f">{status}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
