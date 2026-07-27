import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WatchCard from "../components/WatchCard";

function Watch() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-65px)] bg-[#242424] px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-base font-bold text-gray-200 transition hover:text-orange-500"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7">
          <div className="flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-orange-500 sm:h-8"></div>
            <h2 className="text-xl font-bold text-white sm:text-3xl lg:text-4xl">
              Video Stories
            </h2>
          </div>

          <button className="shrink-0 text-sm font-medium text-orange-500 transition hover:text-orange-400 sm:text-base">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <WatchCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Watch;
