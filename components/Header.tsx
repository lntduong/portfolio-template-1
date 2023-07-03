import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import { headerVariants } from '../utils/motion';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='px-5 py-2 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<motion.div
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false }}
				className='flex flex-row items-center'
			>
				{socials.map((social, index) => (
					<SocialIcon
						key={index}
						url={social.url}
						fgColor={social.color}
						bgColor={social.background}
					/>
				))}
			</motion.div>

			<motion.div
				variants={headerVariants}
				initial='hidden'
				whileInView='show'
				className='flex flex-row items-center text-gray-300 cursor-pointer'
			>
				<SocialIcon
					network='email'
					fgColor='gray'
					bgColor='transparent'
					className='cursor-pointer'
				/>
				<div>
					<Link href='#contact'>
						<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
							Get In Touch
						</p>
					</Link>
				</div>
			</motion.div>
		</header>
	);
};

export default Header;
