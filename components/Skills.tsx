import React from 'react';
import { motion } from 'framer-motion';
import { headerVariants, slideIn } from '../utils/motion';
import { skills } from '../constants';

type SkillProps = {
    name: string;
    icon: string;
    level: string;
    index: number;
  };
const Skill = (props: SkillProps) => {
    const { name, icon, level, index } = props;
    return (
        <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: false }}
            variants={slideIn('down', 'tween', index * 0.1, 1)}
            className='group relative flex cursor-pointer'
        >
            <img src={icon} alt={name} className='w-[80px] h-[80px] object-contain rounded-full bg-[#3c3c3c] p-3 shadow-2xl filter group-hover:grayscale transition duration-300 ease-in-out' />
            <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[#3c3c3c] w-[80px] h-[80px] object-contain rounded-full ">
                <div className="flex items-center justify-center h-full">
                    <p className='text-2xl font-bold text-white opacity-100'>{level}%</p>
                </div>
            </div>
        </motion.div>
    )
}
const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex justify-center items-center gap-5 flex-col h-screen max-w-7xl px-10 mx-auto'
		>
			<motion.h3
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
				className='uppercase tracking-[20px] text-gray-500 text-2xl'
			>
				Skills
            </motion.h3>
            <motion.h3
                variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
                className="uppercase tracking-[3px] text-gray-500 text-sm text-center">
                Hover over a skill for currency proficiency
            </motion.h3>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-7">
                {skills.map((skill, index) => (
                    <Skill key={skill.name} index={index} {...skill} />
                ))}
            </div>
		</motion.div>
	);
};

export default Skills;
