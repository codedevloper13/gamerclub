/** @format */

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface GameCategoryCardProps {
	categoryImage: string;
	categoryName: string;
	slug: string;
}
const GameCategoryCard: FC<GameCategoryCardProps> = (props) => {
	const { categoryImage, categoryName, slug } = props;
	return (
		<Link href={`categories/${slug}`} className='max-w-xs mx-auto lg:max-w-none lg:w-56 xl:w-64'>
			<Image
				className='w-full hover:scale-110 transition-all duration-150 mx-auto w-12 h-12 rounded-[100%] object-cover lg:w-20 lg:h-20 xl:w-24 xl:h-24'
				src={categoryImage}
				alt={slug}
				width={200}
				height={200}
			/>
			<h3 className='text-white mb-2 mt-3 text-center text-sm lg:text-base'>{categoryName}</h3>
			<Image className='mx-auto' src='/images/arrow.svg' alt='view' width={20} height={20} />
		</Link>
	);
};

export default GameCategoryCard;
