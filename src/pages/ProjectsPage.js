import { Arrow } from "../components/Arrow";
import ImageSlider from "../components/ImageSlider";
import ProjectKeywords from "../components/ProjectKeywords";

export const ProjectsPage = () => {
    return (
        <>
            <div className="container mx-auto px-24 mt-20">
                <h1 className="text-7xl font-Clash text-left">What I've Done</h1>
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-6">Web Development</h2>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-custom-baby-blue px-8 pt-8 pb-14 shadow-project-shadow-left rounded-lg border-3 border-black">
                        <img src="/projects-img/StudyPal.png" alt="StudyPal website"></img>
                    </div>
                </div>

                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">StudyPal E-Learning Website</h3>
                    <ProjectKeywords bgColor="bg-yellow-200" keywords={["Vue.js", ".NET", "MongoDB"]} />
                    <p>StudyPal is an e-learning web app that connects students with tutors or study groups for collaboration in their courses. I worked in a team of 4, focusing on designing and developing the user profile feature.</p>
                    <a href="https://github.com/MinhNguyenD/StudyPal" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">Pawfect Match Website</h3>
                    <ProjectKeywords bgColor="bg-custom-baby-green" keywords={["React", "NodeJS", "AWS"]} />
                    <p>Pawfect Match simulates features which lets users browse pets by category and sends a personalized confirmation email after selection. The website is built and hosted using Docker and AWS.</p>
                    <a href="https://github.com/ltieu12/Pawfect-Match" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>

                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-red-500 px-8 pt-8 pb-14 shadow-project-shadow-right rounded-lg border-3 border-black">
                        <video className="w-full h-full border-3 border-black" autoplay controls>
                            <source src="/video/Pawfect Match.mp4"></source>
                            Pawfect Match run-through video    
                        </video>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-purple-400 px-8 pt-8 pb-14 shadow-project-shadow-left rounded-lg border-3 border-black">
                        <img src="/projects-img/Portfolio.png" alt="Portfolio website"></img>
                    </div>
                </div>

                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">Personal Portfolio</h3>
                    <ProjectKeywords bgColor="bg-orange-300" keywords={["React", "NodeJS", "Figma"]} />
                    <p>What can I say more? You're looking at it! This website summarizes all of my experiences as well as projects I have earned so far.</p>
                    <a href="https://github.com/ltieu12/my-portfolio" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-24 mt-20">
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-6">Mobile Design</h2>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-yellow-200 px-8 pt-8 pb-14 shadow-project-shadow-left rounded-lg border-3 border-black">
                        <img src="/projects-img/NavigateDal.png" alt="NavigateDal mobile design"></img>
                    </div>
                </div>

                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">NavigateDal App</h3>
                    <ProjectKeywords bgColor="bg-custom-baby-blue" keywords={["Figma", "UI Design"]} />
                    <p>NavigateDal is a mobile and wearable high-fidelity prototype for university navigation app, designed to help students navigate within campus. It is developed as part of a 4-month project with a team of 6, involving brainstorming, research, data collection and peer reviews.</p>
                    <a href="https://www.figma.com/proto/l8sXVSwaS0EB9phDbVE6Mx/NavigateDal-Prototype?node-id=2-3&p=f&t=faBlDwZvTmIhtKcm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit mobile prototype
                        <Arrow />
                    </a>
                    <a href="https://www.figma.com/proto/l8sXVSwaS0EB9phDbVE6Mx/NavigateDal-Prototype?node-id=162-34&p=f&t=bnlA8NPzAi9KWwOj-1&scaling=scale-down&content-scaling=fixed&page-id=162%3A33" className="text-2xl inline-block inline-flex items-center gap-2 hover:underline">Visit wearable prototype
                        <Arrow />
                    </a>
                </div>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">SafelyHome App</h3>
                    <ProjectKeywords bgColor="bg-red-300" keywords={["Figma", "UI Design"]} />
                    <p>SafelyHome is a high-fidelity mobile app prototype that offers safe routes for users navigating alone. It is developed over 4 months in collaboration with a peer, focusing on research and design for vulnerable population, specifically women.</p>
                    <a href="https://www.figma.com/proto/o1zN2dlLb7cmTb3UQ26YRY/SafelyHome-Design?node-id=31-547&p=f&t=5xbL6P1IEwXCIF5c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A547" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit prototype
                        <Arrow />
                    </a>
                </div>

                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-lime-300 px-8 pt-8 pb-14 shadow-project-shadow-right rounded-lg border-3 border-black">
                        <img src="/projects-img/SafelyHome.png" alt="SafelyHome mobile design"></img>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-24 mt-20 mb-32">
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-2">Coloring</h2>
                <p className="text-left mb-6">Please enjoy some colors I have done as a hobby!</p>
                <ImageSlider />
            </div>
        </>
    );
}