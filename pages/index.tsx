import { Header, Hero, About, WorkExperience, Skills, Projects, Contact } from '@/components/';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
	return (
		<div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-hide'>
			<section id='hero' className='snap-start'>
				<Header />
				<Hero />
			</section>
			<section id='about' className='snap-center'>
				<About />
			</section>
			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>
			<section id='skills' className='snap-start'>
				<Skills />
			</section>
			<section id='projects' className='snap-start'>
				<Projects />
			</section>
			<section id='contact' className='snap-start'>
				<Contact />
			</section>
			<Link href="#hero">
				<footer className='sticky bottom-5 flex justify-end pr-4 w-full cursor-pointer'>
					<div className="flex items-center justify-center">
						<ArrowUpCircleIcon className="h-10 w-10 text-[#F7AB0A] filter grayscale hover:grayscale-0" />

					</div>
				</footer>
			</Link>
		</div>
	);
}
