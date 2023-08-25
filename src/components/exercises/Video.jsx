import { useRef } from "react";
import videoUrl from "../../assets/tiktk-recording-2023-06-17_21.59.49.mp4";

function Video() {
	const videoRef = useRef(null);

	function handleMouseEnter() {
		if (videoRef.current) {
			videoRef.current.play();
		}

		console.log("mouse enter");
	}

	function handleMouseLeave() {
		if (videoRef.current) {
			videoRef.current.pause();
		}

		console.log("mouse leave");
	}
	return (
		<div>
			<video
				ref={videoRef}
				src={videoUrl}
				controls
				width="400"
				height="300"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Video;
