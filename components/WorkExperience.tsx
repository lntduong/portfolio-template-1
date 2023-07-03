import React from 'react';
import { motion } from 'framer-motion';
import { headerVariants } from '../utils/motion';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants';
import ScrollContainer from 'react-indiana-drag-scroll';

const WorkExperience = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex justify-start items-center gap-5 flex-col h-screen max-w-7xl md:px-10 px-4 mx-auto'
		>
			<motion.h3
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
				className='uppercase tracking-[15px] text-gray-500 text-2xl'
			>
				Experience
			</motion.h3>
			<ScrollContainer className='scroll-container w-full flex space-x-5 overflow-x-scroll md:p-10 scrollbar-hide'>
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} {...experience} />
				))}
			</ScrollContainer>
		</motion.div>
	);
};

export default WorkExperience;
