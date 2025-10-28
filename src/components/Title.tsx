
import { motion } from 'framer-motion'

export default function Title() {
    return (
        <div className="flex flex-col gap-y-6 w-9/12">
            <motion.div 
                className=" flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl font-bold italic text-center ">
                    I'm <a href="https://github.com/magistraapta" target="_blank" rel="noopener noreferrer" className="underline">@magistraapta</a>, Software Engineer focused on building web 
                    applications and mobile applications.
                </h1>
            </motion.div>

            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <p className="text-lg">
                    This site is where I publish words and photos. The section that's
                    most updated most often is atoms, small multimedia particles
                    reminiscent of a Twitter feed. I update my now page monthly according
                    to what I'm working on and thinking about. I publish a newsletter as
                    often as I can.
                </p>
                <div className='p-6'>
                    <SocialMedia />
                </div>
            </motion.div>
        </div>
    )
}

function SocialMedia() {
    return (
        <div className="flex gap-x-4 items-center justify-center">
            <a href="https://github.com/magistraapta" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://x.com/magistrapta" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/magistraapta" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    )
}