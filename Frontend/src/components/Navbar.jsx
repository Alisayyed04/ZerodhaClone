import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row  sticky top-0 items-center  p-4 align-middle bg-white border-b border-black/15 h-18 ">

                <Link className="h-auto w-35 ml-30 mt-3" to="/"><img src={logo} /></Link>

                <ul className="flex flex-row ml-auto space-x-14 mr-19 mt-2 font-normal">
                    <li className="text-gray-800 hover:text-blue-500 transition-colors duration-200">
                        <Link to="/signup"> Signup </Link>
                    </li> <li className="text-gray-800 hover:text-blue-500 transition-colors duration-200">
                        <Link to="/about"> About</Link>
                    </li> <li className="text-gray-800 hover:text-blue-500 transition-colors duration-200">
                        <Link to="/products"> Products</Link>
                    </li> <li className="text-gray-800 hover:text-blue-500 transition-colors duration-200 ">
                        <Link to="/pricing"> Pricing</Link>
                    </li> <li className="text-gray-800 hover:text-blue-500 transition-colors duration-200 ">
                        <Link to="/support"> Support</Link>
                    </li>
                    <li>
                        <i className="fas fa-bars text-gray-800 hover:text-blue-500 transition-colors duration-200"></i>
                    </li>
                </ul>
                <ul className=" hidden">

                    <li><Link to="/kite">Kite</Link></li>
                    <li><Link to="/connect">Connect</Link></li>
                    <li><Link to="/kiteConnect">Kite Connect</Link></li>
                    <li><Link to="/coin">Coin</Link></li>
                </ul>

            </nav>
        </>
    )
}
