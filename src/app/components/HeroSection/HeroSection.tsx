/** @format */

import React, { FC } from "react";
import heroClassNames from "./heroClassNames";
import Link from "next/link";
import Image from "next/image";

const HeroSection: FC<{ showLink?: boolean }> = (props) => {
	const { showLink } = props;
	return (
		<section className={heroClassNames.hero}>
			<div className={heroClassNames.grid}>
				<div className={heroClassNames.content}>
					<h1 className={heroClassNames.heading}>Gaming</h1>
					<h1 className={heroClassNames.ctaText}>Unlock Your Gaming Potential</h1>
					<p className={heroClassNames.paragraph}>Elevate Your Play, Unleash Your Victory: Join the Gaming Revolution!</p>
					{showLink && (
						<div className='mt-8 sm:mt-10 rounded'>
							<Link href='#recent-games' className={heroClassNames.button}>
								Find Games
							</Link>
						</div>
					)}
				</div>
				<div className={heroClassNames.imageContainer}>
					<Image
						src='https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
						alt='3d Game'
						width={400}
						height={400}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
