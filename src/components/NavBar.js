export default function NavBar() {
    return (
        <>
            <nav>
                <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
                    <div className='text-xl font-bold'>My Website</div>
                    <div className="w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col md:p-0 md:flex-row md:space-x-8">
                            <li>
                                <a href='#' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Home</a>
                            </li>
                            <li>
                                <a href='#' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Projects</a>
                            </li>
                            <li>
                                <a href='#' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='border-b-4 border-black'></div>
            <div className='container mx-auto px-20 mt-20 flex justify-between items-center'>
                <div className="md:w-1/2 text-center md:text-left space-y-5">
                    <h1 className="text-5xl font-bold">Hi, I’m Lam!</h1>
                    <p className="text-lg">
                    I am a 4th year Computer Science student.<br />I code and design.
                    </p>
                </div>
            </div>
        </>   
    );
}