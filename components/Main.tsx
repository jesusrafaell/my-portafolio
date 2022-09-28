import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import jinx from '../public/images/jinx5.jpg';

function Main() {
	const bgRef = useRef<HTMLDivElement>(null);
	const t1 = gsap.timeline({});

	const rotateImg = async () => {
		await t1.to(bgRef.current!, {
			scale: 0.4,
			y: '-40px',
			x: '20px',
			duration: 1,
		});
	};

	const rotateImgRevert = async () => {
		await t1.to(bgRef.current!, {
			scale: 1,
			y: 0,
			x: 0,
			borderRadius: 0,
			rotation: '0',
			duration: 1,
		});
	};

	useEffect(() => {}, []);

	return (
		<div className='h-screen w-screen flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img'>
			<div className='-z-[1] absolute bg-[#111] w-screen h-screen'>
				<div className='bg-main-img absolute' ref={bgRef}></div>
			</div>
			<div id='home' className='w-full h-screen text-center rounded-xl '>
				<div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
					<div>
						<p className='uppercase text-sm tracking-widest md:text-gray-100 lg:text-gray-400'>
							LET&#39;S BUILD SOMETHING TOGETHER
						</p>
						<h1 className='py-4 text-white'>
							Hi, I&#39;m{' '}
							<span className='text-cyan-300' onMouseOver={rotateImg} onMouseLeave={rotateImgRevert}>
								Jesus Rafael
							</span>
						</h1>
						<h1 className='py-2 text-white'>A Web Developer</h1>
						<p className='py-4 text-gray-400 sm:max-w-[70%] m-auto'>
							I’m focused on building web applications while learning new technologies.
						</p>
						<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
							<a href='https://www.linkedin.com/in/clint-briley-50056920a/' target='_blank' rel='noreferrer'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 hover:scale-110 ease-in duration-300'>
									Linke
								</div>
							</a>
							<a href='https://github.com/fireclint' target='_blank' rel='noreferrer'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6  hover:scale-110 ease-in duration-300'>
									git
								</div>
							</a>
							<Link href='/#contact'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 hover:scale-110 ease-in duration-300'>
									mail
								</div>
							</Link>
							<Link href='/resume'>
								<div className='rounded-full shadow-lg shadow-white-400 p-6 hover:scale-110 ease-in duration-300'>
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
