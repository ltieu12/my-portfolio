import Skill from "../components/Skill";


export const AboutPage = () => {
    return (
        <>
            <div className='container mx-auto px-24 mt-20 flex justify-between items-center'>
                <div className="md:w-1/2 md:text-left space-y-5">
                    <h1 className="text-7xl font-Clash">Hi, I’m Lam!</h1>
                    <p className="text-lg">
                    I do some coding and designing.<br />Grab a coffee, explore my projects, and let's build something amazing!
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 font-medium bg-lime-200 border-3 border-black rounded-lg shadow-dark-shadow hover:bg-lime-300">My Resume 
                        <svg className="ml-2" width="25" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.94 13.1783C29.2525 12.8658 29.428 12.4419 29.428 12C29.428 11.5581 29.2525 11.1342 28.94 10.8217L19.5117 1.39333C19.3579 1.23415 19.174 1.10718 18.9707 1.01983C18.7673 0.932483 18.5486 0.886506 18.3273 0.884583C18.106 0.882659 17.8866 0.924829 17.6817 1.00863C17.4769 1.09243 17.2908 1.21619 17.1343 1.37268C16.9779 1.52916 16.8541 1.71525 16.7703 1.92008C16.6865 2.1249 16.6443 2.34437 16.6462 2.56567C16.6482 2.78697 16.6941 3.00567 16.7815 3.20901C16.8688 3.41235 16.9958 3.59626 17.155 3.75L23.7383 10.3333L1.66667 10.3333C1.22464 10.3333 0.800716 10.5089 0.488157 10.8215C0.175596 11.1341 1.90735e-06 11.558 1.90735e-06 12C1.90735e-06 12.442 0.175596 12.866 0.488157 13.1785C0.800716 13.4911 1.22464 13.6667 1.66667 13.6667L23.7383 13.6667L17.155 20.25C16.8514 20.5643 16.6834 20.9853 16.6872 21.4223C16.691 21.8593 16.8663 22.2774 17.1753 22.5864C17.4843 22.8954 17.9023 23.0707 18.3393 23.0745C18.7763 23.0783 19.1973 22.9103 19.5117 22.6067L28.94 13.1783Z" fill="black"/>
                        </svg>
                    </a>
                </div>
                <img src="/Profile Pic.png" alt="Profile Pic"></img>
            </div>

            <div className='container mx-auto px-24 mt-32 flex justify-between items-center'>
                <img src="/Browser.png" alt="About me browser illustration"></img>
                <div className="md:w-1/2 md:text-left space-y-5 ml-16">
                    <h2 className="text-6xl font-Clash">About Me</h2>
                    <p className="text-lg">My name is Lam Tieu. I am passionate about web development and UX/UI design. I am more experienced as a developer due to my CS background, but designing has always been my interest that I self-learn and improve myself everyday.
                        <br /><br />I live in Canada but originally from Vietnam. Let's connect and I'll tell you all the good dishes that you should try!
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-32 pt-16 pb-24 bg-custom-orange border-y-4 border-black">
                <h2 className="text-7xl font-Clash">What I Know</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-4 gap-y-8 pt-12 justify-items-center">
                    <Skill imgSrc={"/skills-img/React Icon.png"} altText={"React Logo"} />
                    <Skill imgSrc={"/skills-img/Vue.js Icon.png"} altText={"Vue.js Logo"} />
                    <Skill imgSrc={"/skills-img/Angular Icon.png"} altText={"Angular Logo"} />
                    <Skill imgSrc={"/skills-img/Figma Icon.png"} altText={"Figma Logo"} />
                    <Skill imgSrc={"/skills-img/NET Icon.png"} altText={".NET Logo"} />
                    <Skill imgSrc={"/skills-img/Python Icon.png"} altText={"Python Logo"} />
                    <Skill imgSrc={"/skills-img/AWS Icon.png"} altText={"AWS Logo"} />
                    <Skill imgSrc={"/skills-img/GitHub Icon.png"} altText={"GitHub Logo"} />
                </div>
            </div>

            <div className="container mx-auto my-32 px-28 gap-20 flex justify-between">
                <div className="md:w-3/4 md:text-left space-y-5">
                    <h2 className="text-5xl font-Clash pb-2">Education</h2>
                    <p className="font-bold text-lg">
                        <span className="text-red-500 inline-block pb-2">2020 - 2024</span><br />
                        Bachelor of Computer Science <br /><span className="font-normal">Dalhousie University</span>
                    </p>

                    <h2 className="text-5xl font-Clash pt-12">Certificates</h2>
                    <p className="font-bold text-lg py-2">
                        <span className="text-red-500 inline-block pb-2">Nov 2024</span><br />
                        Microsoft Azure Fundamentals - AZ-900<br />
                        <span className="font-normal">Microsoft</span>
                    </p>
                    
                    <p className="font-bold text-lg py-2">
                        <span className="text-red-500 inline-block pb-2">Dec 2024</span><br />
                        Communication Technologies and Cyber Security<br />
                        <span className="font-normal">Dalhousie University</span>
                    </p>
                </div>

                <div className="md:w-1/2 md:text-left space-y-5">
                    <h2 className="text-5xl font-Clash">Experiences</h2>
                    <div className="flex py-2">
                        <img className="h-max pt-2" src="/Timeline.png" alt="About me browser illustration"></img>
                        <div className="px-8">
                            <p className="font-bold text-lg pb-12">
                                <span className="text-red-500 inline-block pb-2">Sep 2023 - Dec 2023</span><br />
                                Software Developer<br /><span className="font-normal">Ocean Frontier Institute</span>
                            </p>
                            
                            <p className="font-bold text-lg pb-14">
                                <span className="text-red-500 inline-block pb-2">Jan 2023 - May 2023</span><br />
                                Intern Software Developer<br /><span className="font-normal">Quest Software Inc.</span>
                            </p>
                            
                            <p className="font-bold text-lg">
                                <span className="text-red-500 inline-block pb-2">May 2022 - Aug 2022</span><br />
                                Intern Software Developer<br /><span className="font-normal">Quest Software Inc.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}