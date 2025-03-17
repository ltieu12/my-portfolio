import { Arrow } from "../components/Arrow";
import ImageSlider from "../components/ImageSlider";
import WebCard from "../components/project-cards/WebCard";
import ProjectKeywords from "../components/ProjectKeywords";

export const ProjectsPage = () => {
    return (
        <>
            {/* Web Dev Section */}
            <div className="container mx-auto px-10 lg:px-24 mt-20">
                <h1 className="text-6xl lg:text-7xl font-Clash text-left">What I've Done</h1>
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-6">Web Development</h2>
            </div>

            <WebCard 
                title="StudyPal E-Learning Website"
                description="StudyPal is an e-learning web app that connects students with tutors or study groups for collaboration in their courses. I worked in a team of 4, focusing on designing and developing the user profile feature." 
                projectBgColor="custom-baby-blue"
                kwBgColor="bg-yellow-200"
                keywords={["Vue.js", ".NET 6", "MongoDB"]}
                imgSrc="/projects-img/StudyPal.png"
                prototypeLink="https://www.figma.com/proto/E1mXKGUZki5KgCGzkU0Igc/StudyPal-Design?node-id=14-3&p=f&t=MstTTGzqGSkY1QPp-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A2&starting-point-node-id=14%3A3"
                githubLink="https://github.com/MinhNguyenD/StudyPal"
            />

            <WebCard 
                title="Pawfect Match Website"
                description="Pawfect Match simulates features which lets users browse pets by category and sends a personalized confirmation email after selection. The website is built and hosted using Docker and AWS." 
                projectBgColor="red-500"
                kwBgColor="bg-custom-baby-green"
                keywords={["React", "NodeJS", "AWS"]}
                videoSrc="/video/Pawfect Match.mp4"
                githubLink="https://github.com/ltieu12/Pawfect-Match"
                isReverse
            />

            <WebCard 
                title="Personal Portfolio"
                description="What can I say more? You're looking at it! This website summarizes all of my experiences as well as projects I have done so far." 
                projectBgColor="purple-400"
                kwBgColor="bg-orange-300"
                keywords={["React", "Tailwind", "Figma"]}
                imgSrc="/projects-img/Portfolio.png"
                prototypeLink="https://www.figma.com/proto/eiOV8lAKvW46a7AHdt5b7A/Portfolio?node-id=2-2&t=6kOpVcyWhAGAz4q7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                githubLink="https://github.com/ltieu12/my-portfolio"
            />

            {/* Mobile Design Section */}
            <div className="container mx-auto px-10 lg:px-24 mt-18">
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-6">Mobile Design</h2>
            </div>

            <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 lg:flex lg:flex-row justify-between items-center gap-10'>
                <div className="lg:max-w-1/2 text-left space-y-5">
                    <div className="bg-yellow-200 max-w-max px-3 md:px-5 pt-4 shadow-dark-shadow-lg-left border-3 border-black">
                        <img src="/projects-img/NavigateDal.png" alt="NavigateDal mobile design"></img>
                    </div>
                </div>

                <div className="lg:w-1/2 mt-10 lg:mt-0 text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">NavigateDal App</h3>
                    <ProjectKeywords bgColor="bg-custom-baby-blue" keywords={["Figma", "UI Design"]} />
                    <p>NavigateDal is a mobile and wearable high-fidelity prototype for university navigation app, designed to help students navigate within campus. It is developed as part of a 4-month project with a team of 6, involving brainstorming, research, data collection and peer reviews.</p>
                    <a href="https://www.figma.com/proto/l8sXVSwaS0EB9phDbVE6Mx/NavigateDal-Prototype?node-id=2-3&p=f&t=faBlDwZvTmIhtKcm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1" target="_blank" className="text-xl md:text-2xl pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit mobile prototype
                        <Arrow />
                    </a>
                    <br />
                    <a href="https://www.figma.com/proto/l8sXVSwaS0EB9phDbVE6Mx/NavigateDal-Prototype?node-id=162-34&p=f&t=bnlA8NPzAi9KWwOj-1&scaling=scale-down&content-scaling=fixed&page-id=162%3A33" target="_blank" className="text-xl md:text-2xl inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit wearable prototype
                        <Arrow />
                    </a>
                </div>
            </div>

            <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 flex flex-col-reverse lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-10'>
                <div className="lg:w-1/2 text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">SafelyHome App</h3>
                    <ProjectKeywords bgColor="bg-red-300" keywords={["Figma", "UI Design"]} />
                    <p>SafelyHome is a high-fidelity mobile app prototype that offers safe routes for users navigating alone. It is developed over 4 months in collaboration with a peer, focusing on research and design for vulnerable population, specifically women.</p>
                    <a href="https://www.figma.com/proto/o1zN2dlLb7cmTb3UQ26YRY/SafelyHome-Design?node-id=31-547&p=f&t=5xbL6P1IEwXCIF5c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A547" target="_blank" className="text-xl md:text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit prototype
                        <Arrow />
                    </a>
                </div>

                <div className="lg:max-w-1/2 text-left space-y-5">
                    <div className="bg-lime-300 max-w-max px-3 md:px-5 py-4 shadow-dark-shadow-lg-left lg:shadow-dark-shadow-lg border-3 border-black">
                        <img src="/projects-img/SafelyHome.png" alt="SafelyHome mobile design"></img>
                    </div>
                </div>
            </div>

            {/* Coloring Section */}
            <div className="container mx-auto px-10 lg:px-24 mt-18 mb-32">
                <h2 className="text-4xl font-Clash font-semibold text-left mt-14 mb-2">Coloring</h2>
                <p className="text-left mb-6">Please enjoy some colors I have done as a hobby!</p>
                <ImageSlider />
            </div>
        </>
    );
}