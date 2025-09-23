import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
    return <>
        <Navbar />
        <div>
            <h2>
                We pioneered the discount broking model in India.
                Now, we are breaking ground with our technology.
            </h2>
        </div>
        <hr></hr>

        <div>
            <div>
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div>
                <p>
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                </p>
            </div>
        </div>

        <div>
            <h2>People</h2>

            <div>
                <p>
                    Ali created this clone of Zerodha as his first full stack project
                    He has completed his BCA (Bachelor in computer applications) degree from SPPU
                    He has also started learning DSA to get higher paying Job
                    Playing valorant is his zen.
                </p>
            </div>
            <div>
                {/*put my pic here in black and white <img src={} />*/}
                <h3>
                    Ali Sayyed
                </h3>
                <p>Full stack developer</p>
            </div>
        </div>
        <Footer />
    </>
}

export default About;