import React from 'react';
import { motion } from 'framer-motion';
import { headerVariants } from '../utils/motion';

const About = () => {
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
				About
			</motion.h3>
			<div className='flex flex-col gap-5 md:flex-row relative justify-evenly mx-auto items-center text-center md:text-left '>
				<motion.img
					initial={{
						x: -200,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					viewport={{ once: false }}
					src='/about-avatar.jpg'
					className='md:mb-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover md:rounded-lg md:w-64 md:h-auto xl:w-[400px] xl:h-[500px]'
				/>
                <motion.div
                    initial={{
						y: -200,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{
						y: 0,
						opacity: 1,
					}}
					viewport={{ once: false }}
                    className='space-y-10 px-0 md:px-10'>
					<p className='md:text-xl leading-8 xl:text-center'>
						I am a skilled software developer with experience in{' '}
						<span className='underline decoration-double decoration-[#F7AB0A]'>
							FrontEnd
						</span>
						, and expertise in frameworks like{' '}
						<span className='underline  decoration-double decoration-[#F7AB0A]'>
							React, Node.js, and PHP
						</span>
						. I am a quick learner and constantly strive to improve the{' '}
						<span className='underline decoration-double decoration-[#F7AB0A]'>
							UI/UX experience
						</span>{' '}
						through my daily efforts. My goal is to create modern, interesting,
						and user-friendly interfaces. Additionally, I am committed to
						continuous learning and improving my skills.
					</p>
                    <blockquote
						className='p-1 md:p-4 md:my-4 bg-[#292929] rounded-md text-white'>
						<svg aria-hidden="true" className="w-5 h-5 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                        <p
                            className='md:text-xl italic font-medium leading-relaxed '>
							Let&apos;s work together to bring your ideas to life!
						</p>
					</blockquote>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
