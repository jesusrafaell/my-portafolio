import Link from 'next/link';
import React from 'react';

function About() {
	return (
		<div className='h-screen w-screen bg-gray-700'>
			<div id='home' className='w-full h-screen text-center'>
				<div className='w-full h-full mx-auto p-2 flex justify-left items-center'>
					<div>
						<p className='uppercase text-sm tracking-widest md:text-gray-100 lg:text-gray-400'>
							LET&#39;S BUILD SOMETHING TOGETHER
						</p>
						<p className='py-4 text-gray-400 sm:max-w-[70%] m-auto'>
							Hi, I&#39;m <span className='text-cyan-300'>Jesus Rafael</span>
							I’m focused on building web applications while learning new technologies. Hi, I&#39;m{' '}
							<span className='text-cyan-300'>Jesus Rafael</span>
							I’m focused on building web applications while learning new technologies.
						</p>
						<p className='py-4 text-gray-400 sm:max-w-[70%] m-auto'>
							Hi, I&#39;m <span className='text-cyan-300'>Jesus Rafael</span>
							I’m focused on building web applications while learning new technologies. Hi, I&#39;m{' '}
							<span className='text-cyan-300'>Jesus Rafael</span>
							I’m focused on building web applications while learning new technologies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
