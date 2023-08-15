/** @format */

import React from "react";
import footerClassNames from "./footerClassNames";
import Link from "next/link";
import Image from "next/image";

const {
	container,
	footer,
	section,
	section1,
	section1Content,
	section1Heading,
	section2,
	sectionLink,
	section2Content,
	section2Heading,
	section2ul,
	section3,
	section3Content,
	section3Heading,
} = footerClassNames;

const Footer = () => {
	return (
		<footer className={footer}>
			<div className={container}>
				<div className={section}>
					<div className={section1}>
						{/* <h2 className={section1Heading}>Logo</h2> */}
						<Link href='/' className={section1Heading}>
							<Image src='/Logo/gamerclub-logo.png' alt='logo' priority unoptimized width={170} height={100} />
						</Link>
						<p className={`${section1Content},mt-2`}>
							Welcome to GamerClub, your ultimate destination for incredible gaming sales and exclusive deals! Our website is a haven
							for gamers seeking the best discounts,
						</p>
					</div>
					<div className={section2}>
						<h2 className={section2Heading}>About Us</h2>
						<ul className={section2ul}>
							<li>
								<Link href='#' className={sectionLink}>
									Careers
								</Link>
							</li>
							<li>
								<Link href='#' className={sectionLink}>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className={section3}>
						<h2 className={section3Heading}>Contact Us</h2>
						<p className={`${section3Content},mt-2`}>
							Welcome to GamerClub, your ultimate destination for incredible gaming sales and exclusive deals! Our website is a haven
							for gamers seeking the best discounts,
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
