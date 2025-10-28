
import { motion } from 'framer-motion'

export default function Title() {
    return (
        <div className="flex flex-col gap-y-6 w-full px-4 sm:px-6 md:px-8 lg:w-9/12 lg:px-0">
            <motion.div 
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-center leading-tight">
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
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    I'm passionate about software engineering, with a deep fascination for 
                    distributed systems and building robust, scalable applications. On this site, 
                    I share my journey exploring the complexities of distributed architectures, 
                    system design, and the art of crafting resilient software that can handle 
                    real-world challenges at scale.
                </p>
                <div className='p-4 sm:p-6'>
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