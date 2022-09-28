import React, { CSSProperties, FC, useEffect, useReducer, useRef } from 'react';

interface ISlide {
	title: string;
	description: JSX.Element;
	image: string;
	value: string;
}

const slides: ISlide[] = [
	{
		title: 'API LibrePago',
		description: (
			<img
				src='https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				alt=''
				style={{ width: '80%' }}
			/>
		),
		image:
			'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
		value: 'librepago',
	},
	{
		title: 'API CarroPago',
		description: (
			<img
				src='https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				alt=''
				style={{ width: '65%' }}
			/>
		),
		image:
			'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
		value: 'carropago',
	},
	{
		title: 'BackOffice',
		description: (
			<img
				src='https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				alt=''
				style={{ width: '65%' }}
			/>
		),
		image:
			'https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
		value: 'backoffice',
	},
	{
		title: 'Reporte Dinamico',
		description: (
			<img
				src='https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				alt=''
				style={{ width: '80%' }}
			/>
		),
		image:
			'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
		value: 'Reporte_Dinamico',
	},
];

const useTilt = (active: true | null) => {
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current || !active) {
			return;
		}

		const state: any = {
			rect: undefined,
			mouseX: undefined,
			mouseY: undefined,
		};

		let el: any = ref.current;

		const handleMouseMove = (e: any) => {
			if (!el) {
				return;
			}
			if (!state.rect) {
				state.rect = el.getBoundingClientRect();
			}
			state.mouseX = e.clientX;
			state.mouseY = e.clientY;
			const px = (state.mouseX - state.rect.left) / state.rect.width;
			const py = (state.mouseY - state.rect.top) / state.rect.height;

			el.style.setProperty('--px', px);
			el.style.setProperty('--py', py);
		};

		el.addEventListener('mousemove', handleMouseMove);

		return () => {
			el.removeEventListener('mousemove', handleMouseMove);
		};
	}, [active]);

	return ref;
};

const initialState = {
	slideIndex: slides.length - 1,
};

const slidesReducer = (state: any, event: any) => {
	if (event.type === 'NEXT') {
		return {
			...state,
			slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
		};
	}
	if (event.type === 'PREV') {
		return {
			...state,
			slideIndex: (state.slideIndex + 1) % slides.length,
		};
	}
};

const Slide = ({ slide, offset }: any) => {
	const active = offset === 0 ? true : null;
	const ref = useTilt(active);

	return (
		<div
			ref={ref}
			className='slide'
			data-active={active}
			style={
				{
					'--offset': offset > 1 ? 1 : offset < -1 ? -1 : offset,
					'--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
				} as CSSProperties
			}>
			<div
				className='slideBackground'
				style={{
					backgroundImage: `url('${slide.image}')`,
				}}></div>
			<div
				className='slideContent'
				style={{
					position: 'relative',
				}}>
				<div
					className='slideImg'
					style={{
						backgroundImage: `url('${slide.image}')`,
					}}></div>
				<div className='slideContentInner'>
					{/* {slide.description} */}
					<h2 className='cardTitle'>{slide.title}</h2> *
				</div>
			</div>
		</div>
	);
};

const CardSlider: FC = () => {
	const [state, dispatch] = useReducer(slidesReducer, initialState);
	return (
		<div className='slides'>
			<button onClick={() => dispatch({ type: 'PREV' })}>‹</button>

			{slides.map((slide, i) => {
				let offset = state.slideIndex - i;
				return <Slide slide={slide} offset={offset} key={i} />;
			})}
			<button onClick={() => dispatch({ type: 'NEXT' })}>›</button>
		</div>
	);
};

export default CardSlider;
