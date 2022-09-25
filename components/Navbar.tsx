import Link from 'next/link';
import { useEffect, useState } from 'react';
import classNames from '../utilis/classNames';

function Navbar() {
	const [navScroll, setNavScroll] = useState(false);

	useEffect(() => {
		const handleNavScroll = () => {
			console.log('scroll change');
			setNavScroll(window.scrollY >= 90);
		};
		return window.addEventListener('scroll', handleNavScroll);
	});

	return (
		<nav className={classNames(navScroll ? 'nav-scroll' : '', 'nav')}>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<Link href='/'>
					<span className='flex items-center cursor-pointer self-center text-xl font-semibold whitespace-nowrap text-white'>
						Jesus Rafaell
					</span>
				</Link>
				<button
					data-collapse-toggle='mobile-menu'
					type='button'
					className='inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'
					aria-controls='mobile-menu-2'
					aria-expanded='false'
				>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							//fill-rule='evenodd'
							d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
							//clip-rule='evenodd'
						></path>
					</svg>
				</button>
				<div
					className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
					id='navbar-sticky'
				>
					<ul className='flex flex-col p-4 mt-4rounded-lg border border-white-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700'>
						<li className='h6'>
							<a href='#' className='nav-item' aria-current='page'>
								Home
							</a>
						</li>
						<li className='h6'>
							<a href='#' className='nav-item' aria-current='page'>
								About
							</a>
						</li>
						<li className='h6'>
							<a href='#' className='nav-item' aria-current='page'>
								Developments
							</a>
						</li>
						<li className='h6'>
							<a href='#' className='nav-item' aria-current='page'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
