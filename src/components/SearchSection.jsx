import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const trends = [
  "Pune Murder Case",
  "Ram Mandir",
  "America-Iran",
  "India vs England",
  "Monsoon Update",
  "FIFA 2026",
];

export default function SearchSection() {
  return (
    <div className="mx-auto max-w-6xl py-5">

      {/* Search */}
      <div className="flex gap-3 max-[360px]:gap-2">
        <input
          type="text"
          placeholder="Search latest news..."
          className="min-w-0 flex-1 rounded-3xl border border-transparent bg-[#2b2b2b] px-5 py-3 text-white outline-none placeholder:text-[15px] placeholder:font-semibold placeholder:text-gray-400 focus:border-orange-500 max-[360px]:px-4"
        />

        <button className="flex w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500 transition hover:bg-orange-600 max-[360px]:w-11">
          <IoSearchOutline className="text-3xl text-white max-[360px]:text-2xl" />
        </button>
      </div>

      {/* Trending */}
      <h2 className="text-xl font-bold text-white mt-10 mb-5">
        🔥 Trending Now
      </h2>

      <div className="flex flex-wrap gap-3">
        {trends.map((item, index) => (
          <button
            key={index}
            className="group flex max-w-full items-center gap-3 rounded-full border border-gray-700 bg-[#242424] px-4 py-2 transition hover:border-orange-500 hover:bg-[#303030] sm:px-6"
          >
            <span className="truncate font-medium text-orange-500">
              {item}
            </span>

            <FaArrowRight className="text-orange-500 group-hover:translate-x-1 transition" />
          </button>
        ))}
      </div>
    </div>
  );
}
