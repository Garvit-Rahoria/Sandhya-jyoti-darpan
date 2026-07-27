import {
  FaChevronDown,
  FaHome,
  FaRegCalendarAlt,
  FaRegNewspaper,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import {
  IoBookOutline,
  IoLocationOutline,
  IoPlayCircleOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logoo from "../assets/logoo.png";
import epaperLogo from "../assets/epaper.png";
import ChangeCity from "./ChangeCity";
import Profile from "../pages/Profile";
import { menuItems } from "../data/sidebarMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const isWatchPage = location.pathname === "/watch";
  const isEpaperPage = location.pathname.startsWith("/e-paper");

  const showMagazineSection = () => {
    navigate("/e-paper");

    setTimeout(() => {
      document
        .getElementById("magazine-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-8 h-[65px] transition border-b-4 ${
      isActive
        ? "text-orange-500 border-orange-500"
        : "text-white border-transparent hover:text-orange-500"
    }`;

  const mobileIconClass = ({ isActive }) =>
    `flex h-[65px] w-10 items-center justify-center transition max-[420px]:w-8 ${
      isActive ? "text-orange-500" : "text-gray-100 hover:text-orange-500"
    }`;

  const epaperMobileButtonClass =
    "flex h-[65px] w-10 items-center justify-center text-gray-100 transition hover:text-orange-500 max-[420px]:w-8";

  const profileButton = (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowProfileMenu((value) => !value)}
        className="flex items-center gap-2 transition hover:text-orange-500"
        aria-label="Open profile menu"
      >
        <FaUserCircle className="text-4xl" />
        <FaChevronDown className="text-lg" />
      </button>
      {showProfileMenu && <Profile />}
    </div>
  );

  const isCategoryActive = (item) =>
    location.pathname === item.path ||
    (location.pathname === "/" && item.id === "top-news");

  return (
    <>
      <header className="sticky left-0 top-0 z-50 w-full overflow-visible border-b border-gray-700 bg-black text-white">
        <div className="mx-auto flex h-[65px] max-w-[1700px] items-center justify-between px-7 max-[991px]:gap-4 max-[991px]:px-4 max-[420px]:gap-2 max-[420px]:px-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center"
            aria-label="Go to home"
          >
            <img
              src={isEpaperPage ? epaperLogo : logoo}
              alt="Logo"
              className="w-30 object-contain max-[420px]:w-26"
            />
          </button>

          {!isWatchPage && !isEpaperPage && (
            <nav className="ml-auto hidden items-center gap-2 max-[991px]:flex max-[420px]:gap-4">
              <NavLink to="/web-stories" target="_blank" rel="noreferrer" className={mobileIconClass} aria-label="Web Stories">
                <IoBookOutline className="text-[30px] max-[420px]:text-[26px]" />
              </NavLink>

              <NavLink to="/e-paper" className={mobileIconClass} aria-label="E-paper">
                <FaRegNewspaper className="text-[28px] max-[420px]:text-[24px]" />
              </NavLink>

              <NavLink to="/watch" className={mobileIconClass} aria-label="Watch">
                <FaYoutube className="text-[30px] max-[420px]:text-[26px]" />
              </NavLink>

              <NavLink to="/search" className={mobileIconClass} aria-label="Search">
                <IoSearchOutline className="text-[32px] max-[420px]:text-[27px]" />
              </NavLink>
            </nav>
          )}

          {!isWatchPage && isEpaperPage && (
            <nav className="relative ml-auto hidden items-center gap-2 max-[768px]:flex max-[420px]:gap-2">
              <button
                type="button"
                onClick={() => setShowDatePicker((value) => !value)}
                className={epaperMobileButtonClass}
                aria-label="Change the date"
              >
                <FaRegCalendarAlt className="text-[27px] max-[420px]:text-[24px]" />
              </button>

              <button
                type="button"
                onClick={showMagazineSection}
                className={epaperMobileButtonClass}
                aria-label="Magazine"
              >
                <IoBookOutline className="text-[30px] max-[420px]:text-[26px]" />
              </button>

              <button
                type="button"
                onClick={() => setShowCitySelector(true)}
                className={epaperMobileButtonClass}
                aria-label="Change city"
              >
                <IoLocationOutline className="text-[31px] max-[420px]:text-[27px]" />
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowProfileMenu((value) => !value)}
                  className={epaperMobileButtonClass}
                  aria-label="Open profile menu"
                >
                  <FaUserCircle className="text-[31px] max-[420px]:text-[27px]" />
                </button>
                {showProfileMenu && <Profile />}
              </div>

              {showDatePicker && (
                <div className="absolute right-0 top-[65px] w-64 rounded-md border border-gray-700 bg-[#171717] p-4 shadow-2xl">
                  <p className="mb-3 text-sm font-semibold text-gray-300">Select e-paper date</p>
                  <input
                    type="date"
                    defaultValue="2026-07-20"
                    className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white outline-none focus:border-orange-500"
                  />
                </div>
              )}
            </nav>
          )}

          {!isWatchPage && isEpaperPage && (
            <div className="contents max-[768px]:hidden">
              <nav className="ml-auto mr-5 flex items-center gap-3">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDatePicker((value) => !value)}
                    className="flex h-[65px] items-center gap-2 px-4 text-white transition hover:text-orange-500"
                  >
                    <FaRegCalendarAlt className="text-2xl" />
                    <span className="text-[17px] font-bold">Change the date</span>
                  </button>

                  {showDatePicker && (
                    <div className="absolute right-0 top-[65px] w-64 rounded-md border border-gray-700 bg-[#171717] p-4 shadow-2xl">
                      <p className="mb-3 text-sm font-semibold text-gray-300">Select e-paper date</p>
                      <input
                        type="date"
                        defaultValue="2026-07-20"
                        className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white outline-none focus:border-orange-500"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={showMagazineSection}
                  className="flex h-[65px] items-center gap-2 px-4 text-white transition hover:text-orange-500"
                >
                  <IoBookOutline className="text-2xl" />
                  <span className="text-[17px] font-bold">Magazine</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowCitySelector(true)}
                  className="flex h-[65px] items-center gap-2 px-4 text-white transition hover:text-orange-500"
                >
                  <IoLocationOutline className="text-2xl" />
                  <span className="text-[17px] font-bold">Change city</span>
                </button>
              </nav>

              {profileButton}
            </div>
          )}

          {!isWatchPage && !isEpaperPage && (
            <div className="contents max-[991px]:hidden">
              <nav className="flex items-center">
                <NavLink to="/" className={navClass}>
                  <FaHome className="text-3xl" />
                  <span className="text-[16px] font-semibold">Home</span>
                </NavLink>

                <div className="h-12 w-px bg-gray-700" />

                <NavLink to="/videos" className={navClass}>
                  <IoPlayCircleOutline className="text-3xl" />
                  <span className="text-[16px] font-semibold">Video</span>
                </NavLink>

                <div className="h-12 w-px bg-gray-700" />

                <NavLink to="/search" className={navClass}>
                  <IoSearchOutline className="text-3xl" />
                  <span className="text-[16px] font-semibold">Search</span>
                </NavLink>

                <div className="h-12 w-px bg-gray-700" />

                <NavLink to="/watch" className={navClass}>
                  <FaYoutube className="text-3xl" />
                  <span className="text-[16px] font-semibold">Watch</span>
                </NavLink>

                <div className="h-12 w-px bg-gray-700" />

                <NavLink to="/web-stories" target="_blank" rel="noreferrer" className={navClass}>
                  <IoBookOutline className="text-3xl" />
                  <span className="text-[16px] font-semibold">Web Stories</span>
                </NavLink>

                <div className="h-12 w-px bg-gray-700" />

                <NavLink to="/e-paper" className={navClass}>
                  <FaRegNewspaper className="text-3xl" />
                  <span className="text-[16px] font-semibold">E-paper</span>
                </NavLink>
              </nav>

              {profileButton}
            </div>
          )}
        </div>

        {!isWatchPage && !isEpaperPage && (
          <nav className="hidden h-10 items-center overflow-x-auto border-t border-gray-800 bg-[#202020] px-2 max-[991px]:flex hide-scrollbar">
            <div className="flex min-w-max items-center gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`relative flex h-10 shrink-0 items-center gap-2 px-2 text-[12px] font-bold capitalize transition ${
                    isCategoryActive(item)
                      ? "text-white after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gray-400"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[14px] [&_svg]:text-[15px] [&_span]:h-5 [&_span]:w-5 [&_span]:text-[13px]">
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap">{item.title}</span>
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {showCitySelector && <ChangeCity onClose={() => setShowCitySelector(false)} />}
    </>
  );
};

export default Header;
