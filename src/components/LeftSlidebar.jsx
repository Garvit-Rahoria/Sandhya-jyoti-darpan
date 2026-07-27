import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../data/sidebarMenu";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function LeftSidebar() {
  const location = useLocation();

  const isItemActive = (item) =>
    location.pathname === item.path ||
    (location.pathname === "/" && item.id === "top-news");

  return (
    <>

    <aside className="w-[240px] self-start bg-[#1a1a1a] border-r border-gray-700 py-5 px-3 max-[991px]:hidden">
      <div className="space-y-2 max-[991px]:hidden">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={`w-full flex items-center gap-5 px-2 py-3 rounded-xl transition-all duration-300
              ${
                isItemActive(item)
                  ? "bg-[#2b2b2b] text-white"
                  : "text-gray-300 hover:bg-[#2b2b2b]"
              }`}
          >
            {item.icon}

            <span className="text-lg font-semibold">
              {item.title}
            </span>
          </NavLink>
        ))}
      </div>

      <div className="mt-8 rounded-xl border-gray-700 bg-[#1b1b1b] px-4 py-6 text-center max-[991px]:mt-0">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">
          Download App from
        </h3>

        <a href="#" className="block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="mx-auto mb-3 w-44 rounded-lg transition hover:scale-105"
          />
        </a>

        <a href="#" className="block">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="mx-auto w-44 rounded-lg transition hover:scale-105"
          />
        </a>

        <h3 className="mb-4 mt-8 text-sm font-semibold text-gray-400">
          Follow us on
        </h3>

        <div className="flex justify-center gap-3">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-blue-600"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg text-white" />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-black"
            aria-label="X"
          >
            <BsTwitterX className="text-lg text-white" />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-pink-600"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg text-white" />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-red-600"
            aria-label="YouTube"
          >
            <FaYoutube className="text-lg text-white" />
          </a>
        </div>
      </div>
    </aside>

    
    
    </>
    
  );
}
