import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  title?: string,
  children?: any,
  description?: string,
  home?: boolean
}

Layout.defaultProps = {
    title: "Armany | Portfolio",
    description: "My personal web portfolio to fine a nice job like a software engineer",
}

function Layout({ children, title, description, home }:Props) {
    return (
        <div className="box-border p-0 m-0">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" /> */}
            </Head>
            {!home && (
                <>
                    <Navbar />
                    <div className="bg-black text-xl  font-bold text-white">
                        <Link href="/">
                            <a className="items-center hover:text-indigo-300 hover:-translate-y-1 duration-500 ease-in-out">
                                ← Back to home
                            </a>
                        </Link>
                    </div>
                </>
            )}
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
