"use client";
import React, { useState } from "react";
import Button from "./Button";
import { DownloadSheet } from "./DownloadSheet";

export default function DownloadSection() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenSheet = () => {
		setIsOpen(true);
	};
	return (
		<>
			<Button
				onClick={handleOpenSheet}
				className="bg-[#121212] text-stone-100 relative flex items-center justify-center after:h-[111%] after:w-[103%] after:absolute  after:bg-gradient-to-br after:from-sky-800 after:to-teal-700 after:rounded-full after:-z-10 hover:bg-[#1f1f1f]  hover:shadow-3xl  "
			>
				Dowload CV
			</Button>
			<DownloadSheet open={isOpen} onOpenChange={setIsOpen} />
		</>
	);
}