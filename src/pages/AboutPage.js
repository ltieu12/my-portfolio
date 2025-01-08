import Skill from "../components/Skill";
import { Arrow } from "../components/Arrow";

export const AboutPage = () => {
    return (
        <>
            <div className='container mx-auto px-10 mt-28 md:px-24 lg:mt-20 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div className="pb-16 lg:pb-0 lg:w-1/2 text-left space-y-5">
                    <h1 className="text-6xl md:text-7xl font-Clash">Hi, I’m Lam!</h1>
                    <p className="text-lg">
                    I do some coding and designing.<br />Grab a coffee, explore my projects, and let's build something amazing!
                    </p>
                    <a href="https://drive.google.com/file/d/19JBGAxuQzqHNZVe1E5gOGGInXz0iooBN/view" className="inline-flex items-center px-4 py-2 font-medium bg-lime-200 border-3 border-black rounded-lg shadow-dark-shadow hover:bg-lime-300">My Resume 
                        <Arrow />
                    </a>
                </div>
                <img src="/Profile Pic.png" alt="Profile Pic"></img>
            </div>

            <div className='container mx-auto px-10 md:px-24 mt-32 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center'>
                <img src="/Browser.png" alt="About me browser illustration"></img>
                <div className="pb-16 lg:p-0 lg:w-1/2 text-left space-y-5 lg:ml-16">
                    <h2 className="text-5xl md:text-6xl font-Clash">About Me</h2>
                    <p className="text-lg">My name is Lam Tieu. I am passionate about web development and UX/UI design. I am more experienced as a developer due to my CS background, but designing has always been my interest that I self-learn and improve myself everyday.
                        <br /><br />I live in Canada but originally from Vietnam. Let's connect and I'll tell you all the good dishes that you should try!
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-32 pt-16 pb-24 px-1 bg-custom-orange border-y-4 border-black">
                <h2 className="text-6xl md:text-7xl font-Clash">What I Know</h2>
                <div className="max-w-sm lg:max-w-4xl mx-auto grid grid-cols-2 gap-y-4 md:gap-x-10 lg:grid-cols-4 lg:gap-y-8 pt-12 justify-items-center">
                    <Skill browserImgSrc={"/skills-img/React Icon.png"} mobileImgSrc={"/skills-img/React Icon (small).png"} altText={"React Logo"} />
                    <Skill browserImgSrc={"/skills-img/Vue.js Icon.png"} mobileImgSrc={"/skills-img/Vue.js Icon (small).png"} altText={"Vue.js Logo"} />
                    <Skill browserImgSrc={"/skills-img/Angular Icon.png"} mobileImgSrc={"/skills-img/Angular Icon (small).png"} altText={"Angular Logo"} />
                    <Skill browserImgSrc={"/skills-img/Figma Icon.png"} mobileImgSrc={"/skills-img/Figma Icon (small).png"} altText={"Figma Logo"} />
                    <Skill browserImgSrc={"/skills-img/NET Icon.png"} mobileImgSrc={"/skills-img/NET Icon (small).png"} altText={".NET Logo"} />
                    <Skill browserImgSrc={"/skills-img/Python Icon.png"} mobileImgSrc={"/skills-img/Python Icon (small).png"} altText={"Python Logo"} />
                    <Skill browserImgSrc={"/skills-img/AWS Icon.png"} mobileImgSrc={"/skills-img/AWS Icon (small).png"} altText={"AWS Logo"} />
                    <Skill browserImgSrc={"/skills-img/GitHub Icon.png"} mobileImgSrc={"/skills-img/GitHub Icon (small).png"} altText={"GitHub Logo"} />
                </div>
            </div>

            <div className="container mx-auto my-32 px-18 lg:px-28 gap-20 flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:w-3/4 lg:text-left space-y-5">
                    <h2 className="text-5xl font-Clash pb-2">Education</h2>
                    <p className="font-bold text-lg pb-10 lg:pb-0">
                        <span className="text-red-500 inline-block pb-2">2020 - 2024</span><br />
                        Bachelor of Computer Science <br /><span className="font-normal">Dalhousie University</span>
                    </p>

                    <h2 className="text-5xl font-Clash pt-12">Certificates</h2>
                    <p className="font-bold text-lg py-2">
                        <span className="text-red-500 inline-block pb-2">Nov 2024</span><br />
                        Microsoft Azure Fundamentals - AZ-900<br />
                        <span className="font-normal">Microsoft</span>
                    </p>
                    
                    <p className="font-bold text-lg py-2 pb-10 lg:pb-0">
                        <span className="text-red-500 inline-block pb-2">Dec 2024</span><br />
                        Communication Technologies and Cyber Security<br />
                        <span className="font-normal">Dalhousie University</span>
                    </p>
                </div>

                <div className="lg:w-1/2 lg:text-left space-y-5">
                    <h2 className="text-5xl font-Clash">Experiences</h2>
                    <div className="lg:flex py-2">
                        <img className="hidden lg:block lg:h-max lg:pt-2" src="/Timeline.png" alt="Timeline illustration"></img>
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