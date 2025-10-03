import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import founder from "../assets/founder.jpg"
function About() {
    return <>
        <Navbar />
        <div className="mt-30 ">
            <h2 className="header text-2xl font-semibold mx-auto border-b border-gray-300 max-w-xl pb-30 px-1 ">
                We pioneered the discount broking model in India.
                Now, we are breaking ground with our technology.
            </h2>
        </div>


        <div className="flex justify-center items-center text-start gap-x-16 mb-18" >
            <div>
                <div className="para text-md max-w-sm my-8">  We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. </div>

                <div className="para text-md max-w-sm mb-8">  Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</div>

                <div className="para text-md max-w-sm">   Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</div>

            </div>
            <div>
                <div className="para text-md max-w-sm mb-8">   In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. </div>

                <div className="para text-md max-w-sm mb-8">   Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</div>

                <div className="para text-md max-w-sm">   And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies. </div>
            </div>

        </div>

        <h2 className="header text-3xl font-bold flex justify-center items-center ">People</h2>

        <div className="flex mx-auto justify-center items-center gap-x-14 my-12">
            <div ><img className="h-85 rounded-full shadow-md flex" src={founder} />
            </div>
            <div>
                <p className="max-w-sm para  text-lg ">
                    <div className="my-4"> Ali created this clone of Zerodha as his first full stack project </div>
                    <div className="my-4"> He has completed his BCA (Bachelor in computer applications) degree from SPPU</div>
                    <div className="my-4"> He has also started learning DSA to get higher paying Job</div>
                    <div> He has also started learning DSA to get higher paying Job </div>
                </p>
            </div>

        </div >
        <div className="mt-8 justify-center items-center flex flex-col mr-111 ">
            <div className=" mb-4 header text-xl "> Ali sayyed</div>
            <div className="mb-40 "> Full stack developer</div>
        </div>

        <Footer />
    </>
}

export default About;