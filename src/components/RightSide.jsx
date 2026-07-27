import { FaPlay } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiCrab } from "react-icons/gi";
import Footer from "./Footer";

function RightSide() {
    return (
        <div className=''>
            <div className="w-full bg-[#1b1b1b] rounded-xl border border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3">
                    <h2 className="text-white text-2xl font-bold">Video</h2>

                    <button className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white text-sm px-4 py-1 rounded-full">
                        See More
                    </button>
                </div>

                {/* Video */}
                <div className="relative cursor-pointer group">
                    <img
                        src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=700"
                        alt="Video"
                        className="w-full h-[420px] object-cover group-hover:scale-102 transition duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="group w-15 h-15 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
                            <div className="w-14 h-14 rounded-full  flex items-center justify-center transition-all duration-300 ">
                                <FaPlay className="text-white group-hover:text-white text-xl ml-1" />
                            </div>
                        </button>
                    </div>

                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        1:26
                    </span>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-white font-semibold text-lg leading-6">
                        75 Lakh Ped Lagane Ka Mahabhiyan Shuru
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                        2 hours ago
                    </p>
                </div>
            </div>

            <div className="bg-[#1b1b1b] border border-gray-700 rounded-lg p-3 mt-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-sm font-bold">
                        Today's Horoscope
                    </h2>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition">
                        <span className="text-xs">Cancer</span>
                        <FaChevronDown className='text-xs' />
                    </button>
                </div>

                {/* Zodiac */}
                <div className="flex items-center gap-5 mt-6">
                    <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
                        <GiCrab className="text-2xl text-orange-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white">
                        Cancer
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base text-sm  mt-1">
                    <span className="font-semibold text-white">Positive:</span> A pleasant
                    day is indicated today. Any ongoing property disputes may be resolved
                    in your favor. Time will be spent making plans for home maintenance and
                    renovation. A significant task may be completed...
                </p>

                {/* Read More */}
                <div className="flex justify-end mt-3">
                    <button className="text-orange-500 text-sm font-semibold hover:underline">
                        Read More
                    </button>
                </div>
            </div>

            <Footer className="mt-3" showAppPromo={false} />
        </div>


    )
}

export default RightSide
