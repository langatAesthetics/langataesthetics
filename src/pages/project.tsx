import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Project = () => (
    <>
        <Header />
        <section className="  px-6 lg:px-8 ">
            <div className="  text-center p-10 lg:mx-40">
                <h1 className="text-2xl font-semibold  sm:text-5xl">Data to enrich your online business</h1>
                <p className="mt-8 text-lg font-medium  text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            </div>
        </section>
        <section className=" isolate px-6 lg:px-8 ">
            <div className="container mx-auto p-10 flex flex-wrap flex-col lg:flex-row  justify-evenly gap-10">
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
                <div className="w-full  text-center lg:w-1/4 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-white rounded-md m-4 shadow-md bg-black">Who I Am</h2>
                    <p className="text-gray-600 text-1xl text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>
            </div>
            <div className="w-full py-10 text-center ">
                <p className="text-gray-600 text-lg text-center leading-relaxed">
                    I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI.
                    I specialize in JavaScript, React, and full-stack solutions that solve real-world problems. <Link to="/" className="text-sm/6 font-semibold text-blue-800">Contact <span aria-hidden="true">→</span></Link>
                </p>
            </div>
        </section>
        <Footer />
    </>
)

export default Project;