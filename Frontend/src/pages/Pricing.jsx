import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bigtwenty from "../assets/other-trades.svg";
import bigzero from "../assets/pricing-eq.svg";
function Pricing() {
    return <>
        <Navbar />
        <div>
            <h1>Charges</h1>
            <h2>List of all charges and taxes</h2>
        </div>

        <div>
            <div><img src={bigzero} alt="zero" /></div>
            <div>
                <h1> Free equity delivery</h1>
                <p>All equity delivery investments (NSE, BSE),
                    are absolutely free — ₹ 0 brokerage.</p>
            </div>

            <div><img src={bigtwenty} alt="zero" /></div>
            <div>
                <h1>Intraday and F&O trades</h1>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>

            <div><img src={bigzero} alt="zero" /></div>
            <div>
                <h1> Free direct MF</h1>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>

        <div>
            {/*need to add a div which works on state*/}
        </div>

        <div>
            <h2>Charges for account opening</h2>
            <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online account</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Offline account</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div>
            <h2>Demat AMC(Annual Maintenance Charge)</h2>
            <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                    <tr>
                        <th>Value of holidays</th>
                        <th>AMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Up to &#8377;4 lakh</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>&#8377;4 lakh - &#8377;10 lakh</td>
                        <td>&#8377; 100 per year, charged quarterly*</td>
                    </tr>
                    <tr>
                        <td>Above &#8377;10 lakh</td>
                        <td>&#8377; 300 per year, charged quaterly</td>
                    </tr>
                </tbody>
            </table>
            <p>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.</p>
        </div>

        <div>
            <table border="1" cellpadding="18" cellspacing="0">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Billing Frequency</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Montly / Annual</td>
                        <td>Free: 0 | Pro:249/2399</td>

                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More:100 | Sip:10</td>

                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect:500| Personal:Free</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h1>Charges explained</h1>
            <div>
                <h3> Securities/Commodities transaction tax</h3>
                <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                <h3>Transaction/Turnover Charges</h3>
                <p>
                    Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

                    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

                    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

                    BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

                    BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                </p>

                <h3>Call & trade</h3>
                <p>
                    Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                </p>

                <h3>Stamp charges</h3>
                <p>
                    Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                </p>

                <h3>Account with debit balance</h3>
                <p>
                    If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                </p>

                <h3>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
                <ol>
                    <li>
                        Equity and Futures - ₹10 per crore + GST of the traded value.
                    </li>
                    <li>
                        Options - ₹50 per crore + GST traded value (premium value).
                    </li>
                    <li>
                        Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
                    </li>
                </ol>

                <h3>Margin Trading Facility (MTF)</h3>
                <ol>
                    <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                    <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                    <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN</li>

                </ol>
            </div>

            <h3>Disclaimer</h3>
            <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
        <Footer />
    </>
}

export default Pricing;