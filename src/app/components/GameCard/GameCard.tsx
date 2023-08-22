/** @format */

import Link from "next/link";
import { FC } from "react";
import gameCardClassNames from "./gameCardClassNames";
import Image from "next/image";
interface GamesProps {
	gameName: string;
	imageURL: string;
	slug: string;
	price: number;
}
const GameCard: FC<GamesProps> = (props) => {
	const { gameName, imageURL, slug, price } = props;
	return (
		<Link href={`/games/${slug}`} className={gameCardClassNames.container}>
			<h3 className={gameCardClassNames.price}>{price} $</h3>
			<Image src={imageURL} className={gameCardClassNames.image} alt={slug} width={300} height={300} />
			<div className={gameCardClassNames.gameName}>{gameName}</div>
		</Link>
	);
};

export default GameCard;
