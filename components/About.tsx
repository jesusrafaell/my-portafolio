import Image from 'next/image';
import React from 'react';
import photo from '../public/images/jinx5.jpg';
import splash from '../public/images/jinx3.jpg';

function About() {
	return (
		<div className='wrapper'>
			<div className='cols cols0'>
				<span className='topline'>Hello</span>
				<h1>
					{"I'm "}
					<span className='multiText'>Coder </span>
				</h1>
				<p>I’m focused on building web applications while learning new technologies.</p>
				<div className='btns'>
					<button>Download CV</button>
				</div>
			</div>
			<div className='cols cols1'>
				<div className='imgbox'>
					<Image id='splash' src={splash} alt='' />
					<Image src={photo} alt='Jesus' />
				</div>
			</div>
		</div>
	);
}

export default About;
