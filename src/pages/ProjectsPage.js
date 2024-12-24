import { Arrow } from "../components/Arrow";

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
                    <div className="inline-flex items-center gap-4 pb-6">
                        <p className="bg-yellow-200 px-4 border-2 border-black rounded-lg">Vue.js</p>
                        <p className="bg-yellow-200 px-4 border-2 border-black rounded-lg">.NET</p>
                        <p className="bg-yellow-200 px-4 border-2 border-black rounded-lg">MongoDB</p>
                    </div>
                    <p>StudyPal is an e-learning web app that connects students with tutors or study groups for collaboration in their courses. I worked in a team of 4, focusing on designing and developing the user profile feature.</p>
                    <a href="https://github.com/MinhNguyenD/StudyPal" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>
            </div>

            <div className='container mx-auto px-24 mb-32 flex justify-between items-center gap-10'>
                <div className="md:w-1/2 md:text-left text-left space-y-4">
                    <h3 className="text-3xl font-Clash font-semibold">Pawfect Match Website</h3>
                    <div className="inline-flex items-center gap-4 pb-6">
                        <p className="bg-custom-baby-green px-4 border-2 border-black rounded-lg">React</p>
                        <p className="bg-custom-baby-green px-4 border-2 border-black rounded-lg">NodeJS</p>
                        <p className="bg-custom-baby-green px-4 border-2 border-black rounded-lg">AWS</p>
                    </div>
                    <p>Pawfect Match simulates features which lets users browse pets by category and sends a personalized confirmation email after selection. The website is built and hosted using Docker and AWS.</p>
                    <a href="https://github.com/ltieu12/Pawfect-Match" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>

                <div className="md:w-1/2 md:text-left space-y-5">
                    <div className="bg-red-500 px-8 pt-8 pb-14 shadow-project-shadow-right rounded-lg border-3 border-black">
                        <img src="/projects-img/StudyPal.png" alt="StudyPal website"></img>
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
                    <div className="inline-flex items-center gap-4 pb-6">
                        <p className="bg-orange-300 px-4 border-2 border-black rounded-lg">React</p>
                        <p className="bg-orange-300 px-4 border-2 border-black rounded-lg">NodeJS</p>
                        <p className="bg-orange-300 px-4 border-2 border-black rounded-lg">Figma</p>
                    </div>
                    <p>What can I say more? You're looking at it! This website summarizes all of my experiences as well as projects I have earned so far.</p>
                    <a href="https://github.com/ltieu12/my-portfolio" className="text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline">Visit GitHub
                        <Arrow />
                    </a>
                </div>
            </div>
        </>
    );
}