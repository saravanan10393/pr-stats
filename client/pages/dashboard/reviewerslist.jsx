import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import { useRouter } from "next/navigation";

import { MOCK_DATA } from "../mockdata";
import { Header, Toolbar, ReviewerInfoCard } from "../../components";

export default function ReviewersList() {
	const router = useRouter();

	const [reviewersList, setReviewersList] = useState(MOCK_DATA);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		const searchValue = event.target.value;
		setSearchTerm(searchValue);
		if (searchValue === "") {
			setReviewersList(MOCK_DATA);
		}
		setReviewersList((list) => {
			return list.filter((data) => data.name.includes(searchValue));
		});
		console.log(event.target.value);
	};

	return (
		<div className="h-screen flex flex-col">
			<Header pageTitle={"Reviewers list"} />
			<Toolbar
				title={"User list"}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className="h-full overflow-y-auto	grid auto-rows-max p-4">
				{reviewersList.map((reviewerInfo) => (
					<ReviewerInfoCard
						onClick={() => router.push(`./reviewerinfo/${reviewerInfo.id}`)}
						reviewerInfo={reviewerInfo}
						key={reviewerInfo.id}
					/>
				))}
			</div>
		</div>
	);
}
