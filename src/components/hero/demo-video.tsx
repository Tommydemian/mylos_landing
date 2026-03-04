import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";

export const DemoVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};
	return (
		<div className="relative rounded-[2rem] custom-shadow w-fit overflow-auto">
			<video
				ref={videoRef}
				src="/demo.mp4"
				className="w-60 md:w-72 aspect-[9/19.5] rounded-[1.5rem] object-cover"
				autoPlay
				muted
				loop
				playsInline
			/>
			<button
				type="button"
				onClick={toggleMute}
				className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm"
			>
				{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
			</button>
		</div>
	);
};
