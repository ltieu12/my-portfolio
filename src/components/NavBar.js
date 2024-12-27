import { useState } from "react";

export default function NavBar() {
    const[isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav>
                <div className='container mx-auto py-6 px-4 h-24 flex justify-between items-center'>
                    <a href="/" className='text-3xl md:text-4xl font-Clash'>LamTieu</a>

                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-black">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    {/* Desktop NavBar */}
                    <div className="w-full hidden md:block md:w-auto">
                        <ul className="flex flex-col md:p-0 md:flex-row md:space-x-8">
                            <li>
                                <a href="/" className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">About</a>
                            </li>
                            <li>
                                <a href="/projects" className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Projects</a>
                            </li>
                            <li>
                                <a href="/contact" className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile NavBar */}
                {isOpen && (
                    <div className="md:hidden mb-4">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <a href="/" className="px-2 py-1 hover:rounded-xl hover:text-yellow-200 hover:border-2 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="px-2 py-1 hover:rounded-xl hover:text-yellow-200 hover:border-2 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className='border-b-4 border-black'></div>
        </>   
    );
}