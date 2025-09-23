import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import landing from "../assets/landing.png";
import eco from "../assets/ecosystem.png";
import press from "../assets/press-logos.png";
import bottom from "../assets/bottom.png";
import edu from "../assets/index-education.svg";
function Landing() {
    return <>
        <Navbar />
        <img className="landingimg" src={landing} />
        <div className="first-call-to-action">
            <h2>
                Invest in everything
            </h2>
            <p> Online platform to invest in stocks, derivatives , mutual funds , ETFs , bonds and more.</p>
            <button>Sign up for free</button>
        </div>

        <div className="lengthy-yapp-with-image">
            <div>
                <img src={eco} />
            </div>
            <ul>
                <h2>Trust with confidence</h2>
                <li>
                    <h3>
                        Customer-first always
                    </h3>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>
                </li>
                <li>
                    <h3>
                        No spam or gimmicks
                    </h3>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>
                </li>
                <li>
                    <h3>
                        The Zerodha universe
                    </h3>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                </li>
                <li>
                    <h3>
                        Do better with money
                    </h3>
                    <p>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </li>
            </ul>
        </div>
        <div className="press-img">
            <img src={press} />
            {/* these images need to redirect you to different page based on what you clicked */}
        </div>

        <div className="bottom-yap">
            <h2>
                Unbeatable pricing
            </h2>
            <p>
                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#">See pricing{/* add a arrow icon here */}</a>
            <img src={bottom} />
        </div>
        <div>
            <div className="education-image">
                <img src={edu} alt="varsity image" />
            </div>
            <h2>
                Free and open market education
            </h2>
            <p>
                Varsity , the largest online stock market education book in the world covering everything from the basics to advanced trading.
                <a href="#">Varsity{/*add a arrow icon here */}</a>
            </p>
            <p>
                Trading Q&A, the most active trading and investment community in India for all your market related queries.
                <a href="#">TradingQ&A{/*add a arrow icon here */}</a>
            </p>
        </div>
        <div className="last-call-to-action">
            <h2>
                Open a Zerodha account
            </h2>
            <p> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button>Sign up for free</button>
        </div>
        <Footer />

    </>
}

export default Landing;