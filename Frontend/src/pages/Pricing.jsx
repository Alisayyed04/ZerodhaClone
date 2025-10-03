import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bigtwenty from "../assets/other-trades.svg";
import bigzero from "../assets/pricing-eq.svg";
function Pricing() {
    return <>
        <Navbar />
        <div className="mt-20 mb-50 flex justify-center items-center flex-col">
            <h1 className="header text-3xl font-bold mb-3">Charges</h1>
            <h2 className="text-gray-400 text-xl ">List of all charges and taxes</h2>
        </div>

        <div className="flex justify-center items-start gap-x-20 mb-18">
            <div className="justify-center items-center flex flex-col text-center ">
                <img className="h-48" src={bigzero} alt="zero" />
                <h1 className="header text-2xl font-bold mb-4"> Free equity delivery</h1>
                <p className="para text-sm font-medium max-w-xs">All equity delivery investments (NSE, BSE),
                    are absolutely free — ₹ 0 brokerage.</p>
            </div>

            <div className="justify-center items-center flex flex-col text-center ">
                <img className="h-48" src={bigtwenty} alt="zero" />
                <h1 className="header text-2xl font-bold mb-4">Intraday and F&O trades</h1>
                <p className="para text-sm font-medium max-w-xs">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>

            <div className="justify-center items-center flex flex-col text-center ">
                <img className="h-48" src={bigzero} alt="zero" />
                <h1 className="header text-2xl font-bold mb-4"> Free direct MF</h1>
                <p className="para text-sm font-medium max-w-xs">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>

        </div >

        <div>
            {/*need to add a div which works on state*/}
        </div>

        <h2 className="header text-2xl font-semibold  mx-40">Charges for account opening</h2>

        <div className="flex mt-5 mb-10 mx-40">
            <div className="overflow-x-auto w-full">
                <table className="w-full table-auto border border-gray-300 rounded-lg shadow-md">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Type of account
                            </th>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Charges
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-gray-600">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Online account</td>
                            <td className="px-6 py-3 border-b border-gray-300">Free</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Offline account</td>
                            <td className="px-6 py-3 border-b border-gray-300">Free</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">
                                NRI account (offline only)
                            </td>
                            <td className="px-6 py-3 border-b border-gray-300">₹ 500</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">
                                Partnership, LLP, HUF, or Corporate accounts (offline only)
                            </td>
                            <td className="px-6 py-3 border-b border-gray-300">₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h2 className="text-2xl font-semibold mx-40 mt-10 mb-6 text-gray-800">
            Demat AMC (Annual Maintenance Charge)
        </h2>

        <div className="flex flex-col mb-12 mx-40">
            <div className="w-full overflow-x-auto">
                <table className="w-full table-auto border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Value of holdings
                            </th>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                AMC
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Up to ₹4 lakh</td>
                            <td className="px-6 py-3 border-b border-gray-300">Free</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">₹4 lakh - ₹10 lakh</td>
                            <td className="px-6 py-3 border-b border-gray-300">
                                ₹100 per year, charged quarterly*
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Above ₹10 lakh</td>
                            <td className="px-6 py-3 border-b border-gray-300">
                                ₹300 per year, charged quarterly
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-3 text-sm text-gray-500">
                    * Lower AMC is applicable only if the account qualifies as a Basic Services
                    Demat Account (BSDA). BSDA account holders cannot hold more than one demat
                    account.
                </p>
            </div>
        </div>

        {/* Second Table */}
        <div className="mx-40 mb-12">
            <div className="overflow-x-auto w-full">
                <table className="w-full table-auto border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Service
                            </th>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Billing Frequency
                            </th>
                            <th className="px-6 py-3 text-left text-lg font-semibold border-b border-gray-300">
                                Charges
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Tickertape</td>
                            <td className="px-6 py-3 border-b border-gray-300">Monthly / Annual</td>
                            <td className="px-6 py-3 border-b border-gray-300">Free | Pro: ₹249 / ₹2399</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Smallcase</td>
                            <td className="px-6 py-3 border-b border-gray-300">Per transaction</td>
                            <td className="px-6 py-3 border-b border-gray-300">
                                Buy & Invest More: ₹100 | SIP: ₹10
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-3 border-b border-gray-300">Kite Connect</td>
                            <td className="px-6 py-3 border-b border-gray-300">Monthly</td>
                            <td className="px-6 py-3 border-b border-gray-300">
                                Connect: ₹500 | Personal: Free
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Charges Explained */}
        <div className="mx-40 mb-12 text-gray-700 leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">Charges explained</h1>

            <h3 className="text-lg font-medium mt-6">Securities/Commodities transaction tax</h3>
            <p className="text-sm">
                Tax by the government when transacting on the exchanges. Charged as above on both
                buy and sell sides when trading equity delivery. Charged only on selling side when
                trading intraday or on F&O. When trading at Zerodha, STT/CTT can be a lot more than
                the brokerage we charge. Important to keep a tab.
            </p>

            <h3 className="text-lg font-medium mt-6">Transaction/Turnover Charges</h3>
            <p className="text-sm">
                Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. BSE has
                revised transaction charges in XC, XD, XT, Z and ZP groups...
            </p>

            <h3 className="text-lg font-medium mt-6">Call & trade</h3>
            <p className="text-sm">
                Additional charges of ₹50 per order for orders placed through a dealer at Zerodha
                including auto square off orders.
            </p>

            <h3 className="text-lg font-medium mt-6">Stamp charges</h3>
            <p className="text-sm">
                Stamp charges by the Government of India as per the Indian Stamp Act of 1899...
            </p>

            <h3 className="text-lg font-medium mt-6">Account with debit balance</h3>
            <p className="text-sm">
                If the account is in debit balance, any order placed will be charged ₹40 per executed
                order instead of ₹20 per executed order.
            </p>

            <h3 className="text-lg font-medium mt-6">
                Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h3>
            <ol className="list-decimal list-inside text-sm">
                <li>Equity and Futures - ₹10 per crore + GST</li>
                <li>Options - ₹50 per crore + GST</li>
                <li>Currency - ₹0.05 per lakh + GST</li>
            </ol>

            <h3 className="text-lg font-medium mt-6">Margin Trading Facility (MTF)</h3>
            <ol className="list-decimal list-inside text-sm">
                <li>MTF Interest: 0.04% per day</li>
                <li>MTF Brokerage: 0.3% or ₹20 per order</li>
                <li>MTF pledge charge: ₹15 + GST</li>
            </ol>

            <h3 className="text-lg font-medium mt-6">Disclaimer</h3>
            <p className="text-sm">
                For Delivery based trades, a minimum of ₹0.01 will be charged per contract note...
                Brokerage is also charged on expired, exercised, and assigned options contracts...
            </p>
        </div>

        <Footer />
    </>
}

export default Pricing;