import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import splash from '../public/images/jinx3.jpg';
import photo from '../public/images/jesus1.png';
import { init } from 'ityped';

function About() {
	const textRef = useRef(null);

	useEffect(() => {
		return () =>
			// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<div className='wrapper'>
			<div className='cols cols0'>
				<span className='topline'>Hello</span>
				<h1>
					{"I'm "}
					<span className='multiText' ref={textRef}></span>
				</h1>
				<p>I’m focused on building web applications while learning new technologies.</p>
				<div className='btns'>
					<button>Download CV</button>
				</div>
			</div>
			<div className='cols cols1'>
				<div className='imgbox'>
					{/* <Image id='splash' src={splash} alt='' /> */}
					<Image src={photo} alt='Jesus' />
				</div>
			</div>
		</div>
	);
}

export default About;
