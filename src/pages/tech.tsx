import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Tech = () => (
    <>
        <Header />
        <section className=" isolate px-6 lg:px-8 ">
            <div className="w-full  text-center py-10">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Tech Stack</h2>
            </div>
            <div className="mx-auto lg:px-45 grid md:grid-cols-2 lg:grid-cols-3  gap-10">
                <div className="rounded-lg shadow-md  h-full">
                    <h3 className="text-xl font-bold m-3 text-[hsl(var(--tech-accent))]">Frontend</h3>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/html5.svg" />
                            </div>
                            <span className="text-sm">HTML5</span>
                        </div>
                         <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/css3.svg" />
                            </div>
                            <span className="text-sm">CSS3</span>
                        </div>
                         <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/javascript.svg" />
                            </div>
                            <span className="text-sm">Javascript</span>
                        </div>
                         <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/react.svg" />
                            </div>
                            <span className="text-sm">React</span>
                        </div>
                         <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/vite.svg" />
                            </div>
                            <span className="text-sm">Vite</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/nodejs.svg" />
                            </div>
                            <span className="text-sm">NodeJs</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-md  h-full">
                    <h3 className="text-xl font-bold m-3 ">Backend</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/firebase.svg" />
                            </div>
                            <span className="text-sm">Firebase</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-md  h-full">
                    <h3 className="text-xl font-bold m-3 ">Tools</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/canva.svg" />
                            </div>
                            <span className="text-sm">Canva</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/figma.svg" />
                            </div>
                            <span className="text-sm">Figma</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/illustrator.svg" />
                            </div>
                            <span className="text-sm">Illustrator</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/photoshop.svg" />
                            </div>
                            <span className="text-sm">Photoshop</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/git.svg" />
                            </div>
                            <span className="text-sm">Git</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src="http://localhost:5173/images/tech/vscode.svg" />
                            </div>
                            <span className="text-sm">Vscode</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-10 text-center ">
                <p className="text-gray-600 text-sm/6 text-center leading-relaxed">
                    I'm a passionate developer who builds modern, responsive web apps with clean code and powerful UI.
                    I specialize in JavaScript, React, and full-stack solutions that solve real-world problems. <Link to="/" className="text-sm/6 font-semibold text-blue-800">Projects <span aria-hidden="true">→</span></Link>
                </p>
            </div>
        </section>
        <Footer />
    </>
)

export default Tech;