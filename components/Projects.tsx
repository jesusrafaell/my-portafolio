/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
//Companys
import img_rdinamico_1 from '../public/projects/r2_edit.png';
import logoCarropago from '../public/projects/logo-carropago.png';
import logoLibrepago from '../public/projects/logo-librepago.png';
//Tech
import nestLogo from '../public/images/nest-logo.svg';
import reactLogo from '../public/images/react-logo.svg';
import nodeLogo from '../public/images/nodejs-logo.png';

interface Item {
	img: StaticImageData;
	imgTech: StaticImageData;
	developments: string;
	title: string;
	desc: string;
	bgColor: string;
	textColor: string;
}

const items: Item[] = [
	{
		title: 'Sitran',
		img: img_rdinamico_1,
		imgTech: reactLogo,
		developments: 'React(Hooks - Redux), express, Node, TypeOrm, TypeScript, Axios, Material UI, SQL',
		desc: `
			Aplicación FullStack para generar reportes de transacciones e
			información de clientes bancarios, carga de archivos en base de datos (SQL).
		`,
		bgColor: '#30c9f6',
		textColor: '#fff',
	},
	{
		img: img_rdinamico_1,
		developments: 'classic',
		imgTech: reactLogo,
		title: 'BackOffice',
		desc: '£300',
		bgColor: '#ffe474',
		textColor: '#000',
	},
	{
		img: logoCarropago,
		developments: 'living',
		imgTech: nodeLogo,
		title: 'API CarroPago',
		desc: '£420',
		bgColor: '#ACCDD4',
		textColor: '#000',
	},
	{
		img: logoLibrepago,
		developments: 'watch',
		title: 'API LibrePago',
		imgTech: nestLogo,
		desc: '£267',
		bgColor: '#dedede',
		textColor: '#fff',
	},
	{
		img: img_rdinamico_1,
		developments: 'watch',
		title: 'Punto Consulta Tranred',
		imgTech: reactLogo,
		desc: '£267',
		bgColor: '#dedede',
		textColor: '#fff',
	},
];

function Projects() {
	const timeLine = gsap.timeline();

	const [active, setActive] = useState(0);
	const [item, setItem] = useState(items[active]);
	const { img, developments, title, desc, imgTech } = item;

	const basicAimation = (dir: number, delay: number, newItem: Item) => {
		timeLine.to('.slider', {
			delay,
			duration: 0.2,
			backgroundColor: `${newItem.bgColor}`,
		});
		timeLine
			.fromTo(
				'.slider__img',
				{
					x: 150 * dir,
					opacity: 0,
					duration: 1,
					ease: 'power2.out',
				},
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: 'power2.out',
				}
			)
			.fromTo(
				['.slider__context *', '.gsap-dev'],
				{
					x: 50 * dir,
					opacity: 0,
					duration: 0.7,
					stagger: 0.15,
					ease: 'power2.out',
					color: `${newItem.textColor}`,
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.7,
					stagger: 0.15,
					ease: 'power2.out',
				},
				'<'
			);
	};

	const handleClick = (type: string) => {
		const dir = type === 'next' ? 1 : -1;
		timeLine.to('.slider__img', {
			x: -250 * dir,
			opacity: 0,
			duration: 1,
			ease: 'power2.inOut',

			onComplete: () => {
				let newActive;
				let newItem;
				if (type === 'next') {
					newActive = active === items.length - 1 ? 0 : active + 1;
					newItem = items[newActive];
					setActive(newActive);
					setItem(newItem);
				} else {
					newActive = active <= 0 ? items.length - 1 : active - 1;
					newItem = items[newActive];
					setActive(newActive);
					setItem(newItem);
				}

				basicAimation(dir, 1, newItem);
			},
		});
		timeLine.to(
			['.gsap-dev', ' .slider__context *'],
			{
				x: -100 * dir,
				opacity: 0,
				duration: 0.7,
				stagger: 0.15,
				ease: 'power2.inOut',
			},
			'<'
		);
	};

	return (
		<div className='slider'>
			<div className='inner-container'>
				<div className='slider__wrraper flex-column'>
					<div className='flex-column slider__content'>
						<h2 className='slider_title gsap-dev'>{title}</h2>
						<div className='slider__tech gsap-dev'>
							<Image src={imgTech} alt={title} layout='intrinsic' />
						</div>
						<div className='slider__img'>
							<Image src={img} alt={title} layout='intrinsic' />
						</div>
						{/* <img className='slider__img' src={img} alt={title} /> */}
						<div className='slider__context flex-column'>
							<p className='slider__desc'>{desc}</p>
							<p className='slider__techs'>
								<span>Teconologias:</span> {developments}
							</p>
						</div>
					</div>
					{/* <div className='slider__footer'>
						<div className='slider__btns justify-between'>
							<button className='slider__btn-buy'>buy</button>
							 <div className='flex-center'>
								<button
									data-type='prev'
									className='slider__btn-switch slider__btn-switch--dark flex-center'
									onClick={(e) => handleClick('prev')}
								></button>
								<button
									data-type='next'
									className='slider__btn-switch slider__btn-switch--light flex-center'
									onClick={(e) => handleClick('next')}
								></button>
							</div> 
						</div>
						<div className='slider__index'></div>
					</div> */}
				</div>
				{/* l */}
				<div className='slideshow-navigation'>
					<button onClick={(e) => handleClick('prev')} className='slideshow-navigation-button prev'>
						<span className='button-arrow'>‹</span>
					</button>
					<button onClick={(e) => handleClick('next')} className='slideshow-navigation-button next'>
						<span className='button-arrow'>›</span>
					</button>
				</div>
				{/* l */}
			</div>
		</div>
	);
}

export default Projects;
