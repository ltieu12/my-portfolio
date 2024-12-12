export default function NavBar() {
    return (
        <>
            <nav>
                <div className='container mx-auto py-6 px-4 h-24 flex justify-between items-center'>
                    <div className='text-4xl font-Clash font-medium'>LamTieu</div>
                    <div className="w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col md:p-0 md:flex-row md:space-x-8">
                            <li>
                                <a href='/' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">About</a>
                            </li>
                            <li>
                                <a href='/projects' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Projects</a>
                            </li>
                            <li>
                                <a href='/contact' className="px-2 py-1 rounded-xl border-2 border-white hover:text-yellow-200 hover:border-black hover:bg-purple-500 hover:shadow-dark-shadow">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='border-b-4 border-black'></div>
        </>   
    );
}