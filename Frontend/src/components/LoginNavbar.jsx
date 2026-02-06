import logo from "../assets/logo.svg";
import { Link } from "react-router";
export default function LoginNavbar() {
    return (
        <>
            <nav className="flex flex-row z-50 sticky top-0 items-center  p-4 align-middle bg-white border-b border-black/15 h-18 ">
                <Link className="h-auto w-35 ml-30 mt-3" to="/"><img src={logo} /></Link>
            </nav>

        </>
    )
}