import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import accOpen from "../assets/account_open.svg";
import acop from "../assets/acop-benefits.svg";
import foAcop from "../assets/fo-acop.svg";
import ipo from "../assets/ipo-acop.svg";
import mf from "../assets/mf-acop.svg";
import steps from "../assets/steps-acop.svg";
import stocks from "../assets/stocks-acop.svg";
function Signup() {
    return <>
        <Navbar />
        <div className="signup-page-info">
            <h1>Open a free demat and trading account online</h1>
            <p> Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        </div>
        <div className="signup-page-pic">
            <img src={accOpen} alt="signup-first-img" />
        </div>
        <div className="signup-form">
            <h1>Signup now</h1>
            <p>Or track your existing application</p>
            <form>

                <input type="text" placeholder="Enter your mobile number" />
                <button>Get OTP</button>
            </form>
            <p>By proceeding , you agree to the Zerodha terms & privacy policy</p>
            <p>Looking to open NRI account ? Click here</p>
        </div>

        <div>
            <h2> Investment options with Zerodha demat account</h2>
            <span>
                <img src={stocks} />
                <h2>Stocks</h2>
                <p>Invest in all exchange-listed securities</p>
            </span>
            <span>
                <img src={mf} />
                <h2>Mutual funds</h2>
                <p>Invest in commission-free direct mutual funds</p>
            </span>
            <span>
                <img src={ipo} />
                <h2>IPO</h2>
                <p>Apply to the latest IPOs instantly via UPI</p>
            </span>
            <span>
                <img src={foAcop} />
                <h2>Stocks</h2>
                <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </span>
            <button>Explore Investments</button>
        </div>
        <div>
            <h1>Steps to open a demat account with Zerodha</h1>
            <img src={steps} alt="Steps" />
            <ol>
                <li>
                    Enter the requested details
                </li>
                <li>
                    Complete e-sign & verification
                </li>
                <li>
                    Start investing!
                </li>
            </ol>
        </div>

        <div>
            <div>
                <img src={acop} alt="acop" />
                <h2>Benefits of opening a Zerodha demat account</h2>
            </div>
            <div>
                <h2>Unbeatable pricing</h2>
                <p> Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                <h2>  Best investing experience</h2>
                <p>Simple and intuitive trading platform with an easy-to-understand user interface. </p>
                <h2>   No spam or gimmicks </h2>
                <p> Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                <h2>The Zerodha universe</h2>
                <p> More than just an app — gain free access to the entire ecosystem of our partner products.</p>

            </div>
        </div>

        <div>
            <h2> Explore different account types</h2>
            <div>
                <h3>Individual Account  </h3>
                <p>Invest in equity, mutual funds and derivatives</p>
            </div>
            <div>
                <h3>HUF Account</h3>
                <p>Make tax-efficient investments for your family</p>
            </div>
            <div>
                <h3>NRI Account</h3>
                <p>Invest in equity , mutual funds , debentures , and more</p>
            </div>
            <div>
                <h3>Minor Account</h3>
                <p>Teach your little ones about money & invest for their future with them</p>
            </div>
            <div>
                <h3>Corporate/LLP/Partnership</h3>
                <p>Manage your business surplus and investments easily</p>
            </div>
        </div>

        <div>
            <h1>FAQs</h1>
            <details>
                <summary>What is a Zerodha account?</summary>
                <p>
                    A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
                </p>
            </details>

            <details>
                <summary>What documents are required to open a demat account?</summary>
                <ul>
                    The following documents are required to open a Zerodha account online:
                    <li> PAN number</li>
                    <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                    <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                    <li>Income proof (Required only if you wish to trade in Futures & options) </li>
                </ul>
            </details>
            <details>
                <summary>Is Zerodha account opening free?</summary>
                <p>Yes, it is completely free.</p>
            </details>
            <details>
                <summary> Are there any maintenance charges for a demat account?</summary>
                <p>The account maintaince charges is appliacable based on the account type.
                    For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
                    For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
                    To learn more about BSDA, Click here.</p>
            </details>
            <details>
                <summary>Can I open a demat account without a bank account?</summary>
                <p>
                    To open a demat account, you must have a bank account in your name.
                    If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
                </p>
            </details>

        </div>

        <div>
            <h1>Open a Zerodha account</h1>
            <p> Simple and intuitive apps | &#8377;0 for investment | &#8377;20 for intraday and F&O trades</p>
            <button>Sign for free</button>
        </div>

        <Footer />
    </>
}

export default Signup;