import { FaPlay } from "react-icons/fa";

const WatchCard = () => {
  return (
    <article className="group relative aspect-[9/14] w-full justify-self-center overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-sm sm:max-w-[240px]">
      {/* Thumbnail */}
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700"
        alt="Video story thumbnail"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"></div>

      {/* Category */}
      <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
        Breaking
      </span>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-sm transition group-hover:scale-110 sm:h-14 sm:w-14">
          <FaPlay className="ml-1 text-sm text-white sm:text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-4">
        <h3 className="line-clamp-3 text-xs font-semibold leading-4 text-white sm:text-lg sm:leading-7">
          PM Modi begins Australia visit, important agreements expected.
        </h3>

        <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-gray-300 sm:mt-4 sm:text-sm">
          <span>1:59</span>
          <span>9 Jul 2026</span>
        </div>
      </div>
    </article>
  );
};

export default WatchCard;
