import React from 'react';
import { motion } from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';
import { headerVariants } from '../utils/motion';
import { projects } from '../constants';
import Link from 'next/link';

type ProjectProps = {
	index: number;
	name: string;
	link: string;
	image: string;
	techused: string[];
	details: string[];
};

const Project = (props: ProjectProps) => {
	const { index, name, link, image, techused, details } = props;
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[900px] max-h-[550px] snap-center bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-hide'>
			<motion.div
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
				className='flex flex-col items-center'
			>
				<Link
					href={link}
					className='flex flex-col items-center'
					target='_blank'
				>
					<img
						className='w-[500px] h-auto object-contain rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'
						src={image}
						alt={name}
					/>
					<div className='px-0 md:px-10 my-2'>
						<h4 className='text-2xl font-bold'>{name}</h4>
					</div>
				</Link>
				<div className='flex space-x-2 my-4 '>
					{techused.map((tech, index) => (
						<img
							key={index}
							className='w-10 h-10 object-contain'
							src={tech}
							alt={`${index}-icon`}
						/>
					))}
				</div>
				<ul className='list-none space-y-4 ml-5 md:text-lg text-center'>
					{details.map((detail, index) => (
						<li key={index}>{detail}</li>
					))}
				</ul>
			</motion.div>
		</article>
	);
};

const Projects = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex justify-center items-center gap-5 flex-col h-screen max-w-7xl md:px-10 px-4 mx-auto'
		>
			<motion.h3
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
				className='uppercase tracking-[20px] text-gray-500 text-2xl'
			>
				Projects
			</motion.h3>
			{/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-hide"> */}
			<ScrollContainer className='scroll-container w-full flex space-x-5 overflow-x-scroll md:p-10 scrollbar-hide'>
				{projects.map((project, index) => (
					<Project key={index} index={index} {...project} />
				))}
			</ScrollContainer>
			{/* </div> */}
		</motion.div>
	);
};

export default Projects;
