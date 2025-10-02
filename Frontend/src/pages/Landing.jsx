import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import landing from "../assets/landing.png";
import eco from "../assets/ecosystem.png";
import press from "../assets/press-logos.png";
import bottom from "../assets/bottom.png";
import edu from "../assets/index-education.svg";
import { Link } from "react-router-dom";

// comments 

function Landing() {
    return <>
        <Navbar />
        <img className="mx-auto mt-18 my-12 h-88" src={landing} />
        <div className="">
            <h2 className="text-3xl text-center font-semibold text-gray-800">
                Invest in everything
            </h2>
            <p className="text-center text-xl pt-2"> Online platform to invest in stocks, derivatives , mutual funds , ETFs , bonds and more.</p>
            <Link to="/signup"> <button className="block mx-auto my-7 rounded-sm bg-[#3B82F6] hover:bg-black text-white px-8 py-2.5 text-lg font-bold" >Sign up for free</button></Link>
        </div>

        <div className="flex mt-40 justify-around gap-x-12">
            <ul className="flex flex-col items-start ml-auto ">
                <h2 className="text-2xl font-semibold">Trust with confidence</h2>

                <li>
                    <h3 className="text-xl font-semibold mt-10 text-gray-800">
                        Customer-first always
                    </h3>
                    <p className="max-w-sm mt-1 text-lg font-[420] text-gray-700 mb-8" >
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold  text-gray-800">
                        No spam or gimmicks
                    </h3>
                    <p className="max-w-sm mt-1 text-lg font-[420] text-gray-700 mb-8">
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold  text-gray-800">
                        The Zerodha universe
                    </h3>
                    <p className="max-w-sm mt-1 text-lg font-[420] text-gray-700 mb-8">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold  text-gray-800">
                        Do better with money
                    </h3>
                    <p className="max-w-sm mt-1 text-lg font-[420] text-gray-700 mb-8">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </li>
            </ul>

            <div className="mr-auto">
                <img className=" h-158" src={eco} />
                <div className="flex justify-center mt-6 space-x-8">
                    <Link className="hover:text-blue-600 text-lg" to="/products">Explore our products &rarr; </Link>
                    <Link className="hover:text-blue-600 text-lg" to="/kite">Try kite demo &rarr; </Link>
                </div>

            </div>
        </div>

        <div className="flex justify-center my-14">
            <img className="h-11" src={press} />
            {/* these images need to redirect you to different page based on what you clicked */}
        </div>



        <div className="mt-38">
            <h2 className="text-2xl font-semibold ml-44  text-gray-800">
                Unbeatable pricing
            </h2>
            <div className="flex justify-around items-center">
                <p className="max-w-lg text-lg ml-auto ">
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.

                </p>
                <img className="h-36 mr-auto" src={bottom} />

            </div>

            <Link className="flex text-blue-600 hover:text-black text-lg ml-44 " to="/pricing">See pricing &rarr;</Link>
        </div>

        <div className="flex justify-center items-center gap-x-0 mt-30">

            <div className="mx-auto">
                <img className="h-82 " src={edu} alt="varsity image" />
            </div>
            <div className="mx-auto">
                <h2 className=" text-3xl font-semibold  text-gray-800">
                    Free and open market education
                </h2>
                <p className="max-w-xl my-4 text-lg font-[420] text-gray-700 ">
                    Varsity , the largest online stock market education book in the world covering everything from the basics to advanced trading.

                </p>
                <Link className=" text-blue-600 hover:text-black text-lg" to="/varsity">Varisty &rarr;</Link>
                <p className="max-w-xl my-4 text-lg font-[420] text-gray-700 ">
                    Trading Q&A, the most active trading and investment community in India for all your market related queries.

                </p>
                <Link className=" text-blue-600 hover:text-black text-lg" to="/community"> TradingQ&A&rarr;</Link>
            </div>

        </div>

        <div className="flex flex-col items-center mt-28 mb-24">
            <h2 className=" text-2xl font-semibold text-gray-800">
                Open a Zerodha account
            </h2>
            <p className="mt-4 text-lg font-[420] text-gray-700 "> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/signup"> <button className="block mx-auto my-7 rounded-sm bg-[#3B82F6] hover:bg-black text-white px-8 py-2.5 text-lg font-bold" >Sign up for free</button></Link>

        </div>
        <Footer />

    </>
}

export default Landing;