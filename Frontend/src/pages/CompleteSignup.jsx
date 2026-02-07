
import LoginNavbar from "../components/LoginNavbar";
const API = import.meta.env.VITE_API_URL;

export default function CompleteSignup() {

    // Get phoneId from localStorage


    // const handleSubmit1 = async (e) => {
    //     e.preventDefault();

    //     const fullName = e.target.fullName.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     const address = e.target.address.value;
    //     const country = e.target.country.value;
    //     const occupation = e.target.occupation.value;
    //     const dob = e.target.dob.value;
    //     const investmentExperience = e.target.invest.value;
    //     const termsAccepted = e.target.terms.value === "accepted";

    //     await fetch(`${API}/userinfo`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             fullName,
    //             email,
    //             password,
    //             address,
    //             country,
    //             occupation,
    //             dob,
    //             investmentExperience,
    //             termsAccepted,
    //             phone,   // from URL
    //             phoneId, // from localStorage
    //         }),
    //     });
    // };

    return (
        <>
            <LoginNavbar></LoginNavbar>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

                <form onSubmit={""} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl p-20">
                    <h1 className="col-span-1 md:col-span-2 text-4xl font-bold text-center text-gray-800 mb-4">Let's Get Started!</h1>
                    <p className="col-span-1 md:col-span-2 text-center text-gray-500 mb-6">Fill in your details to create your account</p>

                    <input type="text" name="fullName" placeholder="Full Name" className="col-span-1 md:col-span-2 w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="email" name="email" placeholder="Email" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="password" name="password" placeholder="Password" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <textarea name="address" placeholder="address" className="col-span-1 md:col-span-2 w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"></textarea>
                    <input type="text" name="country" placeholder="Country" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="text" name="occupation" placeholder="Occupation" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="date" name="dob" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <select name="invest" className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value={""} disabled selected>Select Experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>

                    <input type="Submit" className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl py-3 rounded-lg cursor-pointer transition duration-300" />
                    <div className="col-span-1 md:col-span-2 mt-4">
                        <fieldset className="border border-gray-200 rounded-md p-4">
                            <legend className="text-lg font-semibold mb-2">
                                Terms and Conditions
                            </legend>

                            <p className="text-gray-500 mb-2 text-sm">
                                Please accept our terms and conditions before submitting the form.
                            </p>

                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="terms"
                                        value="accepted"
                                        required
                                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    I accept the terms and conditions
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="terms"
                                        value="not_accepted"
                                        required
                                        className="w-5 h-5 text-red-600 focus:ring-red-500 border-gray-300"
                                    />
                                    I do not accept
                                </label>
                            </div>
                        </fieldset>
                    </div>

                </form>

            </div>

        </>
    )
}