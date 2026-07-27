import {
  FaFire,
  FaMapMarkerAlt,
  FaRunning,
  FaFilm,
  FaGraduationCap,
  FaHeart,
  FaOm,
  FaFemale,
  FaLandmark,
  FaGlobeAsia,
  FaSun,
  FaCarSide,
  FaBan,
  FaQuoteRight,
  FaBookOpen,
  FaLightbulb,
  FaDna,
} from "react-icons/fa";

import { FaIndianRupeeSign } from "react-icons/fa6";

import {
  GiCricketBat,
  GiSparkles,
  GiFlame,
} from "react-icons/gi";

export const menuItems = [
  {
    id: "top-news",
    title: "Top News",
    icon: <FaFire className="text-orange-500 text-2xl" />,
  },
  {
    id: "state-city",
    title: "State City",
    icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
  },
  {
    id: "cricket",
    title: "Cricket",
    icon: <GiCricketBat className="text-blue-500 text-2xl" />,
  },
  {
    id: "bhaskar-special",
    title: "Bhaskar Special",
    icon: <GiSparkles className="text-orange-400 text-2xl" />,
  },
  {
    id: "db-original",
    title: "DB Original",
    icon: <GiFlame className="text-yellow-400 text-2xl" />,
  },
  {
    id: "sports",
    title: "Sports",
    icon: <FaRunning className="text-blue-500 text-2xl" />,
  },
  {
    id: "bollywood",
    title: "Bollywood",
    icon: <FaFilm className="text-purple-500 text-2xl" />,
  },
  {
    id: "job-education",
    title: "Job - Education",
    icon: <FaGraduationCap className="text-gray-400 text-2xl" />,
  },
  {
    id: "business",
    title: "Business",
    icon: <FaIndianRupeeSign className="text-green-500 text-2xl" />,
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    icon: <FaHeart className="text-pink-500 text-2xl" />,
  },
  {
    id: "life-mantra",
    title: "Life Mantra",
    icon: <FaOm className="text-orange-400 text-2xl" />,
  },
  {
    id: "woman",
    title: "Woman",
    icon: <FaFemale className="text-pink-500 text-2xl" />,
  },
  {
    id: "country",
    title: "Country",
    icon: <FaLandmark className="text-orange-500 text-2xl" />,
  },
  {
    id: "foreign",
    title: "Foreign",
    icon: <FaGlobeAsia className="text-blue-500 text-2xl" />,
  },
  {
    id: "horoscope",
    title: "Horoscope",
    icon: <FaSun className="text-yellow-400 text-2xl" />,
  },
  {
    id: "tech-auto",
    title: "Tech - Auto",
    icon: <FaCarSide className="text-sky-400 text-2xl" />,
  },
  {
    id: "fake-news-expose",
    title: "Fake News Expose",
    icon: <FaBan className="text-red-500 text-2xl" />,
  },
  {
    id: "opinion",
    title: "Opinion",
    icon: <FaQuoteRight className="text-blue-300 text-2xl" />,
  },
  {
    id: "madhurima",
    title: "Madhurima",
    icon: <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">म</span>,
  },
  {
    id: "magazine",
    title: "Magazine",
    icon: <FaBookOpen className="text-slate-300 text-3xl" />,
  },
  {
    id: "utility",
    title: "Utility",
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
  },
  {
    id: "life-science",
    title: "Life Science",
    icon: <FaDna className="text-sky-500 text-3xl" />,
  },
].map((item) => ({
  ...item,
  path: `/category/${item.id}`,
}));
