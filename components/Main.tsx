import Link from 'next/link';
import React from 'react';

function Main() {
	return (
		<div className='bg-keyboard-img bg-blend-darken h-screen w-screen'>
			{/*
		<div className='bg-keyboard-img bg-blend-darken h-screen w-screen bg-no-repeat bg-cover bg-center '>
      */}
			<div id='home' className='w-full h-screen text-center'>
				<div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
					<div>
						<p className='uppercase text-sm tracking-widest text-white-100'>LET&#39;S BUILD SOMETHING TOGETHER</p>
						<h1 className='py-4 text-white'>
							Hi, I&#39;m <span className='text-grey-100'> Jesus Rafael</span>
						</h1>
						<h1 className='py-2 text-cyan-100'>A Web Developer</h1>
						<p className='py-4 text-white sm:max-w-[70%] m-auto'>
							I’m focused on building responsive front-end web applications while learning back-end technologies.
						</p>
						<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
							<a href='https://www.linkedin.com/in/clint-briley-50056920a/' target='_blank' rel='noreferrer'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									Linke
								</div>
							</a>
							<a href='https://github.com/fireclint' target='_blank' rel='noreferrer'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									git
								</div>
							</a>
							<Link href='/#contact'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									mail
								</div>
							</Link>
							<Link href='/resume'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									fill
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
