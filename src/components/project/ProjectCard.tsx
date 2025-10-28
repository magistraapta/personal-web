import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, image, link, index = 0 }: ProjectCardProps) {
    return (
        <motion.div 
            className="flex flex-col gap-y-3 bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
            }}
        >
            <img src={image} alt="Project Image" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium inline-block mt-auto">View Project →</a>
        </motion.div>
    )
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    index?: number;
}

