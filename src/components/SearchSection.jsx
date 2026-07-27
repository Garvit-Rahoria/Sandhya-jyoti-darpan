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
    <div className="max-w-6xl mx-auto py-5">

      {/* Search */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search latest news..."
          className="flex-1 bg-[#2b2b2b] rounded-3xl px-6 py-3 text-white placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-semibold outline-none border border-transparent focus:border-orange-500"
        />

        <button className="bg-orange-500 hover:bg-orange-600 w-13 rounded-lg flex items-center justify-center transition">
          <IoSearchOutline className="text-white text-3xl" />
        </button>
      </div>

      {/* Trending */}
      <h2 className="text-xl font-bold text-white mt-10 mb-5">
        🔥 Trending Now
      </h2>

      <div className="flex flex-wrap gap-4">
        {trends.map((item, index) => (
          <button
            key={index}
            className="group flex items-center gap-4 rounded-full border border-gray-700 bg-[#242424] px-6 py-2 transition hover:border-orange-500 hover:bg-[#303030]"
          >
            <span className="text-orange-500 font-medium">
              {item}
            </span>

            <FaArrowRight className="text-orange-500 group-hover:translate-x-1 transition" />
          </button>
        ))}
      </div>
    </div>
  );
}
