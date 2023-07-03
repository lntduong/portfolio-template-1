import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { headerVariants } from '../utils/motion';


const Hero = () => {
	const [text, count] = useTypewriter({
		words: ['Web Developer', 'Designer', 'Web Design'],
		loop: true,
		delaySpeed: 2000,
	});
	return (
        <motion.div
            variants={headerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false }}
            className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden mx-auto'>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="/hero-avatar.jpg" alt="avatar" />
            <div className="z-20 md:flex-none flex-[0.5]">
                <h2 className='text-sm uppercase font-semibold text-gray-400 pb-2 tracking-[15px]'>Web Developer</h2>
                <h1 className='text-4xl lg:text-5xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className="pt-5 md:text-2xl text-xl">
                    <Link href="#about">
                        <button type='button' className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button type='button' className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button type='button' className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button type='button' className="heroButton">Project</button>
                    </Link>
                </div>
            </div>
		</motion.div>
	);
};

export default Hero;
