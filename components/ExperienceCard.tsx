import React from 'react';
import { motion } from 'framer-motion';
import { headerVariants } from '../utils/motion';

type ExperienceProps = {
	title: string;
	company_name: string;
	icon: string;
	date: string;
	points: string[];
	techused: string[];
};
const ExperienceCard = (props: ExperienceProps) => {
	const { title, company_name, icon, date, points, techused } = props;
	return (
		<article
			className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[900px] max-h-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-hide'
		>
			<motion.div
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='flex flex-col items-center gap-8'
			>
				<img
					className='max-w-xs object-cover object-center'
					src={icon}
					alt={company_name}
				/>
				<div className='px-0 md:px-10'>
					<h4 className='md:text-2xl font-light'>
						{title} - <span className='font-bold md:text-xl'>{company_name}</span>
					</h4>
					<div className='flex space-x-2 my-2'>
						{techused.map((tech, index) => (
							<img
								key={index}
								className='w-6 md:w-12 h-6 md:h-12 object-contain'
								src={tech}
								alt={tech}
							/>
						))}
					</div>
					<p className='uppercase py-2 md:py-5 text-gray-500'>{date}</p>
					<ul className='list-disc space-y-4 ml-5 md:text-lg'>
						{points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				</div>
			</motion.div>
		</article>
	);
};

export default ExperienceCard;
