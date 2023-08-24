/** @format */

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='fixed w-full top-0 left-0 z-20 bg-black text-white'>
			<div className='container mx-auto py-4 px-6 flex items-center justify-between'>
				<Link href='/' className='flex items-center'>
					<Image src='/Logo/gamerclub-logo.png' alt='logo' priority unoptimized width={250} height={100} />
				</Link>
				<div className='md:hidden'>
					<button onClick={toggleMobileMenu} className='mobile-menu-button'>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				{/* Navigation menu */}
				<nav className={`md:block ${isMobileMenuOpen ? "block" : "hidden"}`}>
					<ul className='md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6'>
						<li>
							<button className='w-full hover:text-primary-light relative h-12'>
								<span>
									Cart
									<AiOutlineShoppingCart className='inline-block text-3xl' />
								</span>
								<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -right-2'>
									0
								</div>
							</button>
						</li>
						<li>
							<Link href='/orders' className='flex w-full px-6 py-2 rounded-md bg-primary hover:bg-primary-dark'>
								Orders
							</Link>
						</li>
						<li>
							<button className='flex w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
						</li>
						<li>
							<button className='flex w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</button>
						</li>
						<li>
							<button className='flex w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
								Sign In
								<FcGoogle
									style={{ fontSize: "25px", cursor: "pointer", marginLeft: "12px" }}
									className='hover:text-primary-light relative'
								/>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
