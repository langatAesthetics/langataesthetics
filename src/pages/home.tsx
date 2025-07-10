import Header from "../components/header";
import Carousel from "../components/carousel";

const Home = () => (
    <>
        <Header />
        <section className="  px-6 lg:px-8 ">
            <div className= "  sm:py-32 lg:p-50" >
                <div className=" shadow-md rounded-lg text-center p-10 ">
                    <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-5xl">Data to enrich your online business</h1>
                    <p className="mt-8 text-lg font-medium  text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Projects</a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">Tech stack <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </section>
        <section className=" isolate px-6 lg:px-8 ">
            <div className="container mx-auto p-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2">
                    <img
                        src="."
                        alt="About section image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Who I Am</h2>
                    <p className="text-gray-600 text-lg text-center leading-relaxed">
                        I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI. I specialize in JavaScript, React, and full-stack solutions that solve real-world problems.
                    </p>
                </div>

            </div>
        </section>
        <Carousel/>
    </>
)

export default Home;