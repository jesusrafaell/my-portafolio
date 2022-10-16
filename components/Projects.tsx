/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import img_rdinamico_1 from '../public/projects/r2_edit.png';
import Image from 'next/image';

interface Item {
	img: any;
	category: string;
	title: string;
	price: string;
	bgColor: string;
	textColor: string;
}

const items: Item[] = [
	{
		img: img_rdinamico_1,
		category: 'electrics',
		title: 'Sitran',
		price: 'FullStack',
		bgColor: '#30c9f6',
		textColor: '#fff',
	},
	{
		img: img_rdinamico_1,
		category: 'classic',
		title: 'BackOffice',
		price: '£300',
		bgColor: '#ffe474',
		textColor: '#000',
	},
	{
		img: img_rdinamico_1,
		category: 'living',
		title: 'API CarroPago',
		price: '£420',
		bgColor: '#ACCDD4',
		textColor: '#000',
	},
	{
		img: img_rdinamico_1,
		category: 'watch',
		title: 'API LibrePago',
		price: '£267',
		bgColor: '#dedede',
		textColor: '#fff',
	},
	{
		img: img_rdinamico_1,
		category: 'watch',
		title: 'Punto Consulta Tranred',
		price: '£267',
		bgColor: '#dedede',
		textColor: '#fff',
	},
];

function Projects() {
	const timeLine = gsap.timeline();

	const [active, setActive] = useState(0);
	const [item, setItem] = useState(items[active]);
	const { img, category, title, price } = item;

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
				['.slider__context *', '.slider_title'],
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
			['.slider_title', ' .slider__context *'],
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
						<h2 className='slider_title'>{title}</h2>
						<div className='slider__img'>
							<Image src={img} alt={title} layout='intrinsic' />
						</div>
						{/* <img className='slider__img' src={img} alt={title} /> */}
						<div className='slider__context flex-column'>
							<h3 className='slider__category'>{category}</h3>
							<strong className='slider__title'>{title}</strong>
							<small className='slider__price'>{price}</small>
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
