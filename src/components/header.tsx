import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/react.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" inset-x-0 top-0 z-50 shadow-md sticky bg-white">
            <nav className="flex items-center justify-between p-6 lg:px-8">
                <div>
                    <Link to="/"><img src={logo} alt="My-logo" /></Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/"  className="text-sm/6 font-semibold text-gray-900">Home</Link>
                    <Link to="/about" className="text-sm/6 font-semibold text-gray-900">About</Link>
                    <Link to="/projects" className="text-sm/6 font-semibold text-gray-900">Projects</Link>
                    <Link to="/tech stack" className="text-sm/6 font-semibold text-gray-900">Tech</Link>
                </div>
                <div className=" hidden lg:inline-block">
                    <Link to="/" className="text-sm/6 font-semibold text-gray-900">Download Resume <span aria-hidden="true">→</span></Link>
                </div>

                {/*Hamburger Button*/}
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setIsOpen(true)} className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                {/*Mobile Menu*/}
                {isOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link to="/">
                                    <img src={logo} alt="My-Logo" />
                                </Link>
                                <button type="button" onClick={() => setIsOpen(false)} className="-m-2.5 flex rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</Link>
                                        <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</Link>
                                        <Link to="/projects" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Projects</Link>
                                        <Link to="/tech stack" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Tech</Link>
                                    </div>
                                    <div className="py-6">
                                        <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
export default Header;