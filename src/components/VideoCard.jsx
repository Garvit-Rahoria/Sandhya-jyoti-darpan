import { FaPlay } from "react-icons/fa";

function VideoCard() {
    return (
        <div className="group relative aspect-[9/14] w-full cursor-pointer justify-self-center overflow-hidden rounded-lg border border-gray-200 bg-white sm:max-w-[240px]">

            {/* Thumbnail */}
            <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm transition group-hover:scale-110 sm:h-16 sm:w-16">
                    <FaPlay className="ml-0.5 text-xs text-white sm:ml-1 sm:text-xl" />
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-2 sm:p-5">
                <p className="mb-1 text-[9px] text-green-400 sm:mb-2 sm:text-sm">
                    Foreign • 1 day ago
                </p>

                <h3 className="line-clamp-3 text-[11px] font-semibold leading-4 text-white sm:text-lg sm:leading-8">
                    US airstrikes on Iran amid ceasefire: Over 80 targets attacked...
                </h3>
            </div>

        </div>
    )
}

export default VideoCard
