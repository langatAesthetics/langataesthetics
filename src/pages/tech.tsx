import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import html5 from "../../public/images/tech/html5.svg"
import css3 from "../../public/images/tech/css3.svg"
import react from "../../public/images/tech/react.svg"
import javascript from "../../public/images/tech/javascript.svg"
import vite from "../../public/images/tech/vite.svg"
import illustrator from "../../public/images/tech/illustrator.svg"
import git from "../../public/images/tech/git.svg"
import photoshop from "../../public/images/tech/photoshop.svg"
import nodejs from "../../public/images/tech/nodejs.svg"
import figma from "../../public/images/tech/figma.svg"
import firebase from "../../public/images/tech/firebase.svg"
import canva from "../../public/images/tech/canva.svg"
import vscode from "../../public/images/tech/vscode.svg"


const Tech = () => {

    return (
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
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={html5} />
                                </div>
                                <span className="text-sm">HTML5</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={css3} />
                                </div>
                                <span className="text-sm">CSS3</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={javascript} />
                                </div>
                                <span className="text-sm">Javascript</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={react} />
                                </div>
                                <span className="text-sm">React</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={vite} />
                                </div>
                                <span className="text-sm">Vite</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={nodejs} />
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
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={firebase} />
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
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={canva} />
                                </div>
                                <span className="text-sm">Canva</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={figma}/>
                                </div>
                                <span className="text-sm">Figma</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={illustrator} />
                                </div>
                                <span className="text-sm">Illustrator</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={photoshop}/>
                                </div>
                                <span className="text-sm">Photoshop</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={git}/>
                                </div>
                                <span className="text-sm">Git</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <img alt="React.js" className="w-6 h-6 object-contain" width="24" height="24" src={vscode}/>
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
}

export default Tech;