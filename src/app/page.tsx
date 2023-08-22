/** @format */

import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import GameCard from "./components/GameCard/GameCard";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<HeroSection />
			<section className={sectionClassNames.section}>
				<div className={sectionClassNames.trending}>
					<h2 className={sectionClassNames.trendingTitle}>Currently Trending Games</h2>
				</div>

				<div className='flex gap-8 flex-wrap'>
					{games.map((game) => (
						<GameCard key={game.id} gameName={game.name} imageURL={game.image} slug={game.slug} price={game.price} />
					))}
				</div>
			</section>

			{/* Trendind Section */}
			<h3 className='font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]'>
				Featured Game
			</h3>
			<section className='pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white'>
				<div className='max-w-screen-xl'>
					<h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8'>{featuredGame.name}</h2>
					<p className='max-w-screen-md text-sm mb-8 md:mb-12'>{featuredGame.description}</p>
				</div>
				<Link href={`/games/${featuredGame.slug}`}>
					<Image
						src={featuredGame.image}
						alt={featuredGame.slug}
						width={200}
						height={500}
						className='h-76 md:h-96 lg:h-112 w-full object-cover rounded-lg'
					/>
				</Link>
			</section>
		</>
	);
}

const sectionClassNames = {
	section: " px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-5 text-white",
	trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
	trendingTitle: "font-bold text-3xl sm:mr-4",
	trendingButton: "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
	latestButton: "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary-gradient border-2 border-primary-dark",
	featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
	featuredContent: "mx-auto max-w-screen-xl",
};

const featuredClassNames = {
	gameName: "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8",
	gameDetails: "max-w-screen-md text-sm mb-8 md:mb-12",
	gameImage: "h-72 md:h-96 lg:h-112 w-full object-cover rounded-lg",
};

const styles = {
	categorySection: "bg-center bg-cover bg-no-repeat py-16 sm:py-20 md:py-28 lg:py-32",
	categoryContent: "container mx-auto px-4 sm:px-6 md:px-8",
	categoryHeading:
		"text-center max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[130%,187%,130%,130%]",
	categorySubHeading:
		"text-center bg-primary-gradient px-8 rounded-3xl py-5 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8",
};

const recentGamesClasses = {
	section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
	heading: "text-3xl lg:text-4xl font-bold mb-3",
	subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};

const games = [
	{
		id: 1,
		price: 12,
		name: "Call of Duty: Modern Warfare",
		slug: "call-of-duty",
		image: "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FsbCUyMG9mJTIwRHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 2,
		price: 14,
		name: "Assassin's Creed Valhalla",
		slug: "assassin-creed",
		image: "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QXNzYXNzaW4ncyUyMENyZWVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 3,
		price: 42,
		name: "FIFA 23",
		slug: "fifa-23",
		image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 4,
		price: 27,
		name: "The Legend of Zelda: Breath of the Wild",
		slug: "the-legend-of-zelda",
		image: "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
];

const featuredGame = {
	name: "STAR WARS OUTLAWS",
	description: "Experience the first-ever open world Star Wars game, set between the events of The Empire Strikes Back and Return of the Jedi.",
	slug: "outlaws",
	image: "/images/ubi-homescreen-swo-fwd23-bg-desktop.avif",
};
