import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ImageWithOverlay({ src, alt }) {
	return (
		<div className="group">
			<Image
				src={src}
				alt={alt}
				fill
				className="transition-opacity duration-300 group-hover:opacity-75 rounded-lg h-full max-h-72"
			/>
			<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-imageBg">
				<div className="font-bold ">
					<ArrowUpRightIcon className="w-8 h-8 text-white" />
				</div>
			</div>
		</div>
	);
}