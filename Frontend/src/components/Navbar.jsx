
function Navbar() {
    return (
        <>
            <nav className="navbar ">
                <div className="nav-container-outer">
                    <a className="navbar-brand" href="#">Zerodha</a>
                    <div className="nav-container-inner" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" >
                                    Need a burger menu here
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Kite</a></li>
                                    <li><a className="dropdown-item" href="#">Console</a></li>
                                    <li><a className="dropdown-item" href="#">Kite Connect</a></li>
                                    <li><a className="dropdown-item" href="#">Coin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;