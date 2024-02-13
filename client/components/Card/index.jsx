import Image from "next/image";

import { Card } from "@tremor/react";

export default function ReviewerInfoCard({ reviewerInfo, onClick }) {
	const { name, avatarUrl, totalReviewedPr, avgReviewTime } = reviewerInfo;

	return (
		<Card onClick={onClick} className="animate-swipeIn flex gap-4 mb-4 p-2">
			<Image
				src="/avatar.jpg"
				width={70}
				height={70}
				alt="Picture of the author"
			/>
			<div className="grid grid-cols-3 w-full">
				<div className="col-span-3 font-semibold text-l">{name}</div>
				<div className="col-span-1 font-normal text-base">
					Total reviewed pr: <span>{totalReviewedPr}</span>
				</div>
				<div className="col-span-1 font-normal text-base">
					Average reviewed time : <span>{avgReviewTime}</span>
				</div>
			</div>
		</Card>
	);
}
