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

function Products() {
    return <>
        <Navbar />

        <div>
            <h1>Zerodha Products</h1>
            <h3>Sleek, Modern, and Intuitive trading platforms</h3>
            <p>Check out our <a href="#">investment offerings</a></p>
        </div>

        <hr></hr>

        <div className="kiteProduct">
            <div className="kite-image">
                <img src={kite} alt="kiteicon-image" />
            </div>
            <div className="KiteYap">
                <h2>Kite</h2>
                <p>
                    Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                </p>
                <span><a href="#">Try demo &#8594;</a> </span>
                <span><a href="#">Learn more &#8594;</a> </span>
                <img src={googleplay} /> <img src={appstore} />
            </div>
        </div>

        <div className="ConsoleProduct">
            <div className="Console-image">
                <img src={console} alt="Consoleicon-image" />
            </div>
            <div className="ConsoleYap">
                <h2>Console</h2>
                <p>
                    The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                </p>
                <span><a href="#">Learn more &#8594;</a> </span>
            </div>
        </div>

        <div className="CoinProduct">
            <div className="Coin-image">
                <img src={coin} alt="Coinicon-image" />
            </div>
            <div className="CoinYap">
                <h2>Coin</h2>
                <p>
                    Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
                </p>
                <span><a href="#">Coin &#8594;</a> </span>
                <img src={googleplay} /> <img src={appstore} />
            </div>
        </div>

        <div className="kiteConnectApiProduct">
            <div className="kiteCAP-image">
                <img src={landing} alt="kiteCAPicon-image" />
            </div>
            <div className="KiteCAPYap">
                <h2>Kite Connect Api</h2>
                <p>
                    Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase
                </p>
                <span><a href="#">Kite Connect &#8594;</a> </span>

            </div>
        </div>

        <div className="VaristyProduct">
            <div className="Varsity-image">
                <img src={varsity} alt="Varsityicon-image" />
            </div>
            <div className="VarsityYap">
                <h2>Varsity mobile</h2>
                <p>
                    An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                </p>
                <img src={googleplay} /> <img src={appstore} />
            </div>
        </div>

        <h2> Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>

        <div className="ZerodhaUni">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div>
                <div><img src={zerodhafunds} /></div>
                <div>
                    <p> Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
            </div>

            <div>
                <div><img src={sensi} /></div>
                <div>
                    <p> Options trading platform that lets you create strategies,
                        analyze positions, and examine data points
                        like open interest , FII/DII, and more.
                    </p>
                </div>
            </div>

            <div>
                <div><img src={toji} /></div>
                <div>
                    <p> Investment research platform that offers detailed insights on stocks,
                        sectors , supply chains, and more
                    </p>
                </div>
            </div>

            <div>
                <div><img src={streak} /></div>
                <div>
                    <p> Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding
                    </p>
                </div>
            </div>

            <div>
                <div><img src={smallcase} /></div>
                <div>
                    <p>Thematic investing platform
                        that help s you invest in diversified
                        baskets of stocks on EFTs.
                    </p>
                </div>
            </div>

            <div>
                <div><img src={ditto} /></div>
                <div>
                    <p> Personalized advice on life
                        and health insurance. No spam
                        and no mis - selling.
                    </p>
                </div>
            </div>

            <div>
                <div><img src={zerodhafunds} /></div>
                <div>
                    <p> Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
            </div>

            <button>Sign up for free</button>


        </div>
        <Footer />
    </>
}

export default Products;