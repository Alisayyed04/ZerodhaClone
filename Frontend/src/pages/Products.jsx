import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import kite from "../assets/products-kite.png";
import console from "../assets/products-console.png";
import coin from "../assets/products-coin.png";
import googleplay from "../assets/google-play-badge.svg";
import appstore from "../assets/appstore-badge.svg";
import ditto from "../assets/ditto-logo.png";
import smallcase from "../assets/smallcase-logo.png";
import streak from "../assets/streak-logo.png";
import toji from "../assets/tijori.svg";
import sensi from "../assets/sensibull-logo.svg";
import zerodhafunds from "../assets/zerodhafundhouse.png";
import varsity from "../assets/varsity-products.png";
import landing from "../assets/landing.svg";
import { Link } from "react-router-dom";
function Products() {
    return <>
        <Navbar />

        <div className="flex justify-center items-center flex-col py-26 border-[1px] border-gray-300 bg-gray-50">
            <h1 className="header text-3xl font-bold ">Zerodha Products</h1>
            <h3 className="para font-medium text-xl mt-4">Sleek, Modern, and Intuitive trading platforms</h3>
            <p className="para text-lg mt-5">Check out our <Link className="link" to="#"> investment offerings &#8594;</Link></p>
        </div>


        <div className="flex mt-30 justify-center items-center space-x-40">
            <div className="">
                <Link to="/kite"><img className="" src={kite} alt="kiteicon-image" /> </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="header text-2xl font-bold mb-4">Kite</h2>
                <p className="para text-md max-w-xs">
                    Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                </p>
                <div className="flex justify-start text-center  my-6">
                    <p><Link className="link mr-20">Try demo &#8594;</Link></p>
                    <p><Link className="link">Learn more &#8594;</Link></p>
                </div>
                <div className="flex justify-start text-center  ">
                    <Link to="#"> <img className="mr-7" src={googleplay} /> </Link>
                    <Link to="#"> <img src={appstore} /></Link>
                </div>

            </div>
        </div>

        <div className="flex mt-20 justify-center items-center space-x-40">
            <div className="">
                <h2 className="header text-2xl font-bold mb-4">Console</h2>
                <p className="para text-md max-w-xs">
                    The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                </p>
                <div className="flex justify-start text-center  my-6">
                    <p><Link className="link">Learn more &#8594;</Link></p>
                </div>
            </div>
            <div className="">
                <Link to="/console"><img className="" src={console} alt="console" /> </Link>
            </div>
        </div>

        <div className="flex mt-20 justify-center items-center space-x-40">
            <div className="">
                <Link to="/coin"><img className="" src={coin} alt="Coinicon-image" /> </Link>
            </div>
            <div className="">
                <h2 className="header text-2xl font-bold mb-4">Coin</h2>
                <p className="para text-md max-w-xs">
                    Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
                </p>
                <div className="my-6">
                    <p><Link className="link">Coin &#8594;</Link></p>
                </div>
                <div className="flex justify-start text-center">
                    <Link to="#"> <img className="mr-7" src={googleplay} /> </Link>
                    <Link to="#"> <img src={appstore} /></Link>
                </div>
            </div>
        </div>

        <div className="flex mt-20 justify-center items-center space-x-40 ">
            <div className=" ">
                <h2 className="header text-2xl font-bold mb-4">Kite Connect Api</h2>
                <p className="para text-md max-w-xs">
                    Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase
                </p>
                <div className="my-6">
                    <p><Link className="link">Kite connect &#8594;</Link></p>
                </div>

            </div>
            <div className="">
                <Link to="/landing"><img className="" src={landing} alt="landingicon-image" /> </Link>
            </div>
        </div>

        <div className="flex mt-20 justify-center items-center space-x-40 ">
            <div className="">
                <Link to="/varisty"><img className="" src={varsity} alt="varsityicon-image" /> </Link>
            </div>
            <div className="">
                <h2 className="header text-2xl font-bold mb-4" >Varsity mobile</h2>
                <p className="para text-md max-w-xs">
                    An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                </p>
                <div className="flex justify-start text-center my-6">
                    <Link to="#"> <img className="mr-7" src={googleplay} /> </Link>
                    <Link to="#"> <img src={appstore} /></Link>
                </div>
            </div>
        </div>

        <h2 className="header text-xl font-bold flex justify-center items-center my-20"> Want to know more about our technology stack? Check out the Zerodha.tech blog. </h2>

        <div className=" flex justify-center items-center flex-col mt-30">
            <h1 className="mb-6 header text-2xl font-semibold ">The Zerodha Universe</h1>
            <p className=" para text-xl font-medium" >Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="flex gap-x-18 mx-40 my-20 flex-wrap ">

            <div className=" flex items-center justify-center flex-col mb-20">
                <div ><img className="h-15 px" src={zerodhafunds} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center"> Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
            </div>

            <div className=" flex items-center justify-center flex-col mb-20">
                <div><img className="h-10 px" src={sensi} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center"> Options trading platform that lets you create strategies,
                        analyze positions, and examine data points
                        like open interest , FII/DII, and more.
                    </p>
                </div>
            </div>

            <div className=" flex items-center justify-center flex-col mb-20">
                <div><img className="h-15 px" src={toji} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center"> Investment research platform that offers detailed insights on stocks,
                        sectors , supply chains, and more
                    </p>
                </div>
            </div>

            <div className=" flex items-center justify-center flex-col">
                <div><img className="h-13 px" src={streak} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center"> Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding
                    </p>
                </div>
            </div>

            <div className=" flex items-center justify-center flex-col">
                <div><img className="h-12 px" src={smallcase} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center">Thematic investing platform
                        that help s you invest in diversified
                        baskets of stocks on EFTs.
                    </p>
                </div>
            </div>

            <div className=" flex items-center justify-center flex-col">
                <div><img className="h-14 px" src={ditto} /></div>
                <div>
                    <p className="max-w-xs text-gray-500 text-sm font-medium my-5 text-center"> Personalized advice on life
                        and health insurance. No spam
                        and no mis - selling.
                    </p>
                </div>
            </div>


        </div>
        <div className="mb-24">
            <button className="zerodhabutton py-2.5 px-18 ">Sign up for free</button>
        </div>




        <Footer />
    </>
}

export default Products;