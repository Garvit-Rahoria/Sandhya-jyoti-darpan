import banner from "../assets/banner.png";
import logo from "../assets/image.png";

import { useState } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";



function WebStories() {

  const [grid, setGrid] = useState(true);

  const stories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "तटीय क्षेत्रों में मौसम की मार क्यों नहीं?",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "जरूरत से ज्यादा पानी पीना भी खतरनाक!",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "भोग सामग्री जो है मां लक्ष्मी को अति प्रिय!",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "हैलोवीन पर छा जाएगा डर का माहौल!",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700",
      title: "31 अक्टूबर 2025 का राशिफल",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Banner */}
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          className="h-[260px] w-full object-cover object-center sm:h-[340px] lg:h-[55vh] lg:object-fill"
        />

        {/* Center Logo */}
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md sm:h-32 sm:w-32 lg:h-35 lg:w-35">
          <img
              src={logo}
              alt="Sandhya Jyoti Darpan"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-5 pt-16 text-center sm:px-5 sm:pt-24 lg:pt-28">

        <h1 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          धर्म, संस्कृति, समाज और प्रेरणादायक वेब स्टोरीज़
        </h1>

        <h2 className="mt-4 text-xl font-bold sm:mt-5 sm:text-3xl">
          Sandhya Jyoti Darpan
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-base leading-7 text-gray-500 sm:mt-6 sm:text-xl sm:leading-9">
          Explore the latest Web Stories on Hindu Culture, Spirituality,
          Festivals, Sanatan Dharma, Motivation, History, Traditions and
          Inspirational Stories only on Sandhya Jyoti Darpan.
        </p>

      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12">

      {/* Toggle */}
      <div className="mb-6 flex justify-end sm:mb-10">
        <div className="flex overflow-hidden rounded-xl border bg-white shadow">

          <button
            onClick={() => setGrid(true)}
            className={`p-2.5 transition sm:p-3 ${
              grid ? "bg-blue-100" : "bg-white"
            }`}
          >
            <LayoutGrid className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </button>

          <button
            onClick={() => setGrid(false)}
            className={`p-2.5 transition sm:p-3 ${
              !grid ? "bg-blue-100" : "bg-white"
            }`}
          >
            <Rows3 className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </button>

        </div>
      </div>

      {/* Stories */}
      <div
        className={`gap-5 sm:gap-8 ${
          grid
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "flex flex-col"
        }`}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className={`group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg sm:rounded-3xl ${
              grid
                ? "h-[360px] sm:h-[400px] lg:h-[420px]"
                : "flex flex-col sm:flex-row sm:items-center"
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden ${
                grid ? "h-full w-full" : "h-[280px] w-full shrink-0 sm:h-[220px] sm:w-[280px] lg:w-[320px]"
              }`}
            >
              <img
                src={story.image}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:brightness-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <h2
                className={`absolute p-4 font-semibold text-white sm:p-5 ${
                  grid
                    ? "bottom-0 text-xl leading-7 sm:text-2xl sm:leading-9"
                    : "bottom-0 text-lg leading-7 sm:text-xl"
                }`}
              >
                {story.title}
              </h2>
            </div>

            {/* List View Content */}
            {!grid && (
              <div className="flex flex-col justify-center p-5 sm:p-8">
                <span className="text-orange-500 font-semibold">
                  Web Story
                </span>

                <h3 className="mt-3 text-xl font-bold leading-8 sm:text-3xl sm:leading-10">
                  {story.title}
                </h3>

                <button className="mt-6 w-fit px-5 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                  Read Story
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
    </div>
  );
}

export default WebStories;
