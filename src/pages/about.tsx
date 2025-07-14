import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const About = () => (
    <>
        <Header />
        <section className=" isolate px-6 lg:px-8 ">
            <div className="container mx-auto p-10 flex flex-col  items-center gap-10">
                <div className="w-full lg:w-1/2">
                    <img src="http://localhost:5173/images/about/Screenshot%202025-02-01%20103520.png" alt="About section image" className="w-full h-auto rounded-lg shadow-md"/>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Who I Am</h2>
                    <p className="text-gray-600 text-sm/6 text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI.
                        I specialize in JavaScript, React, and full-stack solutions that solve real-world problems. <Link to="/" className="text-sm/6 font-semibold text-blue-800">Contact <span aria-hidden="true">→</span></Link>
                    </p>
                </div>

            </div>
            <div className="my-10 flex items-center justify-center gap-x-6">
                <Link to="/projects" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Projects</Link>
            </div>
        </section>
        <Footer />
    </>
)

export default About;