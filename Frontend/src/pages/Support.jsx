import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Support() {
    return <>
        <Navbar />

        {/* search button */}
        <div className="bg-gray-50 py-4 border-b border-gray-300 ">
            <div className="flex items-center justify-between mx-30 my-12">
                <p className="header text-4xl font-bold"> Support Portal </p>
                <button className="rounded-sm bg-[#3B82F6] hover:bg-black text-white text-lg font-bold px-6 py-2"> My tickets</button>
            </div>
            {/* search bar */}
            <div className="py-4 border-[1px] border-gray-300 shadow-md flex mx-26 mb-12 justify-start items-center bg-white ">
                <form className="px-5 flex w-full ">
                    <div className="pr-4">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <label htmlFor="search " className="w-full" >
                        <input className="para w-full outline-0" id="search" placeholder="Eg:How do I open my account , How do i activatee F&O..." />
                    </label>
                </form>
            </div>
        </div >

        <div className="flex justify-center items-start space-x-14 my-14">


            {/* dropdown menu  */}
            <div className="flex flex-col flex-1 pl-40 space-y-8">
                <div className="flex border-[1px] border-gray-300 items-center justify-start">
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Account Opening </div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
                <div className="flex border-[1px] border-gray-300 items-center justify-start">
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Your Zerodha Account </div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
                <div className="flex border-[1px] border-gray-300 items-center justify-start">
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Kite </div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
                <div className="flex border-[1px] border-gray-300 items-center justify-start">
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Funds </div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
                <div className="flex border-[1px] border-gray-300 items-center justify-start" >
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Console</div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
                <div className="flex border-[1px] border-gray-300 items-center justify-start">
                    <div className="bg-blue-50 mr-auto p-4"><i class="fa-solid fa-plus"></i> </div>
                    <div className="flex-1 pl-4 header text-xl">Coin </div>
                    <div className="ml-auto bg-blue-50 mr-auto p-4 "><i class="fa-solid fa-angle-down"></i> </div>
                </div>
            </div>


            <div className="pr-40 space-y-6">
                {/* top info box */}
                <div className="border-orange-400 border-l-8 ">
                    <div className="border-[1] bg-orange-50 py-4 my-4 pl-8 justify-end pr-4">
                        <li className="list-disc text-md max-w-3xs mb-4">
                            Quarterly Settlement of Funds-October 2025
                        </li>
                        <li className="list-disc text-md max-w-3xs">
                            Muhurat Trading session on account of Diwali, October 2025
                        </li>
                    </div>
                </div>


                {/* bottom info table */}
                <div className="border-[1px] border-gray-300 ">
                    <div className="bg-gray-200 font-lg  pl-4 py-2 header">Quick links</div>
                    <div className=" text-blue-500 text-lg border-b border-[1px] border-gray-300 pl-4 py-2"> 1. Track account opening </div>
                    <div className=" text-blue-500 text-lg border-b border-[1px] border-gray-300 pl-4 py-2"> 2. Track segment activation </div>
                    <div className=" text-blue-500 text-lg border-b border-[1px] border-gray-300 pl-4 py-2"> 3. Intraday margins </div>
                    <div className=" text-blue-500 text-lg border-b border-[1px] border-gray-300 pl-4 py-2"> 4. Kite user manual </div>

                </div>
            </div>


        </div >

        <Footer />
    </>
}

export default Support;