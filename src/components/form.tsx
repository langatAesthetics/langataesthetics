import Footer from "./footer";
import Header from "./header";


const Form = () => {

    return (
        <>
            <Header/>
            <section className="px-6 lg:px-8">
                <div >
                    <div>
                        <label >Full name</label>
                        <input type="text"  placeholder="Full Name" required />
                    </div>
                    <div>
                        <label >Email Address</label>
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div>
                        <label >Phone number</label>
                        <input type="tel" placeholder="Phone Number" />
                    </div>
                    <div>
                        <label >Subject</label>
                        <input type="text" placeholder="Subject"/>
                        </div>
                    <div>
                        <textarea placeholder="Your Message..."  ></textarea>
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </section>
            <Footer/>
        </>
    )
}

export default Form;