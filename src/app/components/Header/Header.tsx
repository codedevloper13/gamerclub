/** @format */

import React from "react";
import headerClassNames from "./headerClassNames";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
	const { header, container, logoContainer, logo, nav, ul, li, link, cart, contactUs, orders, signupBtn, signinBtn, logoutBtn } = headerClassNames;
	return (
		<header className={header}>
			<div className={container}>
				<Link href='/' className={logoContainer}>
					<Image src='/Logo/gamerclub-logo.png' alt='logo' priority unoptimized width={250} height={100} />
				</Link>
				<nav className={nav}>
					<ul className={ul}>
						<li>
							<button className={link}>
								<span>
									Cart
									<AiOutlineShoppingCart className='inline-block text-3xl' />
								</span>
								<div className={cart}>0</div>
							</button>
						</li>
						<li className='flex items-center justify-center h-7'>
							<Link href='/orders' className={orders}>
								Orders
							</Link>
							<button className={logoutBtn}>Logout</button>
							<button className={signupBtn}>Sign Up</button>
							<button className={signinBtn}>
								Sign In
								<FcGoogle style={{ fontSize: "25px", cursor: "pointer", marginLeft: "12px" }} className={link} />
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
