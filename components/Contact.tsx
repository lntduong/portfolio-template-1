import React from 'react';
import { headerVariants } from '../utils/motion';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler  } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};
const Contact = () => {
	const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lntduongit@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

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
				Contact
			</motion.h3>
			<div className='flex flex-col space-y-10'>
				<h4 className='md:text-4xl font-semibold text-center'>
					I have got just what you nedd.{' '}
					<span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
				</h4>
				<div className='space-y-2 md:space-y-10'>
					<div className='flex items-center justify-center space-x-5'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='md:text-2xl'>(+84) 39 603 4135</p>
					</div>
					<div className='flex items-center justify-center space-x-5'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='md:text-2xl'>lntduongit@gmail.com</p>
					</div>
					<div className='flex items-center justify-center space-x-5'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='md:text-2xl'>Ho Chi Minh city, Vietnam</p>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
					<div className='flex md:flex-row flex-col md:space-x-2 '>
						<input {...register('name')} placeholder='Name' className='contactInput' type='text' />
						<input {...register('email')} placeholder='Email' className='contactInput mt-2 md:mt-auto' type='email' />
					</div>
					<input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
					<textarea {...register('message')} placeholder='Message' className='contactInput' />
					<button
						type='submit'
						className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
