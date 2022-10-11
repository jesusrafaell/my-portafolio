import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import splash from '../public/images/splashbad.png';
import photo from '../public/images/jesus1.png';
import { init } from 'ityped';
import gsap from 'gsap';

function Main() {
	const bgRef = useRef<HTMLDivElement>(null);
	const t1 = gsap.timeline({ repeat: -1 });
	const t2 = gsap.timeline({ repeat: -1 });

	const initGsap = async () => {
		await t1
			.to('#splash', {
				scale: 0.9,
				duration: 2,
			})
			.to('#splash', {
				scale: 1,
				duration: 2,
			});
		await t2
			.to('#photo', {
				scale: 0.9,
				x: -5,
				y: -1,
				duration: 2,
			})
			.to('#photo', {
				x: 0,
				y: 0,
				duration: 2,
			});
	};

	const textRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		initGsap();
		return () =>
			init(textRef.current!, {
				startDelay: 300,
				backDelay: 1500,
				typeSpeed: 200,
				backSpeed: 100,
				showCursor: true,
				strings: ['Jesus', 'Coder', 'Developer.', 'Fronend.', 'Backend'],
			});
	});

	return (
		<div className='h-screen w-screen flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img'>
			<div className='-z-[1] absolute bg-[#111] w-screen h-screen'>
				<div className='bg-main-img absolute' ref={bgRef}></div>
			</div>
			<div id='home' className='w-full h-screen text-center rounded-xl '>
				<div className='wrapper'>
					<div className='cols cols0'>
						<div className='imgbox'>
							<div id='splash' className='img'>
								<Image src={splash} alt='' className='rotate-90' />
							</div>
							<div id='photo' className='img'>
								<Image src={photo} alt='Jesus' layout='responsive' />
							</div>
						</div>
					</div>
					<div className='cols cols1'>
						<span className='topline'>Hello</span>
						<h1 className='py-5'>
							{"I'm "}
							<span className='multiText' ref={textRef}></span>
						</h1>
						<p>I’m focused on building web applications while learning new technologies.</p>
						<div className='btns'>
							<button>Download CV</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
