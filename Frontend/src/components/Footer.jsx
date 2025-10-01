import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Footer() {
    return (
        <>
            <footer className=" bg-gray-50 border-t-[1px] border-gray-300 ">
                <div className="flex gap-x-[4rem] px-[13.75rem]  pt-8">
                    <div className="mt-2 ">
                        <Link to="/"><img className="h-5 " src={logo} /></Link>
                        <div className="mt-3.5 text-sm text-gray-500">
                            <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
                            <p> All rights reserved.</p>
                        </div>

                        <ul className="flex mt-4">
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                        </ul>
                        <ul className="flex mt-4 border-t-[1px] border-gray-300 pt-3">
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500 "><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-whatsapp"></i></Link></li>
                            <li className="text-xl pr-4 text-gray-700 hover:text-blue-500"><Link to="#"><i className="fa-brands fa-telegram"></i></Link></li>
                        </ul>

                    </div>
                    <div >
                        <ul className=" flex flex-col gap-y-4 text-gray-600 text-[15px] font-medium ">
                            <h3 className="font-bold text-xl text-gray-800">Account</h3>
                            <li>
                                <Link className=" hover:text-blue-500" to="/open-demat">Open demat account</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/minor-demat">Minor demat account</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/nri-demat">NRI demat account</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/commodity">Commodity</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/dematerialisation">Dematerialisation</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/fund-transfer">Fund transfer</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/mtf">MTF</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/referral">Referral program</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="Main-footer-Support">
                        <ul className=" flex flex-col gap-y-4 text-gray-600 text-[15px] font-medium ">
                            <h3 className="font-bold text-xl text-gray-800">Support</h3>
                            <li>
                                <Link className=" hover:text-blue-500" to="/contact">Contact us</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/support">Support portal</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/complaint">How to file a complaint?</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/complaint-status">Status of your complaints</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/bulletin">Bulletin</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/circular">Circular</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/blog">Z-Connect blog</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/downloads">Downloads</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="Main-footer-Company">
                        <ul className=" flex flex-col gap-y-4 text-gray-600 text-[15px] font-medium ">
                            <h3 className="font-bold text-xl text-gray-800">Company</h3>
                            <li>
                                <Link className=" hover:text-blue-500" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/philosophy">Philosophy</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/press">Press & Media</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/cares">Zerodha cares</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/tech">Zerodha.tech</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/open-source">Open source</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="Main-footer-Quicklinks">
                        <ul className=" flex flex-col gap-y-4  text-gray-600 text-[15px] font-medium ">
                            <h3 className="font-bold text-xl text-gray-800">Quick links</h3>
                            <li>
                                <Link className=" hover:text-blue-500" to="/ipos">Upcoming IPOs</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/brokerage">Brokerage charges</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/holidays">Market holidays</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/calendar">Economic calendar</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/calculators">Calculators</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/markets">Markets</Link>
                            </li>
                            <li>
                                <Link className=" hover:text-blue-500" to="/sectors">Sectors</Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="text-xs text-gray-400 mt-6 space-y-2 px-60">
                    <p>
                        <strong>Zerodha Broking Ltd.:</strong> Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
                        CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
                        Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238.
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking,
                        please write to <a href="mailto:complaints@zerodha.com" className="underline text-blue-600">complaints@zerodha.com</a>,
                        for DP related matters, write to <a href="mailto:dp@zerodha.com" className="underline text-blue-600">dp@zerodha.com</a>.
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>

                    <p>
                        <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on the SCORES portal. Mandatory details for filing complaints: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective communication, speedy redressal of grievances.
                    </p>

                    <p>
                        <strong>Smart Online Dispute Resolution | Grievances Redressal Mechanism</strong>
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        <strong>Attention investors:</strong>
                        1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.
                        2) Update your e-mail and phone number with your stock broker/depository participant and receive OTP directly from depository to create pledge.
                        3) Check your securities/MF/bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>

                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets — once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."
                        Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account.
                        As a business, we don't give stock tips and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket <a href="/support" className="underline text-blue-600">here</a>.
                    </p>
                </div>

                <div >
                    <ul className="flex flex-row space-x-6 justify-center text-gray-400 p-4 text-sm">

                        <li className="hover:text-blue-500"><Link to="#">NSE</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">BSE</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">Terms & Conditions</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">Policies and procedures</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">Privacy policy</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">Disclosure</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">For Investors attention</Link></li>
                        <li className="hover:text-blue-500"><Link to="#">Investor charter</Link></li>


                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;