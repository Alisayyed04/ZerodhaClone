import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import accOpen from "../assets/account_open.svg";
import acop from "../assets/acop-benefits.svg";
import foAcop from "../assets/fo-acop.svg";
import ipo from "../assets/ipo-acop.svg";
import mf from "../assets/mf-acop.svg";
import steps from "../assets/steps-acop.svg";
import stocks from "../assets/stocks-acop.svg";
import indianflag from "../assets/2220152.webp"
import { Link } from "react-router-dom";
import first from "../assets/first.svg";
import second from "../assets/sec.svg";
import third from "../assets/third.svg";
import fourth from "../assets/fourth.svg";
import fifth from "../assets/fifth.svg";
const API = import.meta.env.VITE_API_URL;

const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = e.target.phNo.value;

    await fetch(`${API}/otp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
    });
};

function Signup() {
    return <>
        <Navbar />
        <div className="flex flex-col items-center">
            <h1 className="header text-3xl font-bold mt-26">Open a free demat and trading account online</h1>
            <p className="para font-medium text-xl mt-6 my-26"> Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        </div>


        <div className="flex justify-center items-center space-x-20 ">
            <div className="">
                <img className="h-88 " src={accOpen} alt="signup-first-img" />
            </div>
            <div className="">
                <h1 className="header text-2xl font-bold">Signup now</h1>
                <p className="para text-lg mt-2 mb-4">Or track your existing application</p>
                <form onSubmit={handleSubmit} method="POST">
                    <label for="phoneNo" className="flex border-[0.8px] w-100 rounded-sm border-gray-400 ">
                        <div className=" flex border-r-[0.8px] p-4 justify-center items-center border-gray-200 ">
                            <img className="h-6 w-7 rounded-lg" src={indianflag}></img> <p className="header font-semibold text-xl ml-1">+91</p>
                        </div>
                        <input className="flex text-xl flex-1 pl-4  border-gray-200" type="tel" maxlength="10" id="phoneNo" name="phNo" placeholder="Enter your mobile number" required />
                    </label>
                    <div className=" flex justify-center items-center mr-60">
                        <Link to="/Otp"><button className="  zerodhabutton px-20 py-3 ">Continue</button> </Link>
                    </div>
                </form>
                <p className="text-xs mb-4 pb-4 border-b-[0.8px] border-gray-200">By proceeding , you agree to the Zerodha <Link className="link">terms</Link> & <Link className="link">privacy policy</Link></p>
                <p className="text-xs" >Looking to open NRI account ? <Link className="link" to="#"> Click here</Link></p>
            </div>
        </div>

        <h2 className=" flex header font-bold text-2xl justify-center mt-40 "> Investment options with Zerodha demat account</h2>

        <div className="mt-20 flex justify-center items-center space-x-20 mb-12">

            <div className="flex flex-col ">
                <div className="flex justify-center ">
                    <img className="h-20 " src={stocks} />
                    <div className="mb-20 pl-8">
                        <h2 className="  header font-bold text-xl ">Stocks</h2>
                        <p className="pt-3 para text-lg max-w-[220px]">Invest in all exchange-listed securities</p>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img className="h-20" src={ipo} />
                    <div className=" pl-8">
                        <h2 className=" flex header font-bold text-xl">IPO</h2>
                        <p className="pt-3 para text-lg max-w-[220px]">Apply to the latest IPOs instantly via UPI</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="flex justify-center ">
                    <img className="h-20" src={mf} />
                    <div className="mb-20 pl-8">
                        <h2 className=" flex header font-bold text-xl">Mutual funds</h2>
                        <p className="pt-3 para text-lg max-w-[220px]">Invest in commission-free direct mutual funds</p>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <img className="h-20" src={foAcop} />
                    <div className=" pl-8">
                        <h2 className=" flex header font-bold text-xl">Stocks</h2>
                        <p className="pt-3 para text-lg max-w-[220px]">Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
            </div>
        </div>
        <button className="zerodhabutton px-10 py-2.5 ">Explore Investments</button>


        <div className="mt-40  bg-gray-50 pb-20">
            <div className="flex justify-center header font-bold text-2xl ">
                <h1 className="my-16">Steps to open a demat account with Zerodha</h1>
            </div>
            <div className="flex justify-center items-center space-x-20 ">
                <img src={steps} alt="Steps" />
                <div>
                    <ol>
                        <li className="flex  items-center border-b-[1px] border-gray-300 text-xl p-4">
                            <div className="h-8 w-8 flex rounded-4xl border-[1px] justify-center items-center border-gray-300 mr-4">01</div>
                            Enter the requested details
                        </li>
                        <li className="flex  items-center border-b-[1px] border-gray-300 text-xl p-4 ">
                            <div className="h-8 w-8 flex rounded-4xl border-[1px] justify-center items-center border-gray-300 mr-4">02</div>
                            Complete e-sign & verification
                        </li>
                        <li className="flex items-center border-b-[1px] border-gray-300 text-xl p-4">
                            <div className="h-8 w-8 flex rounded-4xl border-[1px] justify-center items-center border-gray-300 mr-4">03</div>
                            Start investing!
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="flex justify-center space-x-20 items-center my-24">
            <div>
                <img className="h-70 px" src={acop} alt="acop" />
                <h2 className="header font-semibold text-2xl">Benefits of opening a Zerodha demat account</h2>
            </div>
            <div>
                <h2 className="header font-semibold text-xl mb-5">Unbeatable pricing</h2>
                <p className="para text-lg mb-8 max-w-xl"> Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                <h2 className="header font-semibold text-xl mb-5">  Best investing experience</h2>
                <p className="para text-lg mb-8 max-w-xl">Simple and intuitive trading platform with an easy-to-understand user interface. </p>
                <h2 className="header font-semibold text-xl mb-5">   No spam or gimmicks </h2>
                <p className="para text-lg mb-8 max-w-xl"> Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                <h2 className="header font-semibold text-xl mb-5">The Zerodha universe</h2>
                <p className="para text-lg mb-8 max-w-xl"> More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </div>
        </div>

        <h2 className="header font-semibold text-2xl flex items-center justify-center mb-16"> Explore different account types</h2>

        <div className="flex flex-wrap justify-start items-center gap-x-18 mx-45">
            <Link to="#">
                <div className=" relative w-80 h-40 border-[1px] border-gray-200 rounded-lg hover:border-blue-600">
                    <img className="absolute -left-3.5 top-1/6 w-8 h-8 bg-blue-50 rounded-full " src={first} />
                    <h3 className="para font-medium text-xl mb-4 pt-6 pl-8">Individual Account  </h3>
                    <p className=" para text-lg mb-6 max-w-xl pt-3 px-4">Invest in equity, mutual funds and derivatives</p>
                </div>
            </Link>
            <Link to="#">
                <div className=" relative w-80 h-40  border-[1px] border-gray-300 rounded-lg hover:border-blue-600">
                    <img className="absolute -left-3.5 top-1/6 w-8 h-8 bg-blue-50 rounded-full " src={second} />
                    <h3 className="para font-medium text-xl mb-4 pt-6 pl-8">HUF Account</h3>
                    <p className=" para text-lg mb-6 max-w-xl pt-3 px-4">Make tax-efficient investments for your family</p>
                </div>
            </Link>
            <Link to="#">
                <div className=" relative w-80 h-40  border-[1px] border-gray-300 rounded-lg hover:border-blue-600">
                    <img className="absolute -left-3.5 top-1/6 w-8 h-8 bg-blue-50 rounded-full " src={third} />
                    <h3 className="para font-medium text-xl mb-4 pt-6 pl-8">NRI Account</h3>
                    <p className=" para text-lg mb-6 max-w-xl pt-3 px-4">Invest in equity , mutual funds , debentures , and more</p>
                </div>
            </Link>
            <Link to="#">
                <div className=" relative w-80 h-40   border-[1px] border-gray-300 mt-18 rounded-lg hover:border-blue-600">
                    <img className="absolute -left-3.5 top-1/6 w-8 h-8 bg-blue-50 rounded-full " src={fourth} />
                    <h3 className="para font-medium text-xl mb-4 pt-6 pl-8">Minor Account</h3>
                    <p className=" para text-lg mb-6 max-w-xl pt-3 px-4">Teach your little ones about money & invest for their future with them</p>
                </div>
            </Link>
            <Link to="#">
                <div className=" relative w-80 h-40  border-[1px] border-gray-300 mt-18 rounded-lg hover:border-blue-600">
                    <img className="absolute -left-3.5 top-1/6 w-8 h-8 bg-blue-50 rounded-full " src={fifth} />
                    <h3 className="para font-medium text-xl mb-4 pt-6 pl-8">Corporate/LLP/Partnership</h3>
                    <p className="para text-lg mb-6 max-w-xl pt-3 px-4">Manage your business surplus and investments easily</p>
                </div>
            </Link>
        </div>


        <h1 className="header text-2xl font-bold ml-45 mt-30">FAQs</h1>
        <div className="flex flex-col justify-around mt-15 mx-44">

            <details className="border-t-2 border-gray-200 hover:border-t-blue-700 transition-colors duration-300">
                <summary className="para text-lg font-semibold mx-4 my-4">What is a Zerodha account?</summary>
                <p className="para pb-4 font-medium">
                    A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
                </p>
            </details>

            <details className="border-t-2 border-gray-200  hover:border-t-blue-700 transition-colors duration-300">
                <summary className="para text-lg font-semibold mx-4 my-4">What documents are required to open a demat account?</summary>
                <p className="para pb-4 font-medium"> The following documents are required to open a Zerodha account online:</p>
                <ul className="pb-4 text-md para pl-6 list-disc">

                    <li className="py-1 ml-4"> PAN number</li>
                    <li className="py-1 ml-4">Aadhaar Card (Linked with a phone number for OTP verification)</li>
                    <li className="py-1 ml-4">Cancelled cheque or bank account statement (To link your bank account)</li>
                    <li className="py-1 ml-4">Income proof (Required only if you wish to trade in Futures & options) </li>
                </ul>
            </details>

            <details className="border-t-2 border-gray-200 hover:border-t-blue-700 transition-colors duration-300">
                <summary className="para text-lg font-semibold mx-4 my-4">Is Zerodha account opening free?</summary>
                <p className="para pb-4 ">Yes, it is completely free.</p>
            </details>

            <details className="border-t-2 border-gray-200 hover:border-t-blue-700 transition-colors duration-300">
                <summary className="para text-lg font-semibold mx-4 my-4"> Are there any maintenance charges for a demat account?</summary>
                <p className="para pb-4  max-w-2xl">The account maintaince charges is appliacable based on the account type.
                    For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
                    For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
                    To learn more about BSDA, Click here.</p>
            </details>

            <details className="border-t-2 border-gray-200 hover:border-t-blue-700 transition-colors duration-300">
                <summary className="para text-lg font-semibold mx-4 my-4">Can I open a demat account without a bank account?</summary>
                <p className="para pb-4  max-w-2xl">
                    To open a demat account, you must have a bank account in your name.
                    If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
                </p>
            </details>

        </div>



        <div className="flex items-center justify-center flex-col my-20">
            <h1 className="header font-bold text-3xl py-8">Open a Zerodha account</h1>
            <p className="para text-semibold text-xl"> Simple and intuitive apps &middot; &#8377;0 for investment &middot; &#8377;20 for intraday and F&O trades</p>
            <button className="zerodhabutton py-3 px-18">Signup for free</button>
        </div>

        <Footer />
    </>
}

export default Signup;